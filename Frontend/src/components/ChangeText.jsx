import React, { useState, useEffect } from "react";

const ChangeText = () => {
  const texts = ["Hi, I'm Naim, I am a full stack web developer"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(1);

  useEffect(() => {
    // Function to simulate typing effect
    const typeText = () => {
      if (endValue <= texts[0].length) {
        setCurrentText(texts[0].substring(0, endValue));
        setEndValue((prev) => prev + 1);
      }
    };

    const timeoutId = setTimeout(typeText, 100); // Simulate typing speed

    // Clear timeout if the animation is complete
    if (endValue > texts[0].length) {
      clearTimeout(timeoutId);
    }

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, [endValue, texts]);

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default ChangeText;
