import React, { useState, useEffect } from 'react';
import Comment from './Comment.js';
import axios from 'axios';

function PostCommentWrapper() {
  return (
    <React.Fragment>
      <Comment commentContent='dummycomment' />
    </React.Fragment>
  );
}

export default PostCommentWrapper;
