import React, { useState, useEffect, useRef } from 'react';
import { SWAP_ALTERNATIVES } from '../data/craving_database';
import { findScenario } from '../data/ai_scenarios';
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
  recommendedSwaps?: SwapAlternative[];
  timestamp: Date;
}


export const AIChat: React.FC<AIChatProps> = ({ userProfile, onSaveSwap, savedSwapIds, onSelectSwap }) => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([{
    sender: 'ai',
    text: `Hey ${userProfile.name}! 🌸 I'm your CraveCoach. Tell me exactly what you're craving right now — Maggi at midnight, chai addiction, stress eating, PMS sweets — anything. I'll decode what your body's actually asking for and give you a real swap that works.`,
    timestamp: new Date()
  }]);
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const findRelevantSwaps = (query: string): SwapAlternative[] => {
    const q = query.toLowerCase();
    const keywords: Record<string, string[]> = {
      chips_namkeen: ['chips','namkeen','crunchy','salty','kurkure','lays','mixture'],
      chocolate: ['chocolate','sweet','cocoa','choco','sugar'],
      instant_noodles: ['maggi','noodles','ramen','instant','pasta'],
      ice_cream: ['ice cream','icecream','kulfi','cold dessert'],
      late_night: ['late night','midnight','1 am','2 am','3 am','night'],
      soft_drinks: ['coke','pepsi','soda','fizzy','cold drink','juice','thanda'],
      pizza_burger: ['pizza','burger','fast food','mcdonald','dominos'],
      deep_fried: ['samosa','pakora','bhaji','fried','oily'],
      pms_cravings: ['pms','period','cramps','hormones','mood'],
      stress_food: ['stress','anxiety','exam','work','bored','mindless'],
      post_gym: ['gym','workout','protein','post workout','exercise'],
      sweet_tea_coffee: ['chai','tea','coffee','caffeine'],
      chaat_street: ['chaat','pani puri','bhelpuri','street food','tangy'],
      mithai_sweets: ['mithai','ladoo','barfi','gulab','jalebi','sweet'],
    };

    let categoryId = '';
    let maxMatches = 0;
    for (const [cat, words] of Object.entries(keywords)) {
      const matches = words.filter(w => q.includes(w)).length;
      if (matches > maxMatches) { maxMatches = matches; categoryId = cat; }
    }

    let swaps = categoryId
      ? SWAP_ALTERNATIVES.filter(s => s.categoryId === categoryId)
      : SWAP_ALTERNATIVES.filter(s => s.tags.feel.some(t => q.includes(t.toLowerCase())));

    if (userProfile.dietPref === 'veg') {
      swaps = swaps.filter(s => !['egg_noodles_hack','egg_white_bhurji','egg_bhurji'].includes(s.id));
    }
    if (userProfile.budgetLimit === 'under ₹20') {
      swaps = swaps.filter(s => s.budget === 'under ₹20');
    }
    return swaps.slice(0, 2);
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMsg: Message = { sender: 'user', text: query, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    const relevantSwaps = findRelevantSwaps(query);

    // Simulate natural AI typing response
    setTimeout(() => {
      let aiText: string;
      let recommendedSwaps: SwapAlternative[];

      // 1. Try scenario matching
      const matchedScenario = findScenario(query);
      if (matchedScenario) {
        aiText = matchedScenario.aiResponse;
        recommendedSwaps = SWAP_ALTERNATIVES.filter(s => matchedScenario.recommendedSwapIds.includes(s.id));
      } else {
        // 2. Dynamic client-side rule matching
        const q = query.toLowerCase();
        
        if (q.includes('sweet') || q.includes('sugar') || q.includes('chocolate') || q.includes('dessert') || q.includes('jalebi') || q.includes('mithai') || q.includes('sweet tooth') || q.includes('candy') || q.includes('cake') || q.includes('pastry')) {
          aiText = `That sweet craving is so common, ${userProfile.name}! 🌸 When you crave sweet treats, your body is often seeking a quick energy lift or a boost in magnesium and serotonin. Let's satisfy that velvety sweetness with natural options that feed your body and avoid that sudden sugar crash.`;
          recommendedSwaps = SWAP_ALTERNATIVES.filter(s => ['date_ladoo', 'dark_choc_small', 'banana_cocoa', 'coconut_jaggery_ball'].includes(s.id));
        } else if (q.includes('chips') || q.includes('namkeen') || q.includes('crunchy') || q.includes('salty') || q.includes('kurkure') || q.includes('lays') || q.includes('popcorn') || q.includes('mixture')) {
          aiText = `Ah, seeking that satisfying salty crunch! 🥜 Chewing on crispy snacks is often a sensory distraction for stress, or your body might simply want some hydration and sodium. Let's swap the heavy commercial chips for light, roasted local delights that give your teeth that exact same crackle!`;
          recommendedSwaps = SWAP_ALTERNATIVES.filter(s => ['makhana_spiced', 'roasted_chana', 'murmura_bhel'].includes(s.id));
        } else if (q.includes('maggi') || q.includes('noodle') || q.includes('ramen') || q.includes('pasta') || q.includes('instant')) {
          aiText = `The late-night or quick noodle craving is pure warmth! 🍜 Warm, savory carbs are your body's way of winding down and feeling secure. Let's feed you a steaming hot, savory bowl that gives you that identical slurpy comfort but is much easier on your stomach for a good night's rest.`;
          recommendedSwaps = SWAP_ALTERNATIVES.filter(s => ['oats_masala', 'vermicelli_veggies', 'egg_noodles_hack'].includes(s.id));
        } else if (q.includes('chai') || q.includes('tea') || q.includes('coffee') || q.includes('caffeine') || q.includes('biscuit') || q.includes('rusk')) {
          aiText = `Milky tea or sweet coffee is a sacred daily ritual, ${userProfile.name}! ☕ If you are looking for that cozy warmth combined with a quick pick-me-up, we can upgrade it with natural sweeteners and fiber-rich bakes that give you steady, lasting energy.`;
          recommendedSwaps = SWAP_ALTERNATIVES.filter(s => ['jaggery_ginger_chai', 'ragi_cookies', 'rice_cake_honey'].includes(s.id));
        } else if (q.includes('soda') || q.includes('coke') || q.includes('pepsi') || q.includes('fizzy') || q.includes('cold drink') || q.includes('juice')) {
          aiText = `Craving that ice-cold, fizzy tickle in your throat? 🥤 Typically, your body is seeking quick hydration combined with carbonation dopamine. Let's treat you to sparkling local coolers that hydrate you properly and feel incredibly refreshing!`;
          recommendedSwaps = SWAP_ALTERNATIVES.filter(s => ['nimbu_pani_fizzy', 'chaas_buttermilk', 'kokum_sharbat'].includes(s.id));
        } else if (q.includes('samosa') || q.includes('pakora') || q.includes('fried') || q.includes('oily') || q.includes('greasy')) {
          aiText = `A piping hot, fried savory snack is so comforting, especially on a rainy day! 🥟 We can match that deep-fried crispy mouthfeel with baked or tossed desi treats that hit the same savory spots without leaving you feeling sluggish.`;
          recommendedSwaps = SWAP_ALTERNATIVES.filter(s => ['baked_pakora', 'corn_bhel_chaat', 'homemade_pani_puri'].includes(s.id));
        } else if (q.includes('pizza') || q.includes('burger') || q.includes('cheese') || q.includes('creamy') || q.includes('butter')) {
          aiText = `Rich, cheesy goodness is the ultimate comfort! 🧀 When stress levels rise, our brain naturally seeks smooth, creamy fats to soothe the nervous system. Let's enjoy some rich, home-style paneer or fresh desi dips that melt in your mouth and feel super indulgent.`;
          recommendedSwaps = SWAP_ALTERNATIVES.filter(s => ['roti_pizza', 'paneer_tikka_quick', 'hummus_veggie'].includes(s.id));
        } else if (q.includes('gym') || q.includes('workout') || q.includes('protein') || q.includes('muscle')) {
          aiText = `Let's fuel that post-workout recovery! 💪 Your muscles are asking for nourishing proteins to rebuild. Let's skip the heavy fast food and fuel you with easily digestible, high-protein local drinks or scrambles.`;
          recommendedSwaps = SWAP_ALTERNATIVES.filter(s => ['sattu_drink', 'egg_white_bhurji', 'paneer_tikka_quick'].includes(s.id));
        } else {
          // 3. Fallback matching search query or general comfort
          if (relevantSwaps.length > 0) {
            aiText = `That craving makes total sense, ${userProfile.name}! 🌸 Our cravings are just our body's way of signaling sensory, emotional, or comfort needs. Let's satisfy it with a nourishing local alternative that treats your body with kindness.`;
            recommendedSwaps = relevantSwaps;
          } else {
            aiText = `I hear you, ${userProfile.name}! 🌸 Cravings are a normal, shame-free signal from your body. Tell me a bit more about the texture or feeling you're looking for—is it crunchy and salty, warm and savory, or sweet and creamy? I'll find a cozy swap that hits the spot.`;
            recommendedSwaps = SWAP_ALTERNATIVES.slice(0, 2);
          }
        }
      }

      // Filter by diet and budget settings
      if (userProfile.dietPref === 'veg') {
        recommendedSwaps = recommendedSwaps.filter(s => !['egg_noodles_hack', 'egg_white_bhurji'].includes(s.id));
      }
      if (userProfile.budgetLimit === 'under ₹20') {
        recommendedSwaps = recommendedSwaps.filter(s => s.budget === 'under ₹20');
      } else if (userProfile.budgetLimit === 'under ₹50') {
        recommendedSwaps = recommendedSwaps.filter(s => s.budget === 'under ₹20' || s.budget === 'under ₹50');
      }

      // Ensure we have at least something to suggest if filters cleared everything
      if (recommendedSwaps.length === 0) {
        recommendedSwaps = SWAP_ALTERNATIVES.filter(s => {
          if (userProfile.dietPref === 'veg' && ['egg_noodles_hack', 'egg_white_bhurji'].includes(s.id)) return false;
          if (userProfile.budgetLimit === 'under ₹20' && s.budget !== 'under ₹20') return false;
          if (userProfile.budgetLimit === 'under ₹50' && s.budget === 'premium') return false;
          return true;
        }).slice(0, 2);
      }

      const aiMsg: Message = {
        sender: 'ai',
        text: aiText,
        recommendedSwaps: recommendedSwaps,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 800);
  };

  const prompts = [
    { label: '🌙 Maggi at 1 AM', text: 'I desperately want Maggi at 1 AM and I cant sleep without eating something' },
    { label: '🍫 PMS chocolate', text: 'Its that time of the month and I need chocolate so badly' },
    { label: '🌧️ Monsoon samosa', text: 'Its raining outside and I really want hot samosas right now' },
    { label: '😤 Stress eating', text: 'Exam tomorrow and I keep mindlessly eating chips without even being hungry' },
    { label: '🥤 Cola craving', text: 'I want a cold Coke so badly, been craving fizzy drinks all day' },
    { label: '💪 Post workout', text: 'Just finished gym, super hungry and want to eat everything' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 140px)', padding: '0' }}>
      {/* Coach Status Bar */}
      <div style={{
        padding: '10px 18px',
        background: 'var(--color-primary-light)',
        borderBottom: '1px solid var(--border-color)',
        display: 'flex', alignItems: 'center', gap: '8px'
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-rose))',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px'
        }}>🌿</div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)' }}>CraveCoach AI</div>
          <div style={{ fontSize: '11px', color: 'var(--color-mint)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-mint)' }} />
            Online • Powered by Claude AI
          </div>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {messages.map((msg, i) => (
          <div key={i} className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start', gap: '6px' }}>
            <div style={{
              maxWidth: '88%',
              padding: '12px 16px',
              borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
              background: msg.sender === 'user'
                ? 'linear-gradient(135deg, var(--color-primary), #9B7DE8)'
                : 'var(--bg-card)',
              color: msg.sender === 'user' ? '#fff' : 'var(--text-primary)',
              border: msg.sender === 'user' ? 'none' : '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)',
              fontSize: '13px',
              lineHeight: '1.55'
            }}>
              {msg.text}
            </div>

            {msg.recommendedSwaps && msg.recommendedSwaps.length > 0 && (
              <div style={{ width: '90%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '10px', color: 'var(--text-tertiary)', fontWeight: '600', textTransform: 'uppercase', marginTop: '2px' }}>Suggested Swaps</div>
                {msg.recommendedSwaps.map(swap => (
                  <div key={swap.id} style={{
                    background: 'var(--bg-card)', border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)', padding: '10px 12px',
                    display: 'flex', alignItems: 'center', gap: '10px',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <button onClick={() => onSelectSwap(swap)} style={{ background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0 }}>
                      <FoodSvg seed={swap.imageSvgSeed} size={40} />
                    </button>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-primary)' }}>{swap.name}</div>
                      <div style={{ fontSize: '10px', color: 'var(--color-primary)', fontWeight: '500' }}>{swap.budget} • {swap.prepTime}</div>
                    </div>
                    <button onClick={() => onSaveSwap(swap.id)} style={{
                      background: savedSwapIds.includes(swap.id) ? 'var(--color-primary-light)' : 'none',
                      border: 'none', cursor: 'pointer', padding: '6px', borderRadius: '50%',
                      color: savedSwapIds.includes(swap.id) ? 'var(--color-primary)' : 'var(--text-tertiary)'
                    }}>
                      <svg style={{ width: 18, height: 18, stroke: 'currentColor', strokeWidth: 2.5, fill: savedSwapIds.includes(swap.id) ? 'currentColor' : 'none' }} viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
            <span style={{ fontSize: '9px', color: 'var(--text-tertiary)', padding: '0 4px' }}>
              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        ))}

        {isTyping && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border-color)',
              borderRadius: '18px 18px 18px 4px', padding: '14px 18px',
              display: 'flex', gap: '5px', alignItems: 'center'
            }}>
              <div className="typing-dot" />
              <div className="typing-dot" />
              <div className="typing-dot" />
            </div>
          </div>
        )}
        <div ref={chatBottomRef} />
      </div>

      {/* Quick Prompts */}
      {messages.length <= 2 && (
        <div style={{ padding: '8px 18px 6px', display: 'flex', gap: '6px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {prompts.map((p, i) => (
            <button key={i} onClick={() => handleSend(p.text)} className="chip" style={{ fontSize: '11px', padding: '5px 12px' }}>
              {p.label}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div style={{ padding: '10px 18px 18px', display: 'flex', gap: '8px' }}>
        <input
          type="text"
          placeholder="Tell me your craving..."
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          style={{
            flex: 1, padding: '12px 16px', borderRadius: 'var(--radius-full)',
            fontSize: '13px'
          }}
        />
        <button
          onClick={() => handleSend()}
          className="btn btn-primary"
          style={{ width: 44, height: 44, padding: 0, borderRadius: '50%', flexShrink: 0 }}
          disabled={isTyping}
        >
          <svg style={{ width: 18, height: 18, fill: 'none', stroke: '#fff', strokeWidth: 2.5 }} viewBox="0 0 24 24">
            <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default AIChat;
