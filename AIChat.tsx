import React, { useState, useEffect, useRef } from 'react';
import { findScenario } from '../data/ai_scenarios';
import { SWAP_ALTERNATIVES } from '../data/craving_database';
import type { SwapAlternative } from '../data/types';
import FoodSvg from './FoodSvg';

interface AIChatProps {
  userProfile: {
    name: string;
    goal: string;
    budgetLimit: 'under ₹20' | 'under ₹50' | 'premium';
    lifestyle: 'hostel' | 'home' | 'gym';
    dietPref: 'veg' | 'non-veg';
  };
  onSaveSwap: (swapId: string) => void;
  savedSwapIds: string[];
  onSelectSwap: (swap: SwapAlternative) => void;
}

interface Message {
  sender: 'user' | 'ai';
  text: string;
  scenarioId?: string;
  recommendedSwaps?: SwapAlternative[];
  timestamp: Date;
}

export const AIChat: React.FC<AIChatProps> = ({ userProfile, onSaveSwap, savedSwapIds, onSelectSwap }) => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      sender: 'ai',
      text: `Hi ${userProfile.name}! 🌸 I’m your Craving Coach. Whenever a strong craving hits, tell me what you want (e.g. "I want Maggi at 1 AM" or "PMS sweet craving").\n\nI’ll decode what your body is actually seeking and offer warm comfort.`,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    // Add user message
    const userMsg: Message = {
      sender: 'user',
      text: query,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    // Simulate AI typing delay
    setIsTyping(true);
    setTimeout(() => {
      const scenario = findScenario(query);

      let responseText: string;
      let recommendedSwaps: SwapAlternative[];

      if (scenario) {
        responseText = scenario.aiResponse;
        // Fetch actual swap objects
        recommendedSwaps = SWAP_ALTERNATIVES.filter(s =>
          scenario.recommendedSwapIds.includes(s.id)
        );
      } else {
        responseText = `That sounds very comforting, ${userProfile.name}! Cravings are just your body talking to you in code. It looks like you're seeking some warm, cozy satisfaction.\n\nTry telling me specific cravings like "Maggi at 1 AM", "stress eating", "fizzy soda", or "samosa"! Or try one of the suggestions below:`;
        // Fallback to random swaps matching user budget
        recommendedSwaps = SWAP_ALTERNATIVES.filter(s =>
          userProfile.dietPref === 'veg' ? !s.tags.lifestyle.includes('eggs') : true
        ).slice(0, 2);
      }

      const aiMsg: Message = {
        sender: 'ai',
        text: responseText,
        recommendedSwaps,
        scenarioId: scenario?.id,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600); // Super fast, warm sub-second response
  };

  const sampleScenarios = [
    { label: 'Maggi at 1 AM 🍜', text: 'I want Maggi at 1 AM' },
    { label: 'PMS Sweet 🍫', text: 'PMS sweet craving hits, need chocolate' },
    { label: 'Monsoon Samosa 🌧️', text: 'raining outside, need hot samosas' },
    { label: 'Stress eating 🤯', text: 'stressed at work, need to munch' }
  ];

  return (
    <div className="main-content animate-fade-in" style={{ paddingBottom: '90px', display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '8px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-secondary)' }} />
        <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>Craving Coach Online • Cozy Tone Mode Active</span>
      </div>

      {/* Messages Scroll Area */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', paddingRight: '4px', minHeight: '260px' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
            <div
              className="glass-panel"
              style={{
                maxWidth: '85%',
                padding: '12px 16px',
                borderRadius: msg.sender === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                backgroundColor: msg.sender === 'user' ? 'var(--color-primary-light)' : 'var(--bg-card)',
                border: msg.sender === 'user' ? '1px solid rgba(223, 155, 122, 0.2)' : '1px solid var(--border-color)'
              }}
            >
              <p style={{ fontSize: '13px', color: 'var(--text-primary)', whiteSpace: 'pre-line', lineHeight: '1.4' }}>
                {msg.text}
              </p>
            </div>

            {/* Render Recommended Swaps if AI suggests them */}
            {msg.recommendedSwaps && msg.recommendedSwaps.length > 0 && (
              <div className="animate-scale-in" style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '85%', marginTop: '8px' }}>
                {msg.recommendedSwaps.map(swap => (
                  <div
                    key={swap.id}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--border-radius-md)',
                      padding: '10px',
                      boxShadow: 'var(--shadow-sm)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}
                  >
                    <button
                      onClick={() => onSelectSwap(swap)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0 }}
                    >
                      <FoodSvg seed={swap.imageSvgSeed} size={42} />
                    </button>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-primary)' }}>{swap.name}</div>
                      <div style={{ fontSize: '10px', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {swap.whyDescription}
                      </div>
                    </div>
                    {/* Save option inside chat */}
                    <button
                      onClick={() => onSaveSwap(swap.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: savedSwapIds.includes(swap.id) ? 'var(--color-primary)' : 'var(--text-tertiary)',
                        cursor: 'pointer',
                        padding: '6px'
                      }}
                    >
                      <svg style={{ width: '18px', height: '18px', stroke: 'currentColor', strokeWidth: 2.5, fill: savedSwapIds.includes(swap.id) ? 'currentColor' : 'none' }} viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}

            <span style={{ fontSize: '9px', color: 'var(--text-tertiary)', marginTop: '4px', padding: '0 4px' }}>
              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        ))}

        {isTyping && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div className="glass-panel" style={{ padding: '12px 20px', borderRadius: '18px 18px 18px 2px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>Coach is thinking warmly...</span>
            </div>
          </div>
        )}

        <div ref={chatBottomRef} />
      </div>

      {/* Suggested prompts list if chat has just begun */}
      {messages.length <= 2 && (
        <div style={{ marginTop: '8px' }}>
          <h4 style={{ fontSize: '11px', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: '6px', fontWeight: '600' }}>Suggested Prompts</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {sampleScenarios.map((sc, i) => (
              <button
                key={i}
                onClick={() => handleSend(sc.text)}
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--border-radius-full)',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  fontSize: '11px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
              >
                {sc.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input box */}
      <div style={{ display: 'flex', gap: '8px', marginTop: '12px', position: 'relative' }}>
        <input
          type="text"
          placeholder="What are you craving?"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          style={{
            flex: 1,
            padding: '12px 16px',
            borderRadius: 'var(--border-radius-full)',
            border: '1.5px solid var(--border-color)',
            backgroundColor: 'var(--bg-card)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            outline: 'none',
            boxShadow: 'var(--shadow-sm)'
          }}
        />
        <button
          onClick={() => handleSend()}
          className="btn btn-primary"
          style={{ width: '42px', height: '42px', padding: 0, borderRadius: '50%', flexShrink: 0 }}
        >
          <svg style={{ width: '18px', height: '18px', fill: 'none', stroke: '#FFFFFF', strokeWidth: 2.5 }} viewBox="0 0 24 24">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default AIChat;
