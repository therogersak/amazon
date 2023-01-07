import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";

function Comment({ username, body }) {
      const [avatar, setAvatar] = useState("");

      useEffect(() => {
        setAvatar(Math.floor(Math.random() * 1000));
      },[]);
  return (
    <div className="p-5 border-b-2">
      <div className="flex items-center gap-3 font-bold">
        <Avatar
          src={`https://avatars.dicebear.com/api/adventurer/${avatar}.svg`}
        />
        <h3>{username}</h3>
      </div>
      <div className="pl-14">
        <p>{body}</p>
      </div>
    </div>
  );
}

export default Comment;
