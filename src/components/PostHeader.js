import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PostHeader() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <div>
              <Image
                className='head-img'
                src={require('../image/avatar.jpg')}
                roundedCircle
              />
              <h4 className='text-form'>Devika R</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PostHeader;
