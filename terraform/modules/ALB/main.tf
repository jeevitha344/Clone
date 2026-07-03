# Create ALB

resource "aws_lb" "alb" {

  name               = "${var.project_name}-alb"

  internal           = false

  load_balancer_type = "application"

  security_groups = [
    var.alb_security_group_id
  ]

  subnets = [
    var.public_subnet_1_id,
    var.public_subnet_2_id
  ]

  tags = merge(
    var.common_tags,
    {
      Name = "${var.project_name}-alb"
    }
  )

}

# Create Target Group

resource "aws_lb_target_group" "target_group" {

  name = "${var.project_name}-tg"

  port = 5000

  protocol = "HTTP"

  vpc_id = var.vpc_id

  health_check {

    path = "/"

    protocol = "HTTP"

    matcher = "200"

  }

  tags = merge(
    var.common_tags,
    {
      Name = "${var.project_name}-tg"
    }
  )

}

 # Register Private EC2

resource "aws_lb_target_group_attachment" "private_ec2" {

  target_group_arn = aws_lb_target_group.target_group.arn

  target_id = var.private_ec2_instance_id

  port = 5000
  
  depends_on = [
    aws_lb_listener.http
  ]

}

# Create Listener

resource "aws_lb_listener" "http" {

  load_balancer_arn = aws_lb.alb.arn

  port = 80

  protocol = "HTTP"

  default_action {

    type = "forward"

    target_group_arn = aws_lb_target_group.target_group.arn

  }

}

