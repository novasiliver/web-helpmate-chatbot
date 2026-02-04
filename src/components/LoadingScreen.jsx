import { useEffect, useState } from "react";
import PropTypes from "prop-types"; 

export const LoadingScreen = ({ onComplete }) => {
  const text1 = "Hey, I'm Helpmate, your AI assistant.";
  const text2 = "How can I help you today?";

  useEffect(() => {

    const maxDuration = Math.max(
      text1.length * 40,
      text2.length * 90
    );

    const timeout = setTimeout(() => {
      onComplete();
    }, maxDuration + 1000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col justify-center items-center">
      <div className="mb-2 md:text-4xl text-2xl font-mono font-bold text-center">
        {line1}
      </div>
      <div className="mb-4 md:text-4xl text-2xl font-mono font-bold text-center">
        {line2} 
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"> </div>
      </div>
    </div>
  );
};


LoadingScreen.propTypes = {
  onComplete: PropTypes.func.isRequired,
};
