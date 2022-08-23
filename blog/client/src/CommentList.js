import React from "react";

const CommentList = ({ comments }) => {
  // console.log(posts);
  const renderComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderComments}</ul>;
};

export default CommentList;
