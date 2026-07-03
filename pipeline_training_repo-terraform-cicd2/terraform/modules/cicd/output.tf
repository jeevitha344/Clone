# ==========================================================
# CodePipeline Outputs
# ==========================================================

output "pipeline_name" {
  description = "Name of the CodePipeline"
  value       = aws_codepipeline.flask_pipeline.name
}

output "pipeline_arn" {
  description = "ARN of the CodePipeline"
  value       = aws_codepipeline.flask_pipeline.arn
}

# ==========================================================
# CodeBuild Outputs
# ==========================================================

output "codebuild_project_name" {
  description = "Name of the CodeBuild project"
  value       = aws_codebuild_project.flask_build.name
}

output "codebuild_project_arn" {
  description = "ARN of the CodeBuild project"
  value       = aws_codebuild_project.flask_build.arn
}

# ==========================================================
# CodeDeploy Outputs
# ==========================================================

output "codedeploy_application_name" {
  description = "Name of the CodeDeploy application"
  value       = aws_codedeploy_app.flask_app.name
}

output "deployment_group_name" {
  description = "Name of the CodeDeploy deployment group"
  value       = aws_codedeploy_deployment_group.flask_group.deployment_group_name
}

# ==========================================================
# Artifact Bucket Outputs
# ==========================================================

output "artifact_bucket_name" {
  description = "S3 bucket used to store CodePipeline artifacts"
  value       = aws_s3_bucket.artifact_bucket.bucket
}

output "artifact_bucket_arn" {
  description = "ARN of the artifact S3 bucket"
  value       = aws_s3_bucket.artifact_bucket.arn
}

