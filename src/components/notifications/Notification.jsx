import React, { useState, useEffect } from 'react';

const Notification = ({ text, amount }) => (
  <div className="inline-flex items-center bg-blue-100/80 rounded-lg px-4 py-2 mx-2">
    <img 
      src="/public/images/Frogcoin.png" 
      alt="miner icon" 
      className="w-6 h-6 mr-2"
    />
    <span className="text-gray-700 text-sm">
      {text} <span className="font-medium">{amount}</span>
    </span>
  </div>
);

export const NotificationCarousel = () => {
  const notifications = [
    { id: 1, text: "John Doe just mined", amount: "600BOB" },
    { id: 2, text: "John Doe just mined", amount: "600BOB" },
    { id: 3, text: "John Doe just mined", amount: "600BOB" },
    { id: 4, text: "John Doe just mined", amount: "600BOB" },
    { id: 5, text: "John Doe just mined", amount: "600BOB" },
  ];

  return (
    <div className="overflow-hidden relative w-full">
      <div className="flex whitespace-nowrap animate-marquee">
        {notifications.map((notif) => (
          <Notification 
            key={notif.id} 
            text={notif.text} 
            amount={notif.amount} 
          />
        ))}
        {/* Duplicate notifications for seamless loop */}
        {/* {notifications.map((notif) => (
          <Notification 
            key={`duplicate-${notif.id}`} 
            text={notif.text} 
            amount={notif.amount} 
          />
        ))} */}
      </div>
    </div>
  );
};


const style = document.createElement('style');
style.textContent = `
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .animate-marquee {
    animation: marquee 20s linear infinite;
  }
`;
document.head.appendChild(style);

export { Notification };