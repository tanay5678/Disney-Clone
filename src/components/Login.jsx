import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <Logo1 src="/images/cta-logo-one.svg"></Logo1>
        <Signup>GET ALL THERE</Signup>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod tempore
          perspiciatis rerum ipsa, optio unde expedita placeat voluptatum
          cupiditate sequi odit architecto sunt quo vitae atque veniam officia?
          Optio, debitis?
        </Description>
        <Logo2 src="/images/cta-logo-two.png"></Logo2>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: top;

  &:before {
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    z-index: -1;
  }
`;

const Content = styled.div`
  max-width: 650px;
  width: 70%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;
const Logo1 = styled.img``;

const Signup = styled.a`
  width: 100%;
  background-color: #0063e6;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 18px;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1.5px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 12px;
  opacity: 0.6;
  letter-spacing: 1.2px;
`;

const Logo2 = styled.img`
  padding: 15px 0;
`;
