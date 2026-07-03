variable "project_name" {
  description = "Project Name"
  type        = string
}

variable "vpc_id" {
  description = "VPC ID"
  type        = string
}

variable "public_subnet_1_id" {
  description = "Public Subnet 1 ID"
  type        = string
}

variable "public_subnet_2_id" {
  description = "Public Subnet 2 ID"
  type        = string
}

variable "alb_security_group_id" {
  description = "ALB Security Group ID"
  type        = string
}

variable "private_ec2_instance_id" {
  description = "Private EC2 Instance ID"
  type        = string
}

variable "common_tags" {
  description = "Common Tags"
  type        = map(string)
}