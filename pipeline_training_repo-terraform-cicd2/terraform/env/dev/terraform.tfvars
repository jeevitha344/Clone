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


github_owner = "Meyi-Cloud"

github_repository = "pipeline_training_repo"

github_branch = "terraform-cicd2"

codestar_connection_arn = "arn:aws:codeconnections:ap-south-1:369606757523:connection/680ffedd-c4e8-4ed1-9f9a-182ad5463704"