import { rooms } from "@/mock/rooms";
import { Bot, Calendar, Send, Sparkles, Star, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ChatMessage from "./chat-message";
import RoomCard from "./room-card";
import QuickSuggestion from "./quick-suggestion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function DreamStayChatUI() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Welcome to Dream Stay Hotel! 🏨 I'm your personal room assistant. I can help you find the perfect room for your stay. What kind of experience are you looking for?",
      isUser: false,
      timestamp: "Just now"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sampleRooms = rooms.slice(0, 3)

  const quickSuggestions = [
    { text: "Show luxury suites", icon: Sparkles },
    { text: "Family-friendly rooms", icon: Users },
    { text: "Weekend availability", icon: Calendar },
    { text: "Best rates this month", icon: Star }
  ];

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let response = "";
      if (inputValue.toLowerCase().includes('luxury') || inputValue.toLowerCase().includes('suite')) {
        response = "Here are our premium luxury suites available for your dates. Each features world-class amenities and stunning views:";
      } else if (inputValue.toLowerCase().includes('family')) {
        response = "Perfect! I found some wonderful family-friendly accommodations. These rooms offer extra space and amenities for families:";
      } else if (inputValue.toLowerCase().includes('weekend') || inputValue.toLowerCase().includes('availability')) {
        response = "Great news! We have excellent availability this weekend. Here are some fantastic options:";
      } else if (inputValue.toLowerCase().includes('rate') || inputValue.toLowerCase().includes('price')) {
        response = "I've found our best value rooms for this month. These offer excellent rates without compromising on comfort:";
      } else {
        response = "Based on your preferences, I've curated these excellent room options for you:";
      }

      const aiResponse = {
        id: messages.length + 2,
        text: response,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    inputRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 w-full md:w-[600px]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
            <Bot size={20} className="text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-gray-900">Dream Stay Assistant</h1>
            <p className="text-sm text-gray-500">Your personal room concierge</p>
          </div>
          <div className="ml-auto">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Online
            </div>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-2">
        <div className="max-w-4xl mx-auto h-52 overflow-auto px-2">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
          ))}
          
          {/* Sample Room Cards */}
          {messages.length > 2 && (
            <div className="mb-6">
              <div className="grid gap-3 md:grid-cols-2">
                {sampleRooms.map((room, index) => (
                  <RoomCard key={index} room={room} />
                ))}
              </div>
            </div>
          )}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Suggestions */}
      <div className="px-6 py-3 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-3">
            {quickSuggestions.map((suggestion, index) => (
              <QuickSuggestion
                key={index}
                text={suggestion.text}
                icon={suggestion.icon}
                onClick={handleSuggestionClick}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3 justify-center items-center">
            <div className="flex-1 relative">
              <Textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about rooms, amenities, or availability..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none min-h-[48px] max-h-32"
                rows={1}
                style={{ 
                  height: 'auto',
                  minHeight: '48px'
                }}
                onInput={(e) => {
                  const textarea = e.target as HTMLTextAreaElement;
                  textarea.style.height = 'auto';
                  textarea.style.height = Math.min(textarea.scrollHeight, 128) + 'px';
                }}
              />
            </div>
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 disabled:from-gray-300 disabled:to-gray-300 text-white p-3 rounded-xl transition-all duration-200 disabled:cursor-not-allowed flex items-center justify-center shadow-sm hover:shadow-md"
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}