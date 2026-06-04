import React, { useState } from 'react';
import { SWAP_ALTERNATIVES, CRAVING_CATEGORIES } from '../data/craving_database';
import type { SwapAlternative } from '../data/types';
import FoodSvg from './FoodSvg';

interface SwapFeedProps {
  initialCategoryId?: string;
  onSaveSwap: (swapId: string) => void;
  savedSwapIds: string[];
}

export const SwapFeed: React.FC<SwapFeedProps> = ({ initialCategoryId, onSaveSwap, savedSwapIds }) => {
  const [swaps] = useState<SwapAlternative[]>(() => {
    if (initialCategoryId) {
      return SWAP_ALTERNATIVES.filter(s => s.categoryId === initialCategoryId);
    }
    return SWAP_ALTERNATIVES;
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [showRecipe, setShowRecipe] = useState(false);
  const [showWhy, setShowWhy] = useState(false);

  const activeSwap = swaps[currentIndex];

  const handleSwipe = (direction: 'left' | 'right') => {
    setSwipeDirection(direction);
    setTimeout(() => {
      if (direction === 'right' && activeSwap) {
        onSaveSwap(activeSwap.id);
      }
      setCurrentIndex(prev => prev + 1);
      setSwipeDirection(null);
      setShowRecipe(false);
      setShowWhy(false);
    }, 300); // match animation speed
  };

  const getOriginalJunkLabel = () => {
    if (!activeSwap) return 'Junk Food';
    const category = CRAVING_CATEGORIES.find(c => c.id === activeSwap.categoryId);
    return category ? category.name.split(' & ')[0] : 'Junk Food';
  };

  if (!activeSwap || currentIndex >= swaps.length) {
    return (
      <div className="main-content animate-fade-in" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div className="glass-panel" style={{ padding: '32px 24px', borderRadius: 'var(--border-radius-lg)', maxWidth: '320px' }}>
          <span style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>🥗</span>
          <h2 className="serif" style={{ fontSize: '22px', marginBottom: '8px' }}>You’ve explored all swaps!</h2>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Check back later for more nourishing alternatives or head to the AI chat to decode another craving.
          </p>
          <button className="btn btn-primary" onClick={() => setCurrentIndex(0)} style={{ width: '100%' }}>
            Explore Feed Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content animate-fade-in" style={{ paddingBottom: '90px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '15px', color: 'var(--text-secondary)', fontWeight: '600' }}>Swap Feed</h3>
        <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>{currentIndex + 1} of {swaps.length} available</span>
      </div>

      {/* Main card deck frame */}
      <div
        className={`glass-panel ${swipeDirection === 'left' ? 'animate-swipe-left' : swipeDirection === 'right' ? 'animate-swipe-right' : ''}`}
        style={{
          borderRadius: 'var(--border-radius-lg)',
          boxShadow: 'var(--shadow-md)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          transition: 'transform 0.3s, opacity 0.3s',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-color)'
        }}
      >
        {/* Swipe animation classes injected dynamically inline as styles */}
        {swipeDirection === 'left' && (
          <style>{`.animate-swipe-left { animation: swipeLeft 0.3s forwards; }`}</style>
        )}
        {swipeDirection === 'right' && (
          <style>{`.animate-swipe-right { animation: swipeRight 0.3s forwards; }`}</style>
        )}

        {/* Want this -> Try this comparison header */}
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', gap: '10px', background: 'var(--bg-primary)', padding: '10px 14px', borderRadius: 'var(--border-radius-md)', marginBottom: '16px' }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <span style={{ fontSize: '10px', color: 'var(--text-tertiary)', textTransform: 'uppercase', display: 'block', fontWeight: '500' }}>Want This</span>
            <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)', textDecoration: 'line-through' }}>{getOriginalJunkLabel()}</span>
          </div>
          <span style={{ fontSize: '14px', color: 'var(--color-primary)', fontWeight: 'bold' }}>→</span>
          <div style={{ flex: 1.2, textAlign: 'center' }}>
            <span style={{ fontSize: '10px', color: 'var(--color-secondary)', textTransform: 'uppercase', display: 'block', fontWeight: '600' }}>Try This instead</span>
            <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)' }}>{activeSwap.name}</span>
          </div>
        </div>

        {/* Beautiful Custom Svg drawing */}
        <div style={{ margin: '10px 0' }}>
          <FoodSvg seed={activeSwap.imageSvgSeed} size={110} />
        </div>

        {/* 4 layers of tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center', margin: '14px 0' }}>
          {activeSwap.tags.feel.slice(0, 2).map((t, idx) => (
            <span key={`f-${idx}`} className="tag tag-feel">{t}</span>
          ))}
          {activeSwap.tags.whyItWorks.slice(0, 2).map((t, idx) => (
            <span key={`w-${idx}`} className="tag tag-why">{t}</span>
          ))}
          {activeSwap.tags.lifestyle.slice(0, 1).map((t, idx) => (
            <span key={`l-${idx}`} className="tag tag-lifestyle">{t}</span>
          ))}
          {activeSwap.tags.occasion.slice(0, 1).map((t, idx) => (
            <span key={`o-${idx}`} className="tag tag-occasion">{t}</span>
          ))}
        </div>

        {/* Dynamic description togglers */}
        <div style={{ width: '100%', borderTop: '1px solid var(--border-color)', paddingTop: '16px', marginTop: '4px' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', textAlign: 'center', lineHeight: '1.4', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
            "{activeSwap.whyDescription}"
          </p>

          <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
            <button
              onClick={() => { setShowWhy(!showWhy); setShowRecipe(false); }}
              className="btn btn-outline"
              style={{ flex: 1, padding: '8px 12px', fontSize: '11px', borderRadius: 'var(--border-radius-md)' }}
            >
              {showWhy ? 'Hide Info' : 'Why this works?'}
            </button>
            <button
              onClick={() => { setShowRecipe(!showRecipe); setShowWhy(false); }}
              className="btn btn-secondary"
              style={{ flex: 1, padding: '8px 12px', fontSize: '11px', borderRadius: 'var(--border-radius-md)' }}
            >
              {showRecipe ? 'Hide Preparation' : 'Preparation Notes'}
            </button>
          </div>
        </div>

        {/* Inner panel drawers */}
        {showWhy && (
          <div className="animate-scale-in" style={{ width: '100%', background: 'var(--bg-primary)', padding: '14px', borderRadius: 'var(--border-radius-md)', marginTop: '14px', border: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>The Science of the Feel</h4>
            <p style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              We match cravings by texture & timing, not by restrictions. This snack is structured to give your tongue that identical <b>{activeSwap.tags.feel.join(', ')}</b> response while providing smooth digestion.
            </p>
          </div>
        )}

        {showRecipe && (
          <div className="animate-scale-in" style={{ width: '100%', background: 'var(--bg-primary)', padding: '14px', borderRadius: 'var(--border-radius-md)', marginTop: '14px', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <h4 style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-primary)' }}>Cozy Recipe (Takes {activeSwap.prepTime})</h4>
              <span style={{ fontSize: '10px', color: 'var(--color-primary)', fontWeight: '600' }}>{activeSwap.budget}</span>
            </div>
            <p style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: '1.4', whiteSpace: 'pre-line' }}>
              {activeSwap.recipeText}
            </p>
          </div>
        )}
      </div>

      {/* Swipe action buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
        <button
          onClick={() => handleSwipe('left')}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-rose-light)',
            border: 'none',
            color: 'var(--color-rose)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {/* Skip Cross icon */}
          <svg style={{ width: '24px', height: '24px', stroke: 'currentColor', strokeWidth: 2.5, fill: 'none' }} viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <button
          onClick={() => handleSwipe('right')}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-secondary-light)',
            border: 'none',
            color: 'var(--color-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {/* Save Heart icon */}
          <svg style={{ width: '24px', height: '24px', stroke: 'currentColor', strokeWidth: 2.5, fill: savedSwapIds.includes(activeSwap.id) ? 'currentColor' : 'none' }} viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default SwapFeed;
