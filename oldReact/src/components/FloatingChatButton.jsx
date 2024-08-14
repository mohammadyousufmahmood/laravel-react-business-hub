import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import '../../public/assets/css/FloatingChat.css';

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatWindow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="floating-chat-button" onClick={toggleChatWindow}>
        💬
      </div>
      {isOpen && <ChatWindow />}
    </>
  );
}
