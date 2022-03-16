import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import db from "./firebase";
import "./SidebarChat.css";

function SidebarChat({ addNewChat, id, name }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter a name for the chat room");

    if (roomName) {
        const roomsRef = collection(db, "rooms");
        onSnapshot(roomsRef, (snapshot) =>
          setRooms(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>Last message ...</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
