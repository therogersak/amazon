import React, { useState } from "react";
import {
  useAddCommentMutation,
  useGetCommentsQuery,
} from "../services/commentApi";
import Comment from "./Comment";
import { Avatar } from "@mui/material";

function Reviews() {
  // => React State
  const [comment, setComment] = useState("");

  // => Comment
  const newComment = {
    body: comment,
    postId: 3,
    userId: 5,
  };

  // => featching comments
  const { data } = useGetCommentsQuery();
  const res = useAddCommentMutation();

  return (
    <div className="p-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          res(newComment);
        }}
        className=" \p-5"
      >
        <div className="flex items-center gap-3">
          <Avatar />
          <h3 className="font-bold">username</h3>
        </div>
        <input
          type="text"
          name="comment"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="review on this product"
          className="mt-1 ml-12 outline-none border-b-2 border-black w-full max-w-[620px] pl-1"
        />
      </form>
      {data?.comments?.map((comment , i) => (
        <Comment key={i} username={comment.user.username} body={comment.body} />
      ))}
    </div>
  );
}

export default Reviews;
