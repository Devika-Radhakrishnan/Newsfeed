import React from 'react';
import Form from 'react-bootstrap/Form';
function Comment(props) {
  let CommentFromParent = props.commentContent;
  return (
    <div>
      <Form.Group>
        <br></br>
        <Form.Control type='text' placeholder='Add a comment...' />
        {CommentFromParent}
        <br />
      </Form.Group>
    </div>
  );
}

export default Comment;
