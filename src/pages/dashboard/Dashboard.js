import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const token = localStorage.getItem("token");
  const[users , setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect (()=>{
    const fetchUsers = async()=>{
      try {
        const result = await fetch("http://localhost:5001/api/users",{
          headers:{
            Authorization:`Bearer ${token}`

          }
        });
const response = await result.json();
setUsers(response);



      } catch (error) {
        console.error(error.message)
      }
      if(token)
  fetchUsers();
else
navigate("/login")
    }
  },[token,navigate])




  return (
   <Container className='mt-5'>
    <Row>
      <Col>
      <h1 className='text-center'>Dashboard</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          
            {users.map((user)=>{
              <tr key={user._id}>
                 <td>{user.name}</td>
                  <td>{user.email}</td>
              </tr>
            })}
           
        </tbody>
      </Table>
      </Col>
    </Row>

   </Container>
  )
}

export default Dashboard
