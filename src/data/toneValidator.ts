/**
 * CraveBetter Copy & Tone Validator (Section 08 Compliance)
 * 
 * Ensures all copy in the application strictly adheres to the Emotional Contract:
 * - NO shaming, clinical guilt, or restrictive terms.
 * - YES supportive, cozy, mindful, and culturally warm phrasing.
 */

const BANNED_TERMS = [
  { term: /exceeded.*limit/i, suggestion: 'reached a gentle pause' },
  { term: /bad\s+food/i, suggestion: 'heavier option' },
  { term: /unhealthy\s+craving/i, suggestion: 'warm comfort need' },
  { term: /healthier\s+option/i, suggestion: 'lighter option' },
  { term: /healthier\s+alternative/i, suggestion: 'nourishing alternative' },
  { term: /guilt-free/i, suggestion: 'mindful bite' },
  { term: /cheat\s+meal/i, suggestion: 'comforting reset' },
  { term: /calorie\s+count/i, suggestion: 'satiety check' },
  { term: /calories/i, suggestion: 'nourishment levels' },
  { term: /fat\s*\/.*grease/i, suggestion: 'richness' },
  { term: /unhealthy/i, suggestion: 'heavier' }
];

export interface ValidationResult {
  isValid: boolean;
  violations: string[];
  suggestedText: string;
}

export function validateCopy(text: string): ValidationResult {
  const violations: string[] = [];
  let suggestedText = text;

  BANNED_TERMS.forEach(({ term, suggestion }) => {
    if (term.test(text)) {
      violations.push(`Banned term matching "${term.source}" found.`);
      suggestedText = suggestedText.replace(term, suggestion);
    }
  });

  return {
    isValid: violations.length === 0,
    violations,
    suggestedText
  };
}

/**
 * Validates a batch of strings (e.g. database description strings)
 * and outputs any warnings in development console.
 */
export function auditDatabase(items: { id: string; text: string }[]): boolean {
  let allValid = true;
  items.forEach(item => {
    const result = validateCopy(item.text);
    if (!result.isValid) {
      console.warn(`[Tone Audit Violation] Item ${item.id}: "${item.text}"`);
      console.warn(`Suggested fix: "${result.suggestedText}"`);
      allValid = false;
    }
  });
  return allValid;
}
