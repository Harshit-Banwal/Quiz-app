// UserPanel.js
import '../assets/css/Home.css';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const User = () => {
  // Sample user data
  return (
    <Container className="margin-top text-center">
      <h2>Welcome to the User Panel</h2>
      <Row className="mt-4">
        <Col>
          <Link to="/quizzes" className="btn btn-primary space">
            View Quizzes
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default User;
