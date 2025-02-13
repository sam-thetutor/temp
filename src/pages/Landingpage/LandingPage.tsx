import React, { useState, useEffect } from 'react';
import { NotificationCarousel } from '../../components/notifications/Notification';
import { motion } from "framer-motion";

const LandingPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 48,
    seconds: 16
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Section */}
      <div className="bg-gradient-to-b from-white via-blue-50 to-[#e8f0f5] pb-2 pt-16">     
        {/* Logo */}
        <div className="text-center mb-4">
          <img 
            src="images/logoo.png" 
            alt="BOBITS Logo" 
            className="h-12 mx-auto"
          />
        </div>

        {/* Lorem Ipsum Text */}
        <div className="max-w-3xl mx-auto text-center text-black px-4 mb-2">
          Lacus amet, elementum ex. Ut venenatis eget urna, amet, odio dui elit ipsum Praesent adipiscing in 
          orci odio non, leo. Donec Ut volutpat diam Nam Vestibulum dolor cursus laoreet tincidunt vehicula, eu 
          sapien Morbi at Nunc Morbi eu Nam in
        </div>

        <NotificationCarousel/>
      </div>

      {/* Main Content with exact gradient match */}
      <div className="flex-1 relative">
        {/* Primary gradient layer */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#1c425f_0%,#1a2c3d_50%,#285449_100%)]"></div>
        
        {/* Content */}
        <div className="relative z-10 p-8 py-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Timer Section */}
            <div className="mb-2">
              <h2 className="text-gray-300 text-lg mb-2">Next Halving in</h2>
              <div className="flex justify-center items-baseline gap-2 text-white mb-2">
                <div className="text-5xl font-light">{timeLeft.days}</div>
                <div className="text-5xl font-light">:</div>
                <div className="text-5xl font-light">{timeLeft.hours}</div>
                <div className="text-5xl font-light">:</div>
                <div className="text-5xl font-light">{timeLeft.minutes}</div>
                <div className="text-5xl font-light">:</div>
                <div className="text-5xl font-light">{timeLeft.seconds}</div>
              </div>
              <div className="flex justify-center gap-[3.8rem] text-sm">
                <span className="text-yellow-400">Days</span>
                <span className="text-yellow-400">Hours</span>
                <span className="text-yellow-400">Minutes</span>
                <span className="text-yellow-400">Seconds</span>
              </div>
            </div>

            {/* Winning Price */}
            <div className="mb-4">
              <div className="text-gray-300 mb-2">Winning price</div>
              <div className="text-yellow-400 text-4xl font-bold">$250</div>
            </div>

    
            {/* BOBITS Button */}
            <div className="relative flex items-center justify-center">
      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-yellow-400 hover:bg-yellow-500 rounded-xl py-3 
          transition-colors flex items-center gap-2 relative overflow-visible"
        animate={{
          width: isHovered ? "auto" : "auto",
          paddingLeft: isHovered ? "0.5rem" : "0.5rem",
          paddingRight: isHovered ? "1.5rem" : "2rem",
        }}
        transition={{ 
          duration: 0.3,
          delay: isHovered ? 0.3 : 0
        }}
      >
        <motion.img
          src="images/cartonn.png"
          alt="mascot"
          className="w-10 h-10"
          initial={{ x: 0 }}
          animate={{ x: isHovered ? -60 : 0 }}
          transition={{ duration: 0.5 }}
        />

        <motion.span
          className="text-black font-bold text-xl whitespace-nowrap"
          animate={{ x: isHovered ? -20 : 0 }}
          transition={{ duration: 0.5 }}
        >
          BOBITS
        </motion.span>

        <motion.div
          className="absolute right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-black font-bold text-lg">
            {isHovered ? '→' : ''}
          </span>
        </motion.div>
      </motion.button>
    </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;