import { createClient } from '@supabase/supabase-js';

const normalizeEnvValue = (value: unknown) => {
  if (typeof value !== 'string') return '';
  const trimmed = value.trim();
  // Allow values pasted with wrapping quotes in hosting dashboards.
  return trimmed.replace(/^['\"]|['\"]$/g, '');
};

const supabaseUrl = normalizeEnvValue((import.meta as any).env.VITE_SUPABASE_URL);
const supabaseAnonKey = normalizeEnvValue((import.meta as any).env.VITE_SUPABASE_ANON_KEY);

const isValidUrl = (url: string) => {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
};

// Only initialize if keys are present and URL is valid to avoid startup errors
export const supabase = (supabaseUrl && isValidUrl(supabaseUrl) && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;
