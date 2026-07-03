##########################################################
# Bastion EC2
##########################################################

resource "aws_instance" "bastion" {

  ami           = var.ami_id

  instance_type = var.instance_type

  subnet_id = var.public_subnet_id

  key_name = var.key_name

  associate_public_ip_address = true

  vpc_security_group_ids = [
    var.bastion_security_group_id
  ]

  tags = merge(
    var.common_tags,
    {
      Name = "${var.project_name}-bastion"
    }
  )

}

##########################################################
# Private EC2
##########################################################

resource "aws_instance" "private_ec2" {

  ami           = var.ami_id

  instance_type = var.instance_type

  subnet_id = var.private_subnet_id

  key_name = var.key_name

  associate_public_ip_address = false

  vpc_security_group_ids = [
    var.private_ec2_security_group_id
  ]

  user_data = file("${path.module}/user_data.sh")

  tags = merge(
    var.common_tags,
    {
      Name = "${var.project_name}-private-ec2"
    }
  )

}