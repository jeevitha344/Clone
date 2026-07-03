output "vpc_id" {
  value = module.vpc.vpc_id
}

output "public_subnet_1_id" {
  value = module.vpc.public_subnet_1_id
}

output "public_subnet_2_id" {
  value = module.vpc.public_subnet_2_id
}

output "private_subnet_id" {
  value = module.vpc.private_subnet_id
}

output "internet_gateway_id" {
  value = module.vpc.internet_gateway_id
}

output "public_route_table_id" {
  value = module.vpc.public_route_table_id
}

output "private_route_table_id" {
  value = module.vpc.private_route_table_id
}

##########################################################
# EC2 Outputs
##########################################################

output "bastion_instance_id" {
  value = module.ec2.bastion_instance_id
}

output "bastion_public_ip" {
  value = module.ec2.bastion_public_ip
}

output "private_ec2_instance_id" {
  value = module.ec2.private_ec2_instance_id
}

output "private_ec2_private_ip" {
  value = module.ec2.private_ec2_private_ip
}

##########################################################
# ALB Outputs
##########################################################

output "alb_arn" {
  value = module.alb.alb_arn
}

output "alb_dns_name" {
  value = module.alb.alb_dns_name
}

output "target_group_arn" {
  value = module.alb.target_group_arn
}

output "listener_arn" {
  value = module.alb.listener_arn
}


output "key_pair_name" {
  value = aws_key_pair.terraform_key.key_name
}

output "private_key_file" {
  value = local_file.private_key.filename
}

