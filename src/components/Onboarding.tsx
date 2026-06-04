import React, { useState } from 'react';

interface OnboardingProps {
  onComplete: (profile: {
    name: string;
    goal: string;
    budgetLimit: 'under ₹20' | 'under ₹50' | 'premium';
    lifestyle: 'hostel' | 'home' | 'gym';
    dietPref: 'veg' | 'non-veg';
  }) => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('mindful_bite');
  const [budgetLimit, setBudgetLimit] = useState<'under ₹20' | 'under ₹50' | 'premium'>('under ₹50');
  const [lifestyle, setLifestyle] = useState<'hostel' | 'home' | 'gym'>('home');
  const [dietPref, setDietPref] = useState<'veg' | 'non-veg'>('veg');

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete({
        name: name.trim() || 'Friend',
        goal,
        budgetLimit,
        lifestyle,
        dietPref
      });
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="main-content animate-fade-in" style={{ justifyContent: 'center', height: '100%' }}>
      <div className="glass-panel" style={{ padding: '28px', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-md)' }}>
        {/* Step indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '24px' }}>
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              style={{
                width: '32px',
                height: '6px',
                borderRadius: 'var(--border-radius-full)',
                backgroundColor: s === step ? 'var(--color-primary)' : 'var(--border-color)',
                transition: 'background-color 0.3s'
              }}
            />
          ))}
        </div>

        {step === 1 && (
          <div>
            <h2 className="serif" style={{ fontSize: '26px', marginBottom: '8px', textAlign: 'center' }}>
              Welcome to <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>CraveBetter</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', textAlign: 'center', marginBottom: '24px' }}>
              A cozy space designed to support your cravings without clinical rules or clinical guilt.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <label style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-secondary)' }}>
                What shall we call you?
                <input
                  type="text"
                  placeholder="Your lovely name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--border-radius-md)',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    marginTop: '6px',
                    outline: 'none'
                  }}
                />
              </label>

              <div style={{ marginTop: '10px' }}>
                <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
                  What is your primary craving goal?
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { id: 'mindful_bite', label: 'Mindful Bite (Awareness & balance)', desc: 'Understand why cravings hit' },
                    { id: 'nourish', label: 'Nourishing Alternatives (Lighter options)', desc: 'Find satisfying swaps' },
                    { id: 'pocket_friendly', label: 'Pocket-Friendly Joy (Budget-focused)', desc: 'Snacks under ₹20/₹50' }
                  ].map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setGoal(g.id)}
                      type="button"
                      style={{
                        padding: '12px',
                        borderRadius: 'var(--border-radius-md)',
                        border: '1px solid',
                        borderColor: goal === g.id ? 'var(--color-primary)' : 'var(--border-color)',
                        backgroundColor: goal === g.id ? 'var(--color-primary-light)' : 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{ fontWeight: '500', fontSize: '13px' }}>{g.label}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px' }}>{g.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="serif" style={{ fontSize: '24px', marginBottom: '8px', textAlign: 'center' }}>
              Your Lifestyle & Budget
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', textAlign: 'center', marginBottom: '24px' }}>
              We tailor swaps to fit what is actually available and affordable for you.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
                  Where do you spend most of your time?
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                  {[
                    { id: 'hostel', label: 'Hostel 🎓', desc: 'No kitchen' },
                    { id: 'home', label: 'Home 🏠', desc: 'Full pantry' },
                    { id: 'gym', label: 'Gym Mode 💪', desc: 'Protein first' }
                  ].map((l) => (
                    <button
                      key={l.id}
                      onClick={() => setLifestyle(l.id as 'hostel' | 'home' | 'gym')}
                      type="button"
                      style={{
                        padding: '12px 6px',
                        borderRadius: 'var(--border-radius-md)',
                        border: '1px solid',
                        borderColor: lifestyle === l.id ? 'var(--color-primary)' : 'var(--border-color)',
                        backgroundColor: lifestyle === l.id ? 'var(--color-primary-light)' : 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{ fontWeight: '600', fontSize: '13px' }}>{l.label}</div>
                      <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginTop: '2px' }}>{l.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
                  What is a realistic budget for a snack?
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { id: 'under ₹20', label: 'Under ₹20 (Extremely pocket-friendly)', desc: 'Makhana, roasted chana, tea' },
                    { id: 'under ₹50', label: 'Under ₹50 (Comforting and affordable)', desc: 'Peanut bhel, oatmeal, dark chocolate' },
                    { id: 'premium', label: 'Premium (No strict budget)', desc: 'Hummus, protein bars, berries' }
                  ].map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setBudgetLimit(b.id as 'under ₹20' | 'under ₹50' | 'premium')}
                      type="button"
                      style={{
                        padding: '12px',
                        borderRadius: 'var(--border-radius-md)',
                        border: '1px solid',
                        borderColor: budgetLimit === b.id ? 'var(--color-primary)' : 'var(--border-color)',
                        backgroundColor: budgetLimit === b.id ? 'var(--color-primary-light)' : 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{ fontWeight: '500', fontSize: '13px' }}>{b.label}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px' }}>{b.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="serif" style={{ fontSize: '24px', marginBottom: '8px', textAlign: 'center' }}>
              Diet Preference
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', textAlign: 'center', marginBottom: '24px' }}>
              Let’s ensure all swap recommendations align perfectly with your dietary choices.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
                  Select your diet preference:
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {[
                    { id: 'veg', label: 'Vegetarian 🌱', desc: 'Egg-free & paneer loving' },
                    { id: 'non-veg', label: 'Eggs Allowed 🍳', desc: 'Adds egg scrambles' }
                  ].map((d) => (
                    <button
                      key={d.id}
                      onClick={() => setDietPref(d.id as 'veg' | 'non-veg')}
                      type="button"
                      style={{
                        padding: '16px',
                        borderRadius: 'var(--border-radius-md)',
                        border: '1px solid',
                        borderColor: dietPref === d.id ? 'var(--color-primary)' : 'var(--border-color)',
                        backgroundColor: dietPref === d.id ? 'var(--color-primary-light)' : 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{ fontWeight: '600', fontSize: '13px' }}>{d.label}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px' }}>{d.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Emotional Contract sign off */}
              <div
                style={{
                  background: 'var(--color-secondary-light)',
                  padding: '14px',
                  borderRadius: 'var(--border-radius-md)',
                  border: '1.5px dashed var(--color-secondary)',
                  marginTop: '10px'
                }}
              >
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '18px' }}>🤝</span>
                  <div>
                    <h4 style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: '600', marginBottom: '2px' }}>
                      The Cozy Emotional Contract
                    </h4>
                    <p style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                      We promise to never count your calories, never shame your cravings, and never tag food as "bad". Let’s enjoy mindful bites together!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginTop: '28px' }}>
          {step > 1 ? (
            <button className="btn btn-outline" onClick={handleBack} type="button" style={{ flex: 1 }}>
              Back
            </button>
          ) : (
            <div style={{ flex: 1 }} />
          )}
          <button className="btn btn-primary" onClick={handleNext} type="button" style={{ flex: 1.5 }}>
            {step === 3 ? 'Start Swapping ✨' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Onboarding;
