import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Wine } from 'lucide-react';
import { sendMessageToAssistant } from '../services/gemini';
import { ChatMessage } from '../types';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      text: 'Bienvenue chez Rach Food "Chez Ya Matondo" ! Je suis votre assistant. Envie d\'une bonne grillade ou d\'un conseil sur notre carte ?',
      timestamp: new Date(),
    }
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

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({ role: m.role, text: m.text }));
    const responseText = await sendMessageToAssistant(userMsg.text, history);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col border border-zinc-200 mb-4 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-zinc-900 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-gold-500 p-1.5 rounded-full">
                <MessageSquare size={16} className="text-zinc-900" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Rach Food Assistant</h3>
                <span className="text-green-400 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  En ligne
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-zinc-50 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-zinc-900 text-white rounded-br-none'
                      : 'bg-white border border-zinc-200 text-zinc-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start w-full">
                <div className="bg-white border border-zinc-200 p-3 rounded-2xl rounded-bl-none shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-zinc-100">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Une question sur le menu ?"
                className="flex-1 bg-zinc-100 border-0 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-gold-500 focus:outline-none transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-gold-500 text-zinc-900 p-3 rounded-xl hover:bg-gold-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'rotate-90 opacity-0 pointer-events-none' : 'rotate-0 opacity-100'
        } absolute bottom-0 right-0 bg-zinc-900 hover:bg-zinc-800 text-gold-500 p-4 rounded-full shadow-lg transition-all duration-300 z-50 group`}
      >
        <MessageSquare size={28} className="group-hover:scale-110 transition-transform" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-zinc-900 px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Commander / Infos
        </span>
      </button>
      
      {/* Close Button (Visible when open) */}
       <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          !isOpen ? 'rotate-90 opacity-0 pointer-events-none' : 'rotate-0 opacity-100'
        } absolute bottom-0 right-0 bg-gold-500 hover:bg-gold-400 text-zinc-900 p-4 rounded-full shadow-lg transition-all duration-300 z-50`}
      >
        <X size={28} />
      </button>

    </div>
  );
};