import React from 'react';
import { SWAP_ALTERNATIVES } from '../data/craving_database';
import type { SwapAlternative } from '../data/types';
import FoodSvg from './FoodSvg';

interface ProfileProps {
  userProfile: {
    name: string;
    goal: string;
    budgetLimit: 'under ₹20' | 'under ₹50' | 'premium';
    lifestyle: 'hostel' | 'home' | 'gym';
    dietPref: 'veg' | 'non-veg';
  };
  savedSwapIds: string[];
  onRemoveSavedSwap: (swapId: string) => void;
  onSelectSwap: (swap: SwapAlternative) => void;
  onResetProfile: () => void;
}

export const Profile: React.FC<ProfileProps> = ({
  userProfile,
  savedSwapIds,
  onRemoveSavedSwap,
  onSelectSwap,
  onResetProfile
}) => {
  const savedSwaps = SWAP_ALTERNATIVES.filter(swap => savedSwapIds.includes(swap.id));

  // Compute craving pattern insights based on saved swaps
  const getCravingInsights = () => {
    if (savedSwaps.length === 0) {
      return {
        dominantFeel: 'Not enough data yet',
        insightText: 'Save swaps in your feed to discover your unique craving patterns! 🌟'
      };
    }

    const feelCounts: Record<string, number> = {};
    savedSwaps.forEach(swap => {
      swap.tags.feel.forEach(f => {
        feelCounts[f] = (feelCounts[f] || 0) + 1;
      });
    });

    let dominantFeel = '';
    let maxCount = 0;
    Object.entries(feelCounts).forEach(([feel, count]) => {
      if (count > maxCount) {
        maxCount = count;
        dominantFeel = feel;
      }
    });

    let insightText: string;
    if (dominantFeel === 'crunchy' || dominantFeel === 'salty') {
      insightText = 'You love quick sensory dopamine through texture! When stress hits, you reach for that crisp, noisy crackle. 😋';
    } else if (dominantFeel === 'sweet') {
      insightText = 'You seek deep warmth and soothing comfort, often to close a meal or boost late-night mood. 🍫';
    } else if (dominantFeel === 'creamy') {
      insightText = 'You seek velvety rich textures to soothe anxiety and find soft comfort. 🥛';
    } else {
      insightText = 'You have a beautifully balanced palate! You appreciate a wide variety of comforting, mindful bites. 🥗';
    }

    return {
      dominantFeel: dominantFeel ? dominantFeel.charAt(0).toUpperCase() + dominantFeel.slice(1) : 'Balanced',
      insightText
    };
  };

  const insights = getCravingInsights();

  return (
    <div className="main-content animate-fade-in" style={{ paddingBottom: '90px' }}>
      {/* Profile Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--bg-card)', padding: '20px', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light)', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
          🌸
        </div>
        <div>
          <h2 className="serif" style={{ fontSize: '20px' }}>{userProfile.name}</h2>
          <span className="tag tag-lifestyle" style={{ fontSize: '10px', padding: '2px 8px', marginTop: '4px' }}>
            {userProfile.lifestyle === 'hostel' ? 'Hostel Resident' : userProfile.lifestyle === 'gym' ? 'Gym Enthusiast' : 'Home Chef'}
          </span>
        </div>
      </div>

      {/* Craving Insights Section */}
      <div>
        <h3 style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '10px', fontWeight: '600' }}>Your Craving Insights</h3>
        <div className="glass-panel" style={{ padding: '16px', borderRadius: 'var(--border-radius-md)', border: '1.5px dashed var(--color-secondary)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>Dominant Texture Preference</span>
            <span className="tag tag-why" style={{ fontWeight: '700' }}>{insights.dominantFeel}</span>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--text-primary)', lineHeight: '1.5' }}>
            {insights.insightText}
          </p>
        </div>
      </div>

      {/* Craving Wrapped Feature */}
      <div>
        <h3 style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '10px', fontWeight: '600' }}>Craving Wrapped Recaps</h3>
        <div
          style={{
            background: 'linear-gradient(135deg, var(--color-primary-light), var(--bg-card))',
            border: '1px solid rgba(223,155,122,0.15)',
            borderRadius: 'var(--border-radius-md)',
            padding: '16px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span style={{ fontSize: '24px' }}>🎁</span>
            <div>
              <h4 style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: '700' }}>Your Cozy Wrapped Summary</h4>
              <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px', lineHeight: '1.4' }}>
                You have saved <b>{savedSwapIds.length} swaps</b>. Your primary budget setting is <b>{userProfile.budgetLimit}</b> and your diet is set to <b>{userProfile.dietPref === 'veg' ? 'Vegetarian🌱' : 'Eggs Allowed🍳'}</b>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Saved Swaps Section */}
      <div>
        <h3 style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '10px', fontWeight: '600' }}>Saved Swaps ({savedSwaps.length})</h3>
        {savedSwaps.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {savedSwaps.map(swap => (
              <div
                key={swap.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--border-radius-md)',
                  padding: '10px 14px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <button
                  onClick={() => onSelectSwap(swap)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0 }}
                >
                  <FoodSvg seed={swap.imageSvgSeed} size={42} />
                </button>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)' }}>{swap.name}</h4>
                  <span style={{ fontSize: '11px', color: 'var(--color-secondary)' }}>{swap.prepTime} • {swap.budget}</span>
                </div>
                {/* Unsave button */}
                <button
                  onClick={() => onRemoveSavedSwap(swap.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-rose)',
                    cursor: 'pointer',
                    fontSize: '11px',
                    fontWeight: '600',
                    padding: '8px'
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '32px 16px', background: 'var(--bg-card)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--border-color)', color: 'var(--text-tertiary)', fontSize: '12px' }}>
            No saved swaps yet. Swipe right on your Swaps feed or save from AI chat!
          </div>
        )}
      </div>

      {/* Reset Account Profile */}
      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={onResetProfile}
          className="btn btn-outline"
          style={{ width: '100%', padding: '10px', color: 'var(--color-rose)', borderColor: 'rgba(230,167,168,0.3)' }}
        >
          Reset Profile Details
        </button>
      </div>
    </div>
  );
};
export default Profile;
