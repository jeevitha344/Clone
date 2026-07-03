# ==========================================
# VPC
# ==========================================

resource "aws_vpc" "main" {

  cidr_block           = var.vpc_cidr
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = merge(
    var.common_tags,
    {
      Name = "${var.project_name}-vpc"
    }
  )
}

# ==========================================
# Internet Gateway
# ==========================================

resource "aws_internet_gateway" "igw" {

  vpc_id = aws_vpc.main.id

  tags = merge(
    var.common_tags,
    {
      Name = "${var.project_name}-igw"
    }
  )
}

# ==========================================
# Public Subnet 1
# ==========================================

resource "aws_subnet" "public_subnet_1" {

  vpc_id                  = aws_vpc.main.id
  cidr_block              = var.public_subnet_1_cidr
  availability_zone       = var.availability_zone
  map_public_ip_on_launch = true

  tags = merge(
    var.common_tags,
    {
      Name = "${var.project_name}-public-subnet-1"
    }
  )
}

# ==========================================
# Public Subnet 2
# ==========================================

resource "aws_subnet" "public_subnet_2" {

  vpc_id                  = aws_vpc.main.id
  cidr_block              = var.public_subnet_2_cidr
  availability_zone       = var.availability_zone_2
  map_public_ip_on_launch = true

  tags = merge(
    var.common_tags,
    {
      Name = "${var.project_name}-public-subnet-2"
    }
  )
}

# ==========================================
# Private Subnet
# ==========================================

resource "aws_subnet" "private_subnet" {

  vpc_id            = aws_vpc.main.id
  cidr_block        = var.private_subnet_cidr
  availability_zone = var.availability_zone

  tags = merge(
    var.common_tags,
    {
      Name = "${var.project_name}-private-subnet"
    }
  )
}

# ==========================================
# Public Route Table
# ==========================================

resource "aws_route_table" "public_rt" {

  vpc_id = aws_vpc.main.id

  tags = merge(
    var.common_tags,
    {
      Name = "${var.project_name}-public-rt"
    }
  )
}

# ==========================================
# Public Route (Internet Access)
# ==========================================

resource "aws_route" "internet_access" {

  route_table_id         = aws_route_table.public_rt.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.igw.id
}

# ==========================================
# Associate Public Subnet 1 with Public Route Table
# ==========================================

resource "aws_route_table_association" "public_subnet_1_association" {

  subnet_id      = aws_subnet.public_subnet_1.id
  route_table_id = aws_route_table.public_rt.id
}

# ==========================================
# Associate Public Subnet 2 with Public Route Table
# ==========================================

resource "aws_route_table_association" "public_subnet_2_association" {

  subnet_id      = aws_subnet.public_subnet_2.id
  route_table_id = aws_route_table.public_rt.id
}

# ==========================================
# Private Route Table
# ==========================================

resource "aws_route_table" "private_rt" {

  vpc_id = aws_vpc.main.id

  tags = merge(
    var.common_tags,
    {
      Name = "${var.project_name}-private-rt"
    }
  )
}

# ==========================================
# Associate Private Subnet with Private Route Table
# ==========================================

resource "aws_route_table_association" "private_subnet_association" {

  subnet_id      = aws_subnet.private_subnet.id
  route_table_id = aws_route_table.private_rt.id
}

