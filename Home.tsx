import React, { useState } from 'react';
import { CRAVING_CATEGORIES, SWAP_ALTERNATIVES } from '../data/craving_database';
import type { SwapAlternative } from '../data/types';
import FoodSvg from './FoodSvg';

interface HomeProps {
  userProfile: {
    name: string;
    goal: string;
    budgetLimit: 'under ₹20' | 'under ₹50' | 'premium';
    lifestyle: 'hostel' | 'home' | 'gym';
    dietPref: 'veg' | 'non-veg';
  };
  onSelectCategory: (categoryId: string) => void;
  onSelectSwap: (swap: SwapAlternative) => void;
}

export const Home: React.FC<HomeProps> = ({ userProfile, onSelectCategory, onSelectSwap }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Get time of day greeting
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return 'Good morning';
    if (hours < 17) return 'Good afternoon';
    if (hours < 22) return 'Good evening';
    return 'Hey night owl';
  };

  // Get personalized context-aware picks
  const getPersonalizedPicks = (): SwapAlternative[] => {
    const hours = new Date().getHours();
    let occasionTag = 'study snack';
    if (hours >= 22 || hours < 4) occasionTag = 'late night';
    else if (hours >= 16 && hours < 20) occasionTag = 'monsoon'; // Tea-time / monsoon vibes
    else if (userProfile.lifestyle === 'gym') occasionTag = 'post-gym';

    return SWAP_ALTERNATIVES.filter(swap => {
      // Filter by diet
      if (userProfile.dietPref === 'veg' && swap.tags.lifestyle.includes('eggs')) {
        return false;
      }
      // Match budget
      if (userProfile.budgetLimit === 'under ₹20' && swap.budget !== 'under ₹20') {
        return false;
      }
      if (userProfile.budgetLimit === 'under ₹50' && swap.budget === 'premium') {
        return false;
      }
      // Match occasion or lifestyle
      return swap.tags.occasion.includes(occasionTag) || swap.tags.lifestyle.includes(userProfile.lifestyle);
    }).slice(0, 3);
  };

  const filteredCategories = CRAVING_CATEGORIES.filter(cat =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const matchedSwaps = searchQuery.trim().length > 1
    ? SWAP_ALTERNATIVES.filter(swap =>
        swap.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        swap.tags.feel.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 4)
    : [];

  const quickMoods = [
    { label: 'Late Night 🌌', query: 'late night' },
    { label: 'Stress Eating 🤯', query: 'stress' },
    { label: 'PMS Sweet 🍫', query: 'pms' },
    { label: 'Fizzy Soda 🥤', query: 'fizzy' },
    { label: 'Monsoon Chai 🌧️', query: 'monsoon' }
  ];

  return (
    <div className="main-content animate-fade-in">
      {/* Welcome Card */}
      <div
        className="glass-panel"
        style={{
          padding: '20px',
          borderRadius: 'var(--border-radius-lg)',
          background: 'linear-gradient(135deg, var(--color-primary-light), var(--bg-secondary))',
          boxShadow: 'var(--shadow-sm)',
          border: '1px solid rgba(223, 155, 122, 0.15)'
        }}
      >
        <h4 style={{ fontSize: '12px', fontWeight: '600', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
          {getGreeting()}, {userProfile.name}!
        </h4>
        <h2 className="serif" style={{ fontSize: '24px', lineHeight: '1.2', color: 'var(--text-primary)' }}>
          What is your craving telling you right now?
        </h2>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '6px' }}>
          Time is {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • Living in {userProfile.lifestyle === 'hostel' ? 'a Hostel 🎓' : userProfile.lifestyle === 'gym' ? 'Gym Mode 💪' : 'Home 🏠'}
        </p>
      </div>

      {/* Search Bar */}
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="Type what you want (e.g. chips, sweet, Maggi)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '16px 20px',
            paddingLeft: '48px',
            borderRadius: 'var(--border-radius-md)',
            border: '1.5px solid var(--border-color)',
            backgroundColor: 'var(--bg-card)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-sans)',
            fontSize: '14px',
            outline: 'none',
            boxShadow: 'var(--shadow-sm)',
            transition: 'border-color 0.2s'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
        />
        <svg
          style={{ position: 'absolute', left: '16px', top: '16px', width: '20px', height: '20px', stroke: 'var(--text-tertiary)', fill: 'none', strokeWidth: 2 }}
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>

      {/* matched search results */}
      {searchQuery.trim().length > 1 && (
        <div className="animate-scale-in" style={{ background: 'var(--bg-card)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--border-color)', padding: '10px', boxShadow: 'var(--shadow-md)' }}>
          <h4 style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-tertiary)', margin: '4px 8px 8px 8px' }}>Matched Swaps</h4>
          {matchedSwaps.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {matchedSwaps.map(swap => (
                <button
                  key={swap.id}
                  onClick={() => onSelectSwap(swap)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px 12px',
                    borderRadius: 'var(--border-radius-sm)',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    width: '100%',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <FoodSvg seed={swap.imageSvgSeed} size={36} />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>{swap.name}</div>
                    <div style={{ fontSize: '11px', color: 'var(--color-secondary)' }}>{swap.budget} • {swap.prepTime}</div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', padding: '8px', textAlign: 'center' }}>No matching swaps found. Try something else or open the AI Chat!</div>
          )}
        </div>
      )}

      {/* Quick Moods */}
      <div>
        <h3 style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '10px', fontWeight: '600' }}>Quick Mood Entry</h3>
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '6px', scrollbarWidth: 'none' }}>
          {quickMoods.map((m, i) => (
            <button
              key={i}
              onClick={() => setSearchQuery(m.query)}
              style={{
                flexShrink: 0,
                padding: '8px 14px',
                borderRadius: 'var(--border-radius-full)',
                border: '1px solid var(--border-color)',
                backgroundColor: searchQuery === m.query ? 'var(--color-primary-light)' : 'var(--bg-card)',
                color: searchQuery === m.query ? 'var(--color-primary)' : 'var(--text-primary)',
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Personalized Picks */}
      <div style={{ marginTop: '4px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h3 style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: '600' }}>Personalized Swaps for You</h3>
          <span style={{ fontSize: '11px', color: 'var(--color-secondary)', fontWeight: '500' }}>Time-aware 🕒</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          {getPersonalizedPicks().map(swap => (
            <button
              key={swap.id}
              onClick={() => onSelectSwap(swap)}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--border-radius-md)',
                padding: '12px 8px',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'transform 0.2s, box-shadow 0.2s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: 'var(--shadow-sm)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <FoodSvg seed={swap.imageSvgSeed} size={50} />
              <h4 style={{ fontSize: '11px', color: 'var(--text-primary)', fontWeight: '600', marginTop: '8px', lineHeight: '1.3', height: '28px', overflow: 'hidden' }}>
                {swap.name}
              </h4>
              <span className="tag tag-why" style={{ fontSize: '9px', padding: '2px 6px', marginTop: '6px' }}>
                {swap.prepTime}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Browse Craving Categories */}
      <div style={{ marginTop: '4px' }}>
        <h3 style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px', fontWeight: '600' }}>Browse Categories</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {filteredCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 18px',
                borderRadius: 'var(--border-radius-md)',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                cursor: 'pointer',
                textAlign: 'left',
                width: '100%',
                transition: 'all 0.2s',
                boxShadow: 'var(--shadow-sm)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary)';
                e.currentTarget.style.backgroundColor = 'var(--color-primary-light)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.backgroundColor = 'var(--bg-card)';
              }}
            >
              <div style={{ paddingRight: '12px' }}>
                <h4 style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: '600' }}>{cat.name}</h4>
                <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px' }}>{cat.description}</p>
              </div>
              <svg style={{ width: '18px', height: '18px', stroke: 'var(--text-tertiary)', fill: 'none', strokeWidth: 2 }} viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
