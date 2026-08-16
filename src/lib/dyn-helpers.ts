import { TIER_COLOR_MAP } from '@/data/game-data';

export function resolveDynamic(val: string, ctx: Record<string, string>): string {
  return val.startsWith('__') ? (ctx[val] ?? val) : val;
}

export function tierColorVal(tier: string): string {
  return TIER_COLOR_MAP[tier] ?? 'var(--color-tier-c)';
}