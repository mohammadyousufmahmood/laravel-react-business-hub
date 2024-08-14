import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import MessageInput from './MessageInput';
import '../../public/assets/css/FloatingChat.css';

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}
