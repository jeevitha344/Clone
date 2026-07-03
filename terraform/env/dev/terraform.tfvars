aws_region = "ap-south-1"

project_name = "terraform-demo"

environment = "dev"

vpc_cidr = "10.0.0.0/16"

public_subnet_1_cidr = "10.0.1.0/24"

public_subnet_2_cidr = "10.0.2.0/24"

private_subnet_cidr = "10.0.3.0/24"

availability_zone_1 = "ap-south-1a"

availability_zone_2 = "ap-south-1b"

common_tags = {
  created_for = "learning"
  created_by  = "Jeevitha"
  project     = "learning"
}

##########################################################
# EC2 Configuration
##########################################################

ami_id = "ami-0d351f1b760a30161"

instance_type = "t2.micro"


github_owner = "jeevitha344"

github_repository = "Clone"

github_branch = "terraform-cicd"

codestar_connection_arn = "arn:aws:codeconnections:ap-south-1:302954731417:connection/7db2899e-f588-4e67-8d49-a376ba3dfe26"