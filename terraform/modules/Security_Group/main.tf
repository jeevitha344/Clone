##########################################################
# ALB Security Group
##########################################################

resource "aws_security_group" "alb_sg" {

  name        = "${var.project_name}-alb-sg"
  description = "Security Group for ALB"
  vpc_id      = var.vpc_id

  ingress {

    description = "Allow HTTP"

    from_port = 5000

    to_port = 5000

    protocol = "tcp"

    cidr_blocks = ["0.0.0.0/0"]

  }

  egress {

    from_port = 0

    to_port = 0

    protocol = "-1"

    cidr_blocks = ["0.0.0.0/0"]

  }

  tags = merge(
    var.common_tags,
    {
      Name = "${var.project_name}-alb-sg"
    }
  )

}

##########################################################
# Bastion Security Group
##########################################################

resource "aws_security_group" "bastion_sg" {

  name        = "${var.project_name}-bastion-sg"
  description = "Security Group for Bastion Host"
  vpc_id      = var.vpc_id

  ingress {

    description = "Allow SSH"

    from_port = 22

    to_port = 22

    protocol = "tcp"

    cidr_blocks = ["0.0.0.0/0"]

    # Replace with your public IP later
    # Example:
    # cidr_blocks = ["49.xxx.xxx.xxx/32"]

  }

  egress {

    from_port = 0

    to_port = 0

    protocol = "-1"

    cidr_blocks = ["0.0.0.0/0"]

  }

  tags = merge(
    var.common_tags,
    {
      Name = "${var.project_name}-bastion-sg"
    }
  )

}

##########################################################
# Private EC2 Security Group
##########################################################

resource "aws_security_group" "private_ec2_sg" {

  name        = "${var.project_name}-private-ec2-sg"
  description = "Security Group for Private EC2"
  vpc_id      = var.vpc_id

  ##########################################################
  # Allow HTTP only from ALB
  ##########################################################

  ingress {

    description = "HTTP from ALB"

    from_port = 5000

    to_port = 5000

    protocol = "tcp"

    security_groups = [
      aws_security_group.alb_sg.id
    ]

  }

  ##########################################################
  # Allow SSH only from Bastion
  ##########################################################

  ingress {

    description = "SSH from Bastion"

    from_port = 22

    to_port = 22

    protocol = "tcp"

    security_groups = [
      aws_security_group.bastion_sg.id
    ]

  }

  ##########################################################
  # Outbound
  ##########################################################

  egress {

    from_port = 0

    to_port = 0

    protocol = "-1"

    cidr_blocks = ["0.0.0.0/0"]

  }

  tags = merge(
    var.common_tags,
    {
      Name = "${var.project_name}-private-ec2-sg"
    }
  )

}