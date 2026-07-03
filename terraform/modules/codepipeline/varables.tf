# ==========================================================
# GitHub Repository Configuration
# ==========================================================

variable "github_owner" {
  description = "GitHub organization or username"
  type        = string
}

variable "github_repo" {
  description = "GitHub repository name"
  type        = string
}

variable "github_branch" {
  description = "GitHub branch to monitor"
  type        = string
  default     = "main"
}

# ==========================================================
# AWS CodeStar Connection
# ==========================================================

variable "codestar_connection_arn" {
  description = "AWS CodeStar Connection ARN used to connect GitHub"
  type        = string
}

# ==========================================================
# EC2 Configuration
# ==========================================================

variable "ec2_tag_name" {
  description = "EC2 Name tag used by CodeDeploy Deployment Group"
  type        = string
}

# ==========================================================
# Resource Names
# ==========================================================

variable "pipeline_name" {
  description = "AWS CodePipeline name"
  type        = string
  default     = "terraform-flask-pipeline"
}

variable "codebuild_project_name" {
  description = "AWS CodeBuild project name"
  type        = string
  default     = "flask-build"
}

variable "codedeploy_application_name" {
  description = "AWS CodeDeploy application name"
  type        = string
  default     = "flask-app"
}

variable "codedeploy_deployment_group_name" {
  description = "AWS CodeDeploy deployment group name"
  type        = string
  default     = "flask-group"
}

# ==========================================================
# Artifact Bucket
# ==========================================================

variable "artifact_bucket_prefix" {
  description = "Prefix for the CodePipeline artifact S3 bucket"
  type        = string
  default     = "terraform-flask-artifacts"
}


variable "github_owner" {
  description = "GitHub owner name"
  type        = string
}

variable "github_repository" {
  description = "GitHub repository name"
  type        = string
}

variable "github_branch" {
  description = "GitHub branch"
  type        = string
}

variable "codestar_connection_arn" {
  description = "AWS CodeStar Connection ARN"
  type        = string
}

