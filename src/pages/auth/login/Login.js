import { useState } from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.75rem 1rem;
  margin-top: 1rem;
  width: 100%;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;




const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
   
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      localStorage.setItem ( "token" , result.token)
      console.log(result);
      navigate("/dashboard");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <LoginContainer>
    <Form onSubmit={handleSubmit}>
      <Title>Login</Title>
       <Input
        type="email"
        placeholder="Email"
        name="email"
        value={data.email}
        onChange={handleInputChange}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={data.password}
        onChange={handleInputChange}
      />
     
      <Button type="submit">Login</Button>
    </Form>
  </LoginContainer>
  )
}

export default Login
