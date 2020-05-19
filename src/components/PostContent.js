import React from 'react';
import PostHeader from './PostHeader';
// import PostImage from './PostImage';
// import PostText from './PostText';
// import Comment from './Comment.js';
import PostCommentWrapper from './PostCommentWrapper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function PostContent(props) {
  let AuthorFromParent = props.cardAuthor;
  let TitleFromParent = props.cardTitle;
  let DescrFromParent = props.descr;
  let PublishFromParent = props.publishDate;
  let ImageFromParent = props.imageUrl;
  let UrlFromParent = props.urlLink;
  return (
    <div>
      <div>
        <Container className='margin-header'>
          <Row>
            <Col
              md={{ span: 9, offset: 2 }}
              sm={{ span: 4 }}
              xs={{ span: 6 }}
              className='media-card'
            >
              <Card className='header-form'>
                <PostHeader />
                <Card.Img variant='top' src={ImageFromParent} />
                <Card.Body>
                  <Card.Title>Author: {AuthorFromParent}</Card.Title>
                  <Card.Text>Title: {TitleFromParent}</Card.Text>
                  <a href={UrlFromParent}>URLNAME</a>
                  <p>Description: {DescrFromParent}</p>
                  <h6>Date: {PublishFromParent}</h6>
                  <PostCommentWrapper />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br></br>
        </Container>
        <br></br>
      </div>

      {/* <PostImage /> */}
      {/* <PostText /> */}
    </div>
  );
}

export default PostContent;
