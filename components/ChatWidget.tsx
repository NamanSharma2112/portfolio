import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, PenTool } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendMessageToGemini } from '../services/gemini';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Greetings! I am the AI editor for this publication. Ask me anything about Naman's work." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const historyForService = messages.map(m => ({ role: m.role, text: m.text }));
    const responseText = await sendMessageToGemini(historyForService, userMsg.text);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-body">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[320px] sm:w-[380px] bg-[#F0ECE2] border-2 border-ink shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] flex flex-col"
            style={{ maxHeight: '500px', height: '450px' }}
          >
            {/* Header */}
            <div className="p-3 border-b-2 border-ink bg-[#F0ECE2] flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="p-1 bg-ink text-paper">
                   <PenTool size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink uppercase tracking-wider font-mono">Editor's Desk</h3>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-ink hover:text-paper transition-colors p-1"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white relative">
              {/* Background texture line for paper feel */}
              <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-red-200/50 pointer-events-none"></div>

              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} relative z-10`}>
                  <div 
                    className={`max-w-[85%] p-3 text-sm leading-relaxed border border-ink shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-ink text-paper' 
                        : 'bg-[#F9F7F2] text-ink'
                    }`}
                  >
                    <span className="block font-mono text-[10px] uppercase mb-1 opacity-50">
                      {msg.role === 'user' ? 'Reader' : 'Editor'}
                    </span>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start relative z-10">
                   <div className="bg-[#F9F7F2] border border-ink p-3 flex items-center gap-2">
                      <span className="font-mono text-xs">Typing...</span>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 bg-[#F0ECE2] border-t-2 border-ink">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your inquiry..."
                  className="w-full bg-white text-ink placeholder-neutral-400 text-sm py-2 px-3 focus:outline-none border border-neutral-300 focus:border-ink font-mono"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="p-2 bg-ink text-paper hover:bg-neutral-700 disabled:opacity-50 transition-colors border border-ink"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 border-2 border-ink shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] flex items-center justify-center transition-colors ${isOpen ? 'bg-ink text-paper' : 'bg-[#F0ECE2] text-ink'}`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default ChatWidget;