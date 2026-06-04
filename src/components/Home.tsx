import React, { useState } from 'react';
import { CRAVING_CATEGORIES, SWAP_ALTERNATIVES } from '../data/craving_database';
import type { SwapAlternative } from '../data/types';
import FoodSvg from './FoodSvg';

interface HomeProps {
  userProfile: { name: string; goal: string; budgetLimit: 'under ₹20' | 'under ₹50' | 'premium'; lifestyle: 'hostel' | 'home' | 'gym'; dietPref: 'veg' | 'non-veg'; };
  onSelectCategory: (categoryId: string) => void;
  onSelectSwap: (swap: SwapAlternative) => void;
}

const catColors = [
  'var(--color-peach-light)', 'var(--color-mint-light)', 'var(--color-sky-light)',
  'var(--color-yellow-light)', 'var(--color-rose-light)', 'var(--color-lime-light)',
  'var(--color-primary-light)', 'var(--color-peach-light)', 'var(--color-mint-light)',
  'var(--color-sky-light)', 'var(--color-yellow-light)', 'var(--color-rose-light)',
  'var(--color-lime-light)', 'var(--color-primary-light)', 'var(--color-peach-light)',
  'var(--color-mint-light)', 'var(--color-sky-light)', 'var(--color-yellow-light)',
  'var(--color-rose-light)', 'var(--color-lime-light)',
];
const catAccents = [
  'var(--color-peach)', 'var(--color-mint)', 'var(--color-sky)',
  'var(--color-yellow)', 'var(--color-rose)', 'var(--color-lime)',
  'var(--color-primary)', 'var(--color-peach)', 'var(--color-mint)',
  'var(--color-sky)', 'var(--color-yellow)', 'var(--color-rose)',
  'var(--color-lime)', 'var(--color-primary)', 'var(--color-peach)',
  'var(--color-mint)', 'var(--color-sky)', 'var(--color-yellow)',
  'var(--color-rose)', 'var(--color-lime)',
];

