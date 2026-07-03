variable "project_name" {
  description = "Project Name"
  type        = string
}

variable "ami_id" {
  description = "Amazon Linux AMI"
  type        = string
}

variable "instance_type" {
  description = "EC2 Instance Type"
  type        = string
}

variable "public_subnet_id" {
  description = "Public Subnet ID"
  type        = string
}

variable "private_subnet_id" {
  description = "Private Subnet ID"
  type        = string
}

variable "bastion_security_group_id" {
  description = "Bastion Security Group"
  type        = string
}

variable "private_ec2_security_group_id" {
  description = "Private EC2 Security Group"
  type        = string
}

variable "common_tags" {
  description = "Common Tags"
  type        = map(string)
}

variable "key_name" {
  description = "EC2 Key Pair Name"
  type        = string
}