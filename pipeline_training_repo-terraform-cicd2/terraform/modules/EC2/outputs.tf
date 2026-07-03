##########################################################
# Bastion Outputs
##########################################################

output "bastion_instance_id" {

  description = "Bastion Instance ID"

  value = aws_instance.bastion.id

}

output "bastion_public_ip" {

  description = "Bastion Public IP"

  value = aws_instance.bastion.public_ip

}

##########################################################
# Private EC2 Outputs
##########################################################

output "private_ec2_instance_id" {

  description = "Private EC2 Instance ID"

  value = aws_instance.private_ec2.id

}

output "private_ec2_private_ip" {

  description = "Private EC2 Private IP"

  value = aws_instance.private_ec2.private_ip

}

