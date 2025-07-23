import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import clsx from 'clsx';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
}

const ChatBot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    role: 'assistant',
    content: 'Hello! How can I help you today?',
    timestamp: new Date(),
  }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('https://n8n1.agentuary.com/webhook/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message || 'Sorry, I didn\'t understand that.',
        timestamp: new Date(),
      };
      setMessages([...updatedMessages, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages([
        ...updatedMessages,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, open]);

  // Optional: lock scroll on open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  const formatTime = (date?: Date) => {
    if (!date) return '';
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-20 md:right-20 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50 hover:bg-blue-700 transition-all hover:shadow-xl"
        aria-label="ChatBot Toggle"
      >
        {open ? <X className="w-5 h-5" /> : <><MessageSquare className="w-5 h-5" /><span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">{messages.length}</span></>}
      </button>

      <div className={clsx(
        'fixed bottom-24 right-4 md:bottom-20 md:right-20 w-[90vw] md:w-96 max-h-[75vh] bg-white rounded-xl shadow-xl z-50 flex flex-col overflow-hidden transition-all duration-300 border border-gray-200',
        open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
      )}>
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">FlowGenic AI</h3>
              <p className="text-xs opacity-80">{isTyping ? 'Typing...' : 'Online'}</p>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="text-white hover:text-gray-200 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div ref={chatRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={clsx('flex flex-col', msg.role === 'user' ? 'items-end' : 'items-start')}>
              <div className={clsx('p-3 rounded-2xl max-w-[85%] relative break-words', msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-200')}>
                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                <span className={clsx(
                  'text-xs mt-1 block text-right',
                  msg.role === 'user' ? 'text-blue-100' : 'text-gray-400'
                )}>
                  {formatTime(msg.timestamp)}
                </span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-start">
              <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-200 max-w-[85%]">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 p-3 bg-white">
          <div className="relative">
            <div className="flex items-center bg-gray-100 rounded-full pl-4 pr-10 min-h-[40px] overflow-hidden">
              <textarea
                className="flex-1 py-2 bg-transparent text-sm focus:outline-none resize-none max-h-[80px] overflow-y-auto scrollbar-hide"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  e.target.style.height = 'auto';
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                rows={1}
              />
            </div>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className={clsx(
                  'p-1 rounded-full',
                  input.trim() ? 'text-blue-600 hover:text-blue-700' : 'text-gray-400'
                )}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            FlowGenic AI may produce inaccurate information
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
