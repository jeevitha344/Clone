##########################################################
# EC2 IAM Role
##########################################################

resource "aws_iam_role" "ec2_role" {

  name = "${var.project_name}-ec2-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Principal = {
          Service = "ec2.amazonaws.com"
        }

        Action = "sts:AssumeRole"
      }
    ]
  })
}

##########################################################
# Attach CodeDeploy Policy
##########################################################

resource "aws_iam_role_policy_attachment" "codedeploy_ec2_policy" {

  role = aws_iam_role.ec2_role.name

  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonEC2RoleforAWSCodeDeploy"
}

##########################################################
# Attach SSM Policy (Recommended)
##########################################################

resource "aws_iam_role_policy_attachment" "ssm_policy" {

  role = aws_iam_role.ec2_role.name

  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}

##########################################################
# EC2 Instance Profile
##########################################################

resource "aws_iam_instance_profile" "ec2_profile" {

  name = "${var.project_name}-ec2-profile"

  role = aws_iam_role.ec2_role.name
}