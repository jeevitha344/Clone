terraform {
  backend "s3" {
    bucket = "jeevitha-tf-state-302954731417-ap-south-1-an"
    key    = "network/terraform.tfstate"
    region = "ap-south-1"
  }
}
