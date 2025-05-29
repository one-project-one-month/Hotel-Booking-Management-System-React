import { useState } from "react";
import DreamStayChatUI from "./chat-ui";
import ChatBotClose from "@/assets/bot-close.png"
import ChatBotOpen from "@/assets/bot-open.png"
import { Button } from "@/components/ui/button";

export default function ChatAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="fixed bottom-4 right-4 z-50">
                <Button
                    onClick={() => { setIsOpen(!isOpen); }}
                    className={`bg-blue-500 hover:bg-blue-600 cursor-pointer text-white w-12 h-12 md:w-20 md:h-20 p-3 rounded-full shadow-xl transition-transform duration-300 ${isOpen ? 'transform rotate-45' : ''}`}
                >
                    <img
                        src={isOpen ? ChatBotClose : ChatBotOpen}
                        alt="Chat Assistant"
                        className="w-full h-full object-fill"
                    />
                </Button>
            </div>
            {isOpen && (
                <div className="fixed bottom-16 right-4 bg-white shadow-lg rounded-lg p-4">
                   <DreamStayChatUI />
                </div>
            )}
        </div>
    )
}
