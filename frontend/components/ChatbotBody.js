import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {Bot, MessageCircle, Activity, Clock, Heart } from 'lucide-react';
import styles from '../styles/Chatbot.module.css';
import { useRouter } from 'next/router';



const ChatbotBody = () => {
  const [isHovered, setIsHovered] = useState(false);
  const route=useRouter();

  const features = [
    { icon: <MessageCircle />, text: "24/7 Instant Responses" },
    { icon: <Activity />, text: "Symptom Analysis" },
    { icon: <Clock />, text: "Medication Reminders" },
    { icon: <Heart />, text: "Lifestyle Recommendations" },
  ];

  return (
    <div className={styles.chatbotContainer}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.chatbotContent}
      >
        <h1 className={styles.title}>MediBot AI</h1>
        <p className={styles.subtitle}>Your 24/7 Medical Assistant</p>
        
        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className={styles.featureCard}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.chatbotInteraction}>
          <motion.div 
            className={styles.chatbotAvatar}
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Bot
            alt="MediBot Avatar" // Adding alternative text for accessibility
            width={150} // Matching the width
            height={150} // Matching the height
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            color={isHovered ? '#0070f3' : 'currentColor'} // Optional hover effect
           style={{ cursor: 'pointer' }} // Optional cursor style
            />
          </motion.div>
          <motion.button onClick={()=>{route.push('/medical-chatbot')}}
            className={styles.chatButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Chat with MediBot
          </motion.button>
        </div>

        <div className={styles.infoSection}>
          <h2>How MediBot Works</h2>
          <ol className={styles.stepsList}>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Ask your health-related questions
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Receive AI-powered insights and recommendations
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              Get guidance on whether to consult a healthcare professional
            </motion.li>
          </ol>
        </div>

        <motion.div 
          className={styles.disclaimer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>MediBot is for informational purposes only. Always consult with a qualified healthcare provider for medical advice.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ChatbotBody;

