import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Avatar, IconButton } from "@mui/material";

import {
  Chat,
  DonutLarge,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import SidebarChat from "./SidebarChat";
import db from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const roomsRef = collection(db, "rooms");
    onSnapshot( roomsRef, (snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {r}
      </div>
    </div>
  );
}

export default Sidebar;
