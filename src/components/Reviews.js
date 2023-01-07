import React from "react";
import { useGetReviewsQuery } from "../services/productApi";
import Comment from "./Comment";

function Reviews() {
  const { data } = useGetReviewsQuery();

  return (
    <div className="p-5">
      {data?.comments?.map((comment) => (
        <Comment username={comment.user.username} body={comment.body} />
      ))}
    </div>
  );
}

export default Reviews;
