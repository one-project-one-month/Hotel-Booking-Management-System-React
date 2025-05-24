import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
    message: string;
    timestamp: string;
    isUser: boolean;
}
export default function ChatMessage( { message, timestamp, isUser }: ChatMessageProps) {
    return (
        <div className={`flex gap-3 mb-6 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isUser
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white'
                    : 'bg-gradient-to-br from-amber-400 to-amber-500 text-white'
                }`}>
                {isUser ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className={`max-w-[80%] ${isUser ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block px-4 py-3 rounded-2xl shadow-sm ${isUser
                        ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-md'
                        : 'bg-white border border-gray-100 text-gray-800 rounded-bl-md'
                    }`}>
                    <p className="text-sm leading-relaxed">{message}</p>
                </div>
                <p className="text-xs text-gray-400 mt-1 px-1">{timestamp}</p>
            </div>
        </div>
    )
}
