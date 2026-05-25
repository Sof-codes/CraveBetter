import React, { useState } from 'react';
import { SWAP_ALTERNATIVES } from '../data/craving_database';
import type { SwapAlternative } from '../data/types';
import FoodSvg from './FoodSvg';

interface ExploreProps {
  onSelectSwap: (swap: SwapAlternative) => void;
  userProfile: {
    dietPref: 'veg' | 'non-veg';
  };
}

export const Explore: React.FC<ExploreProps> = ({ onSelectSwap, userProfile }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Swaps 🍱' },
    { id: 'under_20', label: 'Under ₹20 💰' },
    { id: 'under_50', label: 'Under ₹50 🪙' },
    { id: 'hostel', label: 'Hostel Friendly 🎓' },
    { id: 'gym', label: 'Gym Mode 💪' },
    { id: 'acne', label: 'Acne Safe 🌿' },
    { id: 'late_night', label: 'Late Night 🌌' },
    { id: 'monsoon', label: 'Monsoon Chai 🌧️' }
  ];

  const getFilteredSwaps = (): SwapAlternative[] => {
    return SWAP_ALTERNATIVES.filter(swap => {
      // Filter by diet
      if (userProfile.dietPref === 'veg' && swap.tags.lifestyle.includes('eggs')) {
        return false;
      }

      if (selectedFilter === 'all') return true;
      if (selectedFilter === 'under_20') return swap.budget === 'under ₹20';
      if (selectedFilter === 'under_50') return swap.budget === 'under ₹50';
      if (selectedFilter === 'hostel') return swap.tags.lifestyle.includes('hostel-friendly');
      if (selectedFilter === 'gym') return swap.tags.lifestyle.includes('gym mode');
      if (selectedFilter === 'acne') return swap.tags.lifestyle.includes('acne-friendly');
      if (selectedFilter === 'late_night') return swap.tags.occasion.includes('late night');
      if (selectedFilter === 'monsoon') return swap.tags.occasion.includes('monsoon');
      return true;
    });
  };

  return (
    <div className="main-content animate-fade-in" style={{ paddingBottom: '90px' }}>
      <div>
        <h2 className="serif" style={{ fontSize: '24px', marginBottom: '4px' }}>Explore Swaps</h2>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          Browse nourishing and pocket-friendly Indian alternatives curated for your daily moments.
        </p>
      </div>

      {/* Filters Scroll View */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px', scrollbarWidth: 'none' }}>
        {filters.map(f => (
          <button
            key={f.id}
            onClick={() => setSelectedFilter(f.id)}
            style={{
              flexShrink: 0,
              padding: '8px 16px',
              borderRadius: 'var(--border-radius-full)',
              border: '1px solid',
              borderColor: selectedFilter === f.id ? 'var(--color-primary)' : 'var(--border-color)',
              backgroundColor: selectedFilter === f.id ? 'var(--color-primary-light)' : 'var(--bg-card)',
              color: selectedFilter === f.id ? 'var(--color-primary)' : 'var(--text-primary)',
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid of Results */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {getFilteredSwaps().map(swap => (
          <button
            key={swap.id}
            onClick={() => onSelectSwap(swap)}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--border-radius-md)',
              padding: '16px 12px',
              cursor: 'pointer',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 'var(--shadow-sm)',
              transition: 'transform 0.2s, box-shadow 0.2s'
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
            <FoodSvg seed={swap.imageSvgSeed} size={70} />
            <h4 style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-primary)', marginTop: '10px', height: '34px', overflow: 'hidden', lineHeight: '1.3' }}>
              {swap.name}
            </h4>

            {/* Badges */}
            <div style={{ display: 'flex', gap: '4px', marginTop: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <span className="tag tag-why" style={{ fontSize: '9px', padding: '2px 6px' }}>
                {swap.prepTime}
              </span>
              <span className="tag tag-feel" style={{ fontSize: '9px', padding: '2px 6px' }}>
                {swap.budget}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
export default Explore;
