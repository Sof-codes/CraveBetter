import { useState } from 'react';
import Onboarding from './components/Onboarding';
import Home from './components/Home';
import SwapFeed from './components/SwapFeed';
import AIChat from './components/AIChat';
import Explore from './components/Explore';
import Profile from './components/Profile';
import FoodSvg from './components/FoodSvg';
import type { SwapAlternative } from './data/types';
import { CRAVING_CATEGORIES } from './data/craving_database';

export interface UserProfile {
  name: string;
  goal: string;
  budgetLimit: 'under ₹20' | 'under ₹50' | 'premium';
  lifestyle: 'hostel' | 'home' | 'gym';
  dietPref: 'veg' | 'non-veg';
}

function App() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(() => {
    const savedProfile = localStorage.getItem('cravebetter_profile');
    return savedProfile ? JSON.parse(savedProfile) : null;
  });

  const [activeTab, setActiveTab] = useState<'home' | 'feed' | 'chat' | 'explore' | 'profile'>('home');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | undefined>(undefined);
  const [selectedSwap, setSelectedSwap] = useState<SwapAlternative | null>(null);
  const [savedSwapIds, setSavedSwapIds] = useState<string[]>(() => {
    const savedSwaps = localStorage.getItem('cravebetter_saved_swaps');
    return savedSwaps ? JSON.parse(savedSwaps) : [];
  });
  const [showNotification, setShowNotification] = useState<string | null>(null);

  const handleOnboardingComplete = (profile: UserProfile) => {
    setUserProfile(profile);
    localStorage.setItem('cravebetter_profile', JSON.stringify(profile));
    triggerNotification('Welcome contract signed warmly! 🤝');
  };

  const handleSaveSwap = (swapId: string) => {
    let updated: string[];
    if (savedSwapIds.includes(swapId)) {
      updated = savedSwapIds.filter(id => id !== swapId);
      triggerNotification('Removed from saved items 🌸');
    } else {
      updated = [...savedSwapIds, swapId];
      triggerNotification('Mindful swap saved! ✨');
    }
    setSavedSwapIds(updated);
    localStorage.setItem('cravebetter_saved_swaps', JSON.stringify(updated));
  };

  const triggerNotification = (message: string) => {
    setShowNotification(message);
    setTimeout(() => setShowNotification(null), 2500);
  };

  const handleResetProfile = () => {
    localStorage.removeItem('cravebetter_profile');
    localStorage.removeItem('cravebetter_saved_swaps');
    setUserProfile(null);
    setSavedSwapIds([]);
    setActiveTab('home');
    triggerNotification('Profile reset successfully 🌿');
  };

  // Navigating to category feed
  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setActiveTab('feed');
  };

  // Render content according to active tabs
  const renderContent = () => {
    if (!userProfile) {
      return <Onboarding onComplete={handleOnboardingComplete} />;
    }

    switch (activeTab) {
      case 'home':
        return (
          <Home
            userProfile={userProfile}
            onSelectCategory={handleSelectCategory}
            onSelectSwap={(swap) => setSelectedSwap(swap)}
          />
        );
      case 'feed':
        return (
          <SwapFeed
            key={selectedCategoryId || 'feed'}
            initialCategoryId={selectedCategoryId}
            onSaveSwap={handleSaveSwap}
            savedSwapIds={savedSwapIds}
          />
        );
      case 'chat':
        return (
          <AIChat
            userProfile={userProfile}
            onSaveSwap={handleSaveSwap}
            savedSwapIds={savedSwapIds}
            onSelectSwap={(swap) => setSelectedSwap(swap)}
          />
        );
      case 'explore':
        return (
          <Explore
            onSelectSwap={(swap) => setSelectedSwap(swap)}
            userProfile={userProfile}
          />
        );
      case 'profile':
        return (
          <Profile
            userProfile={userProfile}
            savedSwapIds={savedSwapIds}
            onRemoveSavedSwap={handleSaveSwap}
            onSelectSwap={(swap) => setSelectedSwap(swap)}
            onResetProfile={handleResetProfile}
          />
        );
      default:
        return <Home userProfile={userProfile} onSelectCategory={handleSelectCategory} onSelectSwap={setSelectedSwap} />;
    }
  };

  const getCategoryNameOfSwap = (swap: SwapAlternative) => {
    const category = CRAVING_CATEGORIES.find(c => c.id === swap.categoryId);
    return category ? category.name : 'Comfort Swap';
  };

  return (
    <>
      {/* Toast Notification */}
      {showNotification && (
        <div
          className="animate-scale-in"
          style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            background: 'var(--text-primary)',
            color: 'var(--bg-secondary)',
            padding: '10px 20px',
            borderRadius: 'var(--border-radius-full)',
            fontSize: '12px',
            fontWeight: '600',
            boxShadow: 'var(--shadow-lg)',
            textAlign: 'center',
            minWidth: '220px'
          }}
        >
          {showNotification}
        </div>
      )}

      {/* Main Scaffold Header */}
      {userProfile && (
        <header className="header-nav">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '20px' }}>🥗</span>
            <div>
              <h1 style={{ fontSize: '16px', fontWeight: '800', margin: 0, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
                Crave<span style={{ color: 'var(--color-primary)' }}>Better</span>
              </h1>
              <span className="serif" style={{ fontSize: '9px', color: 'var(--text-tertiary)', display: 'block', marginTop: '-2px' }}>
                cozy craving swaps
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span className="tag tag-why" style={{ fontSize: '9px', padding: '2px 8px' }}>
              🌱 Safe Copy
            </span>
          </div>
        </header>
      )}

      {/* Main Content Router */}
      {renderContent()}

      {/* Reusable Swap Details Modal / Drawer */}
      {selectedSwap && (
        <div
          className="animate-fade-in"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(62,56,50,0.5)',
            backdropFilter: 'blur(4px)',
            zIndex: 500,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center'
          }}
          onClick={() => setSelectedSwap(null)}
        >
          <div
            className="animate-scale-in"
            style={{
              width: '100%',
              background: 'var(--bg-card)',
              borderRadius: 'var(--border-radius-lg) var(--border-radius-lg) 0 0',
              padding: '24px',
              maxHeight: '85%',
              overflowY: 'auto',
              borderTop: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-lg)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Drag Handle & Close */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div>
                <span style={{ fontSize: '10px', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontWeight: '500' }}>
                  {getCategoryNameOfSwap(selectedSwap)}
                </span>
                <h3 className="serif" style={{ fontSize: '20px' }}>{selectedSwap.name}</h3>
              </div>
              <button
                onClick={() => setSelectedSwap(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-tertiary)',
                  cursor: 'pointer',
                  fontSize: '18px',
                  padding: '6px'
                }}
              >
                ✕
              </button>
            </div>

            {/* Illustration */}
            <div style={{ margin: '14px 0', textAlign: 'center' }}>
              <FoodSvg seed={selectedSwap.imageSvgSeed} size={100} />
            </div>

            {/* All 4 Tag Layers */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', justifyContent: 'center', marginBottom: '16px' }}>
              {selectedSwap.tags.feel.map((t, idx) => (
                <span key={`f-${idx}`} className="tag tag-feel">{t}</span>
              ))}
              {selectedSwap.tags.whyItWorks.map((t, idx) => (
                <span key={`w-${idx}`} className="tag tag-why">{t}</span>
              ))}
              {selectedSwap.tags.lifestyle.map((t, idx) => (
                <span key={`l-${idx}`} className="tag tag-lifestyle">{t}</span>
              ))}
              {selectedSwap.tags.occasion.map((t, idx) => (
                <span key={`o-${idx}`} className="tag tag-occasion">{t}</span>
              ))}
            </div>

            {/* Description */}
            <div style={{ background: 'var(--bg-primary)', padding: '16px', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--border-color)', marginBottom: '16px' }}>
              <h4 style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>Why this works:</h4>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
                "{selectedSwap.whyDescription}"
              </p>
            </div>

            {/* Preparation recipe details */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <h4 style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-primary)' }}>Cozy Recipe (Takes {selectedSwap.prepTime})</h4>
                <span style={{ fontSize: '11px', color: 'var(--color-primary)', fontWeight: '600' }}>{selectedSwap.budget}</span>
              </div>
              <p style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: '1.5', whiteSpace: 'pre-line', background: 'var(--bg-primary)', padding: '12px', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--border-color)' }}>
                {selectedSwap.recipeText}
              </p>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => { handleSaveSwap(selectedSwap.id); }}
                className="btn btn-primary"
                style={{ flex: 1.5 }}
              >
                {savedSwapIds.includes(selectedSwap.id) ? '♥ Saved Swap' : '♡ Save Swap'}
              </button>
              <button onClick={() => setSelectedSwap(null)} className="btn btn-outline" style={{ flex: 1 }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Bottom navigation */}
      {userProfile && (
        <nav className="bottom-nav">
          <button
            onClick={() => { setActiveTab('home'); setSelectedCategoryId(undefined); }}
            className={`nav-item ${activeTab === 'home' ? 'nav-item-active' : ''}`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Home</span>
          </button>

          <button
            onClick={() => { setActiveTab('feed'); setSelectedCategoryId(undefined); }}
            className={`nav-item ${activeTab === 'feed' ? 'nav-item-active' : ''}`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            <span>Swipes</span>
          </button>

          <button
            onClick={() => { setActiveTab('chat'); setSelectedCategoryId(undefined); }}
            className={`nav-item ${activeTab === 'chat' ? 'nav-item-active' : ''}`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>Coach Chat</span>
          </button>

          <button
            onClick={() => { setActiveTab('explore'); setSelectedCategoryId(undefined); }}
            className={`nav-item ${activeTab === 'explore' ? 'nav-item-active' : ''}`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>Explore</span>
          </button>

          <button
            onClick={() => { setActiveTab('profile'); setSelectedCategoryId(undefined); }}
            className={`nav-item ${activeTab === 'profile' ? 'nav-item-active' : ''}`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Profile</span>
          </button>
        </nav>
      )}
    </>
  );
}

export default App;
