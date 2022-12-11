terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region     = "us-east-1"
  access_key = "AKIAXCQQOE6FNS7PMQ36"
  secret_key = "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"
}
  


resource "aws_instance" "myinstance01" {
  ami           = "ami-0b0dcb5067f052a63" 
  instance_type = "t2.micro"
  count = "1"
  

  
  tags = {
    Name = "Server_1"
  }

}
resource "aws_instance" "myinstance02" {
  ami           = "ami-0574da719dca65348" 
  instance_type = "t2.micro"
  count = "1"
  
  tags = {
    Name = "Server_2"
  }

}
