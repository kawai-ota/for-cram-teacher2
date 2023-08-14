"use client";
import useConversation from "@/app/chatpage/hooks/useConversation";
import { FullMessageType } from "@/app/chatpage/types";
import React, { useEffect, useRef, useState } from "react";
import MessageData from "./MessageData";
import axios from "axios";

interface BodyProps {
  initialMessages: FullMessageType[];
}

const Body: React.FC<BodyProps> = ({ initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { conversationId } = useConversation();

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, []);
  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, i) => (
        <MessageData
          isLast={i === messages.length - 1}
          key={message.id}
          data={message}
        />
      ))}
      <div ref={bottomRef} className="pt-24" />
    </div>
  );
};

export default Body;