export const Home: React.FC<HomeProps> = ({ userProfile, onSelectCategory, onSelectSwap }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // --- Streak & Check-in States ---
  const [streakCount, setStreakCount] = useState<number>(() => {
    const savedCount = Number(localStorage.getItem('cravebetter_streak_count') || '0');
    const lastCheckIn = localStorage.getItem('cravebetter_last_checkin') || '';
    if (lastCheckIn) {
      const today = new Date();
      const lastCheck = new Date(lastCheckIn);
      const diffTime = Math.abs(today.getTime() - lastCheck.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays > 2) {
        // Streak broken
        localStorage.setItem('cravebetter_streak_count', '0');
        return 0;
      }
    }
    return savedCount;
  });
  const [lastCheckInDate, setLastCheckInDate] = useState<string>(() => {
    return localStorage.getItem('cravebetter_last_checkin') || '';
  });
  const [checkedInToday, setCheckedInToday] = useState<boolean>(() => {
    const todayStr = new Date().toDateString();
    const lastDate = localStorage.getItem('cravebetter_last_checkin') || '';
    return lastDate === todayStr;
  });
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [checkInMood, setCheckInMood] = useState('🌸 Balanced');
  const [checkInHunger, setCheckInHunger] = useState('physical');
  const [checkInAdvice, setCheckInAdvice] = useState<string | null>(null);

  // --- Hydration States ---
  const [waterCups, setWaterCups] = useState<number>(() => {
    const saved = localStorage.getItem('cravebetter_water_cups');
    const savedDate = localStorage.getItem('cravebetter_water_date');
    const todayStr = new Date().toDateString();
    if (savedDate === todayStr && saved) {
      return Number(saved);
    }
    localStorage.setItem('cravebetter_water_cups', '0');
    localStorage.setItem('cravebetter_water_date', todayStr);
    return 0;
  });

  // --- Craving Wheel States ---
  const [isSpinning, setIsSpinning] = useState(false);
  const [spunSwap, setSpunSwap] = useState<SwapAlternative | null>(null);

  const handleCheckInSubmit = () => {
    const todayStr = new Date().toDateString();
    let newStreak = streakCount;

    if (lastCheckInDate) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toDateString();

      if (lastCheckInDate === yesterdayStr) {
        newStreak += 1;
      } else if (lastCheckInDate !== todayStr) {
        newStreak = 1;
      }
    } else {
      newStreak = 1;
    }

    setStreakCount(newStreak);
    setLastCheckInDate(todayStr);
    setCheckedInToday(true);
    localStorage.setItem('cravebetter_streak_count', String(newStreak));
    localStorage.setItem('cravebetter_last_checkin', todayStr);

    let advice: string;
    if (checkInHunger === 'thirsty') {
      advice = 'Did you know? Dehydration often mimics hunger! Grab a tall glass of cold water or treat yourself to cooling Spiced Buttermilk (Chaas) first! 🥤';
    } else if (checkInHunger === 'bored') {
      advice = 'Mechanical munching is a natural way our brains seek focus or distraction when bored. Treat yourself to light, airy Spiced Makhana or Murmura Bhel! 🥜';
    } else if (checkInHunger === 'emotional') {
      advice = 'Sending you warmth. Emotional stress and hormonal changes are valid signals from your body. Give yourself space, and try a comforting Date Ladoo or warm Ginger Chai. 🌸';
    } else {
      advice = 'Physical hunger is your body asking for fuel. Satisfy it with a high-protein Sprouted Moong Sandwich or Quick Paneer Tikka! 💪';
    }
    setCheckInAdvice(advice);
  };

  const handleDrinkWater = (idx: number) => {
    const newCount = idx + 1;
    setWaterCups(newCount);
    const todayStr = new Date().toDateString();
    localStorage.setItem('cravebetter_water_cups', String(newCount));
    localStorage.setItem('cravebetter_water_date', todayStr);
  };

  const handleSpinWheel = () => {
    setIsSpinning(true);
    setSpunSwap(null);

    let available = SWAP_ALTERNATIVES.filter(s => {
      if (userProfile.dietPref === 'veg' && ['egg_noodles_hack', 'egg_white_bhurji'].includes(s.id)) return false;
      if (userProfile.budgetLimit === 'under ₹20' && s.budget !== 'under ₹20') return false;
      if (userProfile.budgetLimit === 'under ₹50' && s.budget === 'premium') return false;
      return true;
    });

    if (available.length === 0) available = SWAP_ALTERNATIVES;

    let spins = 0;
    const interval = setInterval(() => {
      const tempIndex = Math.floor(Math.random() * available.length);
      setSpunSwap(available[tempIndex]);
      spins++;
      if (spins > 15) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, 80);
  };

  const getGreeting = () => {
    const h = new Date().getHours();
    if (h < 12) return '🌅 Good morning';
    if (h < 17) return '☀️ Good afternoon';
    if (h < 22) return '🌆 Good evening';
    return '🌙 Hey night owl';
  };

  const getTodayMood = () => {
    const h = new Date().getHours();
    if (h >= 22 || h < 4) return { label: 'Late Night', emoji: '🌙', cat: 'late_night' };
    if (h >= 16 && h < 20) return { label: 'Tea Time', emoji: '☕', cat: 'sweet_tea_coffee' };
    if (userProfile.lifestyle === 'gym') return { label: 'Post Gym', emoji: '💪', cat: 'post_gym' };
    return { label: 'Study Break', emoji: '📚', cat: 'chips_namkeen' };
  };

  const todayMood = getTodayMood();

  const personalizedSwaps = SWAP_ALTERNATIVES.filter(s => {
    if (userProfile.dietPref === 'veg' && ['egg_noodles_hack', 'egg_white_bhurji'].includes(s.id)) return false;
    if (userProfile.budgetLimit === 'under ₹20' && s.budget !== 'under ₹20') return false;
    if (userProfile.budgetLimit === 'under ₹50' && s.budget === 'premium') return false;
    return s.tags.lifestyle.includes(userProfile.lifestyle) || s.categoryId === todayMood.cat;
  }).slice(0, 4);

  const matchedSwaps = searchQuery.trim().length > 1
    ? SWAP_ALTERNATIVES.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.tags.feel.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        s.whyDescription.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const filteredCats = CRAVING_CATEGORIES.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const quickMoods = [
    { label: '🌙 Night craving', q: 'late night' },
    { label: '😤 Stress eating', q: 'stress' },
    { label: '🌸 PMS mood', q: 'pms' },
    { label: '🥤 Fizzy drink', q: 'soda' },
    { label: '🌧️ Monsoon snack', q: 'monsoon' },
    { label: '💪 Post gym', q: 'protein' },
  ];

  return (
    <div className="main-content animate-fade-in" style={{ paddingBottom: '90px' }}>
      {/* Hero Welcome */}
      <div style={{
        padding: '22px', borderRadius: 'var(--radius-lg)',
        background: 'linear-gradient(135deg, #EDE8FF 0%, #F0F9FF 50%, #FFF0EB 100%)',
        border: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: -20, right: -20, fontSize: 80, opacity: 0.12 }}>🥗</div>
        <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
          {getGreeting()}, {userProfile.name}!
        </div>
        <h2 className="serif" style={{ fontSize: '22px', lineHeight: 1.25, color: 'var(--text-primary)', marginBottom: 8 }}>
          What's your body asking for right now?
        </h2>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <span className="tag tag-why">✨ {todayMood.emoji} {todayMood.label} Mode</span>
          <span className="tag tag-lifestyle">🏷️ {userProfile.lifestyle === 'hostel' ? 'Hostel Life' : userProfile.lifestyle === 'gym' ? 'Gym Mode' : 'Home Cook'}</span>
          <span className="tag tag-feel">{userProfile.budgetLimit}</span>
        </div>
      </div>

      {/* --- Mindful Streak Dashboard --- */}
      <div className="streak-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="streak-flame">🔥</span>
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)' }}>
              {streakCount > 0 ? `${streakCount}-Day Mindful Streak` : 'Start Your Streak!'}
            </h4>
            <p style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
              {checkedInToday ? 'Checked in for today! Keep it up. 🌿' : 'Log your mood & check in today.'}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            if (!checkedInToday) {
              setCheckInAdvice(null);
              setShowCheckInModal(true);
            } else {
              setShowCheckInModal(true);
            }
          }}
          className="btn btn-primary"
          style={{ padding: '6px 14px', fontSize: '11px' }}
        >
          {checkedInToday ? 'View Check-in' : 'Check In'}
        </button>
      </div>

      {/* Search */}
      <div style={{ position: 'relative' }}>
        <input type="text"
          placeholder="Search cravings — chips, chai, Maggi, sweet..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          style={{ width: '100%', padding: '14px 18px 14px 46px', borderRadius: 'var(--radius-full)', fontSize: '13px' }}
        />
        <svg style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', width: 18, height: 18, stroke: 'var(--text-tertiary)', fill: 'none', strokeWidth: 2 }} viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        {searchQuery && (
          <button onClick={() => setSearchQuery('')} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-tertiary)', fontSize: 16 }}>✕</button>
        )}
      </div>

      {/* Search Results */}
      {searchQuery.trim().length > 1 && (
        <div className="card animate-scale-in" style={{ padding: '12px' }}>
          <div style={{ fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 10, padding: '0 4px' }}>
            {matchedSwaps.length} Swaps Found
          </div>
          {matchedSwaps.length > 0 ? matchedSwaps.map(s => (
            <button key={s.id} onClick={() => onSelectSwap(s)} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '10px', width: '100%',
              background: 'none', border: 'none', cursor: 'pointer', borderRadius: 'var(--radius-sm)',
              textAlign: 'left', transition: 'background 0.15s'
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-primary)'}
              onMouseLeave={e => e.currentTarget.style.background = 'none'}
            >
              <FoodSvg seed={s.imageSvgSeed} size={38} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>{s.name}</div>
                <div style={{ fontSize: '11px', color: 'var(--color-primary)' }}>{s.budget} • {s.prepTime}</div>
              </div>
              <span className="tag tag-why" style={{ fontSize: '10px', flexShrink: 0 }}>{s.tags.whyItWorks[0]}</span>
            </button>
          )) : (
            <div style={{ padding: '16px', textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '13px' }}>
              No swaps for "{searchQuery}" yet. Try the AI Coach! 🤖
            </div>
          )}
        </div>
      )}

      {/* Quick Moods */}
      {!searchQuery && (
        <div>
          <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: 10 }}>What's your vibe?</div>
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4, scrollbarWidth: 'none' }}>
            {quickMoods.map((m, i) => (
              <button key={i} onClick={() => setSearchQuery(m.q)} className={`chip ${searchQuery === m.q ? 'chip-active' : ''}`}>
                {m.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* --- Cozy Hydration Tracker --- */}
      {!searchQuery && (
        <div className="card" style={{ padding: '16px', background: 'var(--bg-card)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)' }}>Cozy Hydration Check 💧</h4>
              <p style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Cravings can be simple dehydration masquerading. Have a drink first!</p>
            </div>
            <span style={{ fontSize: '10px', fontWeight: '700', color: 'var(--color-sky)' }}>{waterCups}/5 Cups</span>
          </div>
          <div className="water-cups-container">
            {[0, 1, 2, 3, 4].map(idx => (
              <button
                key={idx}
                onClick={() => handleDrinkWater(idx)}
                className={`water-cup-btn ${waterCups > idx ? 'water-cup-filled' : ''}`}
                style={{ opacity: waterCups > idx ? 1 : 0.25 }}
              >
                🥛
              </button>
            ))}
          </div>
          {waterCups === 5 && (
            <p className="animate-scale-in" style={{ fontSize: '10px', color: 'var(--color-mint)', fontWeight: '600', textAlign: 'center', marginTop: '6px' }}>
              You are beautifully hydrated today! Good job 🌸
            </p>
          )}
        </div>
      )}

      {/* For You Today */}
      {!searchQuery && personalizedSwaps.length > 0 && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-secondary)' }}>For You Today ✨</div>
            <span style={{ fontSize: '10px', color: 'var(--color-mint)', fontWeight: '600' }}>Time-aware picks</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {personalizedSwaps.map(s => (
              <button key={s.id} onClick={() => onSelectSwap(s)} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)', padding: '14px 12px', cursor: 'pointer',
                textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center',
                boxShadow: 'var(--shadow-sm)', transition: 'all 0.2s', gap: 8
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
              >
                <FoodSvg seed={s.imageSvgSeed} size={52} />
                <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-primary)', lineHeight: 1.3 }}>{s.name}</div>
                <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
                  <span className="tag tag-why" style={{ fontSize: '9px', padding: '2px 7px' }}>{s.prepTime}</span>
                  <span className="tag tag-feel" style={{ fontSize: '9px', padding: '2px 7px' }}>{s.budget}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* --- Spin the Craving Wheel (Roulette) --- */}
      {!searchQuery && (
        <div className="wheel-container">
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)' }}>🌀 Spin the Craving Roulette</h4>
            <p style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Can't make up your mind? Let the cozy wheel choose a swap!</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '100%' }}>
            {isSpinning ? (
              <div className="spinning-active" style={{ fontSize: '42px' }}>
                🍪
              </div>
            ) : spunSwap ? (
              <div className="animate-scale-in" style={{
                textAlign: 'center', background: 'var(--bg-primary)',
                padding: '12px', borderRadius: 'var(--radius-md)', width: '100%',
                border: '1.5px solid var(--color-primary-mid)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px'
              }}>
                <FoodSvg seed={spunSwap.imageSvgSeed} size={48} />
                <span style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--text-tertiary)', fontWeight: '600' }}>Your Cozy Swap Match!</span>
                <h5 style={{ fontSize: '13px', fontWeight: '800' }}>{spunSwap.name}</h5>
                <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                  <button onClick={() => onSelectSwap(spunSwap)} className="btn btn-primary" style={{ padding: '4px 10px', fontSize: '10px', borderRadius: 'var(--radius-sm)' }}>
                    View Recipe
                  </button>
                  <button onClick={handleSpinWheel} className="btn btn-outline" style={{ padding: '4px 10px', fontSize: '10px', borderRadius: 'var(--radius-sm)' }}>
                    Spin Again
                  </button>
                </div>
              </div>
            ) : (
              <button onClick={handleSpinWheel} className="btn btn-primary" style={{ width: '100%', padding: '10px' }}>
                🌀 Spin the Roulette Wheel
              </button>
            )}
          </div>
        </div>
      )}

      {/* Categories Grid */}
      <div>
        <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: 12 }}>
          {searchQuery ? 'Matching Categories' : 'All Craving Categories'}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {filteredCats.map((cat, idx) => (
            <button key={cat.id} onClick={() => onSelectCategory(cat.id)} style={{
              background: catColors[idx % catColors.length],
              border: '1.5px solid transparent', borderRadius: 'var(--radius-md)',
              padding: '16px 14px', cursor: 'pointer', textAlign: 'left',
              display: 'flex', flexDirection: 'column', gap: 6,
              transition: 'all 0.2s', boxShadow: 'var(--shadow-sm)'
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = catAccents[idx % catAccents.length]; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'transparent'; }}
            >
              <span style={{ fontSize: '26px' }}>{cat.emoji || '🍽️'}</span>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-primary)', lineHeight: 1.25 }}>{cat.name}</div>
              <div style={{ fontSize: '10px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{cat.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* --- Check-in Overlay Modal --- */}
      {showCheckInModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(62,56,50,0.5)', backdropFilter: 'blur(6px)',
          zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px'
        }}
          onClick={() => setShowCheckInModal(false)}
        >
          <div className="glass-panel animate-scale-in" style={{
            width: '100%', maxWidth: '380px', borderRadius: 'var(--radius-md)',
            padding: '24px', position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px',
            background: 'var(--bg-card)'
          }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 className="serif" style={{ fontSize: '18px' }}>Daily Check-in 🌿</h3>
              <button onClick={() => setShowCheckInModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: 'var(--text-tertiary)' }}>✕</button>
            </div>

            {checkedInToday && !checkInAdvice ? (
              <div style={{ textAlign: 'center', padding: '12px 0' }}>
                <span style={{ fontSize: '38px', display: 'block', marginBottom: '8px' }}>🎉</span>
                <h5 style={{ fontSize: '13px', color: 'var(--color-primary)', fontWeight: '700' }}>You're checked in today!</h5>
                <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  Come back tomorrow to keep your flame alive. Your mindful eating journey is a marathon, not a sprint!
                </p>
              </div>
            ) : checkInAdvice ? (
              <div className="animate-scale-in" style={{ display: 'flex', flexDirection: 'column', gap: '10px', background: 'var(--color-primary-light)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-hover)' }}>
                <h5 style={{ fontSize: '12px', fontWeight: '700', color: 'var(--color-primary)' }}>Cozy Advice for You:</h5>
                <p style={{ fontSize: '11px', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                  {checkInAdvice}
                </p>
                <button onClick={() => setShowCheckInModal(false)} className="btn btn-primary" style={{ padding: '6px', fontSize: '11px', alignSelf: 'flex-end', marginTop: '6px' }}>
                  Got It!
                </button>
              </div>
            ) : (
              <>
                <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '-10px' }}>
                  Log your current state to complete today's mindfulness reflection!
                </p>
                
                <div>
                  <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px', textTransform: 'uppercase' }}>
                    1. Current Mood / Energy
                  </span>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                    {['🌸 Balanced', '😤 Stressed', '🥱 Low Energy', '⚡ Energized'].map(m => (
                      <button
                        key={m}
                        onClick={() => setCheckInMood(m)}
                        className={`chip ${checkInMood === m ? 'chip-active' : ''}`}
                        style={{ fontSize: '11px', padding: '6px 8px', textAlign: 'center' }}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px', textTransform: 'uppercase' }}>
                    2. Craving Nature
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {[
                      { id: 'physical', label: 'Physical Hunger 🍽️', desc: 'Empty stomach, seeking fuel' },
                      { id: 'emotional', label: 'Emotional / Stress Comfort 🌸', desc: 'Seeking dopamine or relief' },
                      { id: 'thirsty', label: 'Just Thirsty / Dry Throat 🥤', desc: 'Could be resolved with a beverage' },
                      { id: 'bored', label: 'Bored Screen Munching 🍿', desc: 'Looking for a chewing distraction' },
                    ].map(h => (
                      <button
                        key={h.id}
                        onClick={() => setCheckInHunger(h.id)}
                        style={{
                          padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid',
                          borderColor: checkInHunger === h.id ? 'var(--color-primary)' : 'var(--border-color)',
                          backgroundColor: checkInHunger === h.id ? 'var(--color-primary-light)' : 'var(--bg-primary)',
                          color: 'var(--text-primary)', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s'
                        }}
                      >
                        <div style={{ fontWeight: '600', fontSize: '12px' }}>{h.label}</div>
                        <div style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>{h.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <button onClick={handleCheckInSubmit} className="btn btn-primary" style={{ width: '100%', padding: '11px' }}>
                  Log Check-in & Claim Flame 🔥
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
