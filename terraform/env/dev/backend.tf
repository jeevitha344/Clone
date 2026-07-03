terraform {
  backend "s3" {
    bucket = "learning-tf-state-ap-south-1-001"
    key    = "network/terraform.tfstate"
    region = "ap-south-1"
  }
}
