variable "project_name" {
  description = "Project Name"
  type        = string
}

variable "vpc_cidr" {
  description = "VPC CIDR Block"
  type        = string
}

variable "public_subnet_1_cidr" {
  description = "CIDR for Public Subnet 1"
  type        = string
}

variable "public_subnet_2_cidr" {
  description = "CIDR for Public Subnet 2"
  type        = string
}

variable "private_subnet_cidr" {
  description = "CIDR for Private Subnet"
  type        = string
}

variable "availability_zone" {
  description = "Availability Zone"
  type        = string
}

variable "availability_zone_2" {
  type = string
}

variable "common_tags" {
  description = "Common tags"
  type        = map(string)
}

