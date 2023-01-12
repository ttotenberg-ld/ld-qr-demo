import "./App.css";
import React, { useState, useEffect } from "react";
import { useFlags } from "launchdarkly-react-client-sdk";
import { addResponseMessage } from 'react-chat-widget';
import Chatbot from "./components/chatbot";
import QRCode from "./components/qrCode";
import HeaderLDLogo from "./components/headerLogo";
import Heart from "./components/heart";
import CustomerLogo from "./components/customerLogo";
import Astronaut from "./components/astronaut";
import SelfHealingFeature from "./components/selfHealingFeature"
import SelfHealingChart from "./components/selfHealingChart";
import Clock from "./components/clock"

function App() {
  const [headerStyle, setHeaderStyle] = useState("gray-app-header");
  const { configBackgroundColor } = useFlags();

  useEffect(() => {
    setHeaderStyle("gray-app-header");
    const updateBackGroundColor = () => {
      // Sets the className to "purple-app-header", "blue-app-header", etc.
      const headerStyle = configBackgroundColor + "-app-header";
      setHeaderStyle(headerStyle);

      return configBackgroundColor;
    };
    updateBackGroundColor();
  }, [configBackgroundColor]);


  useEffect(() => {
    addResponseMessage('Hi there! Ask me a question!');
  }, []);

  return (
    <div className={headerStyle}>
      <div className="black-header">
        <HeaderLDLogo />
      </div>
      
      <div className={headerStyle}>
        <Clock />
        <Heart />
        <CustomerLogo />
        <SelfHealingChart />
        <SelfHealingFeature />
        <QRCode />
        <br />
        <Astronaut />
        <div className="chatbot">
          <Chatbot />
        </div>
      </div>
    </div>
  );
}

export default App;
