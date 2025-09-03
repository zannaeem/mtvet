import { useState } from "react";

const AIChatbot = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleChatbot = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40">
      {/* Chatbot Interface - Only show when expanded */}
      {isExpanded && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-tvet-blue">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/SwcVPMjJ64i01GXNW0sqX"
            width="320"
            height="500"
            frameBorder="0"
            title="Majlis TVET Sabah AI Chatbot"
            className="rounded-2xl w-[320px] h-[500px] md:w-[400px] md:h-[600px]"
          />
        </div>
      )}
      
      {/* Chat Bubble Button - Always visible */}
      <div className="flex items-center space-x-2 md:space-x-3">
        {/* Text Label - Hidden on very small screens */}
        <div className="hidden sm:block bg-white px-3 md:px-4 py-2 rounded-full shadow-lg border border-gray-200">
          <span className="text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">
            Jom tanya TVET AI!
          </span>
        </div>
        
        {/* Chat Button */}
        <button
          onClick={toggleChatbot}
          className={`w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
            isExpanded 
              ? 'bg-red-600 hover:bg-red-700' 
              : 'bg-red-500 hover:bg-red-600'
          }`}
          aria-label="Toggle AI Chatbot"
        >
          {isExpanded ? (
            // Close icon when expanded
            <svg className="w-6 h-6 md:w-8 md:h-8 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Cute robot icon when collapsed
            <svg className="w-6 h-6 md:w-8 md:h-8 mx-auto text-white" fill="currentColor" viewBox="0 0 24 24">
              {/* Robot Head */}
              <circle cx="12" cy="12" r="10" fill="currentColor"/>
              
              {/* Eyes */}
              <circle cx="9" cy="10" r="1.8" fill="white"/>
              <circle cx="15" cy="10" r="1.8" fill="white"/>
              <circle cx="9" cy="10" r="0.8" fill="currentColor"/>
              <circle cx="15" cy="10" r="0.8" fill="currentColor"/>
              <circle cx="8.5" cy="9" r="0.3" fill="white"/>
              <circle cx="14.5" cy="9" r="0.3" fill="white"/>
              
              {/* Smiling Mouth */}
              <path d="M8 16c0 0 2 2.5 4 2.5s4-2.5 4-2.5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M9 15.5c0 0 1.5 1.5 3 1.5s3-1.5 3-1.5" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round"/>
              
              {/* Headset */}
              <path d="M6 8c0 0 1-2 6-2s6 2 6 2" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <circle cx="6" cy="8" r="1.5" fill="white"/>
              <circle cx="18" cy="8" r="1.5" fill="white"/>
              
              {/* Microphone Boom */}
              <path d="M6 8c-1 0-1.5 1-1.5 2s0.5 2 1.5 2" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <circle cx="4.5" cy="10" r="0.8" fill="white"/>
              
              {/* Antenna */}
              <path d="M12 2c0 0 0.5-1 0.5-1.5s0.5-0.5 0.5-0.5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <circle cx="12" cy="0" r="0.8" fill="white"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default AIChatbot;
