##########################################################
# VPC Module
##########################################################

module "vpc" {

  ########################################################
  # Path to the VPC Module
  ########################################################

  source = "../../modules/vpc"

  ########################################################
  # Project Details
  ########################################################

  project_name = var.project_name

  ########################################################
  # VPC Configuration
  ########################################################

  vpc_cidr = var.vpc_cidr

  ########################################################
  # Public Subnets
  ########################################################

  public_subnet_1_cidr = var.public_subnet_1_cidr

  public_subnet_2_cidr = var.public_subnet_2_cidr

  ########################################################
  # Private Subnet
  ########################################################

  private_subnet_cidr = var.private_subnet_cidr

  ########################################################
  # Availability Zone
  ########################################################

  availability_zone   = var.availability_zone_1
  availability_zone_2 = var.availability_zone_2

  ########################################################
  # Common Tags
  ########################################################

  common_tags = var.common_tags
}

##########################################################
# Security Group Module
##########################################################

module "security_group" {

  source = "../../modules/Security_Group"

  ########################################################
  # Project Details
  ########################################################

  project_name = var.project_name

  ########################################################
  # VPC
  ########################################################

  vpc_id = module.vpc.vpc_id

  ########################################################
  # Common Tags
  ########################################################

  common_tags = var.common_tags

}

module "ec2" {

  source = "../../modules/ec2"

  ########################################################
  # Project Details
  ########################################################
  project_name = var.project_name

  ########################################################
  # EC2 Configuration
  ########################################################
  ami_id        = var.ami_id
  instance_type = var.instance_type

  key_name = aws_key_pair.terraform_key.key_name

  ########################################################
  # ADD THIS (IMPORTANT FIX)
  ########################################################
  private_key = tls_private_key.terraform_key.private_key_pem

  ec2_instance_profile = aws_iam_instance_profile.ec2_profile.name
  ########################################################
  # Networking
  ########################################################
  public_subnet_id  = module.vpc.public_subnet_1_id
  private_subnet_id = module.vpc.private_subnet_id

  ########################################################
  # Security Groups
  ########################################################
  bastion_security_group_id     = module.security_group.bastion_security_group_id
  private_ec2_security_group_id = module.security_group.private_ec2_security_group_id

  ########################################################
  # Common Tags
  ########################################################
  common_tags = var.common_tags
}


##########################################################
# ALB Module
##########################################################

module "alb" {

  source = "../../modules/alb"

  ########################################################
  # Project Details
  ########################################################

  project_name = var.project_name

  ########################################################
  # VPC
  ########################################################

  vpc_id = module.vpc.vpc_id

  ########################################################
  # Public Subnets
  ########################################################

  public_subnet_1_id = module.vpc.public_subnet_1_id
  public_subnet_2_id = module.vpc.public_subnet_2_id

  ########################################################
  # Security Group
  ########################################################

  alb_security_group_id = module.security_group.alb_security_group_id

  ########################################################
  # Target Instance
  ########################################################

  private_ec2_instance_id = module.ec2.private_ec2_instance_id

  ########################################################
  # Common Tags
  ########################################################

  common_tags = var.common_tags

}

module "cicd" {
  source = "../../modules/cicd"

  github_owner            = var.github_owner
  github_repo             = var.github_repository
  github_branch           = var.github_branch
  codestar_connection_arn = var.codestar_connection_arn

  ec2_tag_name = "terraform-demo-private-ec2"
}

