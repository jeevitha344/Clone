# ==========================================================
# Random ID for unique S3 Artifact Bucket
# ==========================================================

resource "random_id" "suffix" {
  byte_length = 4
}

# ==========================================================
# Artifact Bucket
# ==========================================================

resource "aws_s3_bucket" "artifact_bucket" {
  bucket = "terraform-flask-artifacts-${random_id.suffix.hex}"
}

# ==========================================================
# CodePipeline IAM Role
# ==========================================================

resource "aws_iam_role" "codepipeline_role" {
  name = "codepipeline-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Principal = {
          Service = "codepipeline.amazonaws.com"
        }

        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_role_policy" "codepipeline_policy" {

  name = "codepipeline-inline-policy"
  role = aws_iam_role.codepipeline_role.id

  policy = jsonencode({

    Version = "2012-10-17"

    Statement = [

      {
        Effect = "Allow"

        Action = [
          "s3:*",
          "codebuild:*",
          "codedeploy:*",
          "codeconnections:UseConnection",
          "cloudwatch:*",
          "logs:*",
          "iam:PassRole"
        ]

        Resource = "*"
      }

    ]
  })
}

# ==========================================================
# CodeBuild IAM Role
# ==========================================================

resource "aws_iam_role" "codebuild_role" {
  name = "codebuild-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Principal = {
          Service = "codebuild.amazonaws.com"
        }

        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_role_policy" "codebuild_policy" {
  name = "codebuild-inline-policy"
  role = aws_iam_role.codebuild_role.id

  policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]

        Resource = "*"
      },
      {
        Effect = "Allow"

        Action = [
          "s3:GetObject",
          "s3:GetObjectVersion",
          "s3:PutObject"
        ]

        Resource = "*"
      }
    ]
  })
}

# ==========================================================
# CodeBuild Project
# ==========================================================

resource "aws_codebuild_project" "flask_build" {

  name         = "flask-build"
  service_role = aws_iam_role.codebuild_role.arn

  artifacts {
    type = "CODEPIPELINE"
  }

  source {
    type = "CODEPIPELINE"
  }

  environment {
    compute_type = "BUILD_GENERAL1_SMALL"
    image         = "aws/codebuild/standard:6.0"
    type          = "LINUX_CONTAINER"

    image_pull_credentials_type = "CODEBUILD"
  }
}

# ==========================================================
# CodeDeploy IAM Role
# ==========================================================

resource "aws_iam_role" "codedeploy_role" {
  name = "codedeploy-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Principal = {
          Service = "codedeploy.amazonaws.com"
        }

        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "codedeploy_policy" {
  role       = aws_iam_role.codedeploy_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSCodeDeployRole"
}

# ==========================================================
# CodeDeploy Application
# ==========================================================

resource "aws_codedeploy_app" "flask_app" {
  name             = "flask-app"
  compute_platform = "Server"
}

# ==========================================================
# CodeDeploy Deployment Group
# ==========================================================

resource "aws_codedeploy_deployment_group" "flask_group" {

  app_name              = aws_codedeploy_app.flask_app.name
  deployment_group_name = "flask-group"
  service_role_arn      = aws_iam_role.codedeploy_role.arn

  ec2_tag_filter {
    key   = "Name"
    type  = "KEY_AND_VALUE"
    value = var.ec2_tag_name
  }
}

# ==========================================================
# CodePipeline
# ==========================================================

resource "aws_codepipeline" "flask_pipeline" {

  name     = "terraform-flask-pipeline"
  role_arn = aws_iam_role.codepipeline_role.arn

  artifact_store {

    location = aws_s3_bucket.artifact_bucket.bucket
    type     = "S3"
  }

  # ---------------- Source Stage ----------------

  stage {

    name = "Source"

    action {

      name             = "Source"
      category         = "Source"
      owner            = "AWS"
      provider         = "CodeStarSourceConnection"
      version          = "1"

      output_artifacts = ["source_output"]

      configuration = {

        ConnectionArn    = var.codestar_connection_arn
        FullRepositoryId = "${var.github_owner}/${var.github_repo}"
        BranchName       = var.github_branch
      }
    }
  }

  # ---------------- Build Stage ----------------

  stage {

    name = "Build"

    action {

      name             = "Build"
      category         = "Build"
      owner            = "AWS"
      provider         = "CodeBuild"
      version          = "1"

      input_artifacts  = ["source_output"]
      output_artifacts = ["build_output"]

      configuration = {
        ProjectName = aws_codebuild_project.flask_build.name
      }
    }
  }

  # ---------------- Deploy Stage ----------------

  stage {

    name = "Deploy"

    action {

      name            = "Deploy"
      category        = "Deploy"
      owner           = "AWS"
      provider        = "CodeDeploy"
      version         = "1"

      input_artifacts = ["build_output"]

      configuration = {

        ApplicationName     = aws_codedeploy_app.flask_app.name
        DeploymentGroupName = aws_codedeploy_deployment_group.flask_group.deployment_group_name
      }
    }
  }
}

