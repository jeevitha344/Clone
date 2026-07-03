##########################################################
# ALB Security Group ID
##########################################################

output "alb_security_group_id" {

  description = "ALB Security Group ID"

  value = aws_security_group.alb_sg.id

}

##########################################################
# Bastion Security Group ID
##########################################################

output "bastion_security_group_id" {

  description = "Bastion Security Group ID"

  value = aws_security_group.bastion_sg.id

}

##########################################################
# Private EC2 Security Group ID
##########################################################

output "private_ec2_security_group_id" {

  description = "Private EC2 Security Group ID"

  value = aws_security_group.private_ec2_sg.id

}