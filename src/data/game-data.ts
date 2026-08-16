// Game-specific data for No More Room in Hell 2
// Color maps, entity structures, and tier utilities
// NOTE: T3 config replacement will fill entity data arrays from keywords.json merged_data.

/* ──────────────── Color Maps ──────────────── */
export const TIER_COLOR_MAP: Record<string, string> = {
  S: 'var(--color-tier-s)',
  A: 'var(--color-tier-a)',
  B: 'var(--color-tier-b)',
  C: 'var(--color-tier-c)',
};
export const TIER_COLOR_DEFAULT = 'var(--color-tier-c)';

export function tierColor(tier: string): string {
  return TIER_COLOR_MAP[tier] ?? TIER_COLOR_DEFAULT;
}

/* ──────────────── Sidebar Codes ──────────────── */
export interface SidebarCode {
  code: string;
  reward: string;
}

// No More Room in Hell 2 does not have a redemption code system (per research).
export const SIDEBAR_CODES: SidebarCode[] = [
  { code: 'None', reward: 'No active codes yet. Check back soon!' },
];

/* ──────────────── Footer Data ──────────────── */
export const FOOTER_DATA = {
  officialDiscordUrl: 'https://discord.gg/nmrih',
  officialYoutubeUrl: 'https://www.youtube.com/@NoMoreRoomInHellMod',
  communityTool: { label: 'Steam Community', href: 'https://steamcommunity.com/app/292000' },
} as const;

/* ──────────────── Weapons Data ──────────────── */
export interface Weapon {
  id: string;
  nameKey: string;
  type: string;
  typeKey: string;
  tier: string;
  class: string;
  classKey: string;
  damageKey: string;
}

export const WEAPONS: Weapon[] = [
  { id: 'fierra-db12', nameKey: 'weapon_fierra_db12_name', type: 'shotgun', typeKey: 'weapon_type_shotgun', tier: 'S', class: 'Shotgun', classKey: 'weapon_class_shotgun', damageKey: 'weapon_fierra_db12_damage' },
  { id: 'm7a1', nameKey: 'weapon_m7a1_name', type: 'rifle', typeKey: 'weapon_type_rifle', tier: 'S', class: 'Carbine', classKey: 'weapon_class_carbine', damageKey: 'weapon_m7a1_damage' },
  { id: 'rochester-1873', nameKey: 'weapon_rochester_1873_name', type: 'handgun', typeKey: 'weapon_type_handgun', tier: 'A', class: 'Revolver', classKey: 'weapon_class_revolver', damageKey: 'weapon_rochester_1873_damage' },
  { id: 'mp5', nameKey: 'weapon_mp5_name', type: 'smg', typeKey: 'weapon_type_smg', tier: 'A', class: 'SMG', classKey: 'weapon_class_smg', damageKey: 'weapon_mp5_damage' },
  { id: 'm1911', nameKey: 'weapon_m1911_name', type: 'handgun', typeKey: 'weapon_type_handgun', tier: 'A', class: 'Pistol', classKey: 'weapon_class_pistol', damageKey: 'weapon_m1911_damage' },
  { id: 'sledgehammer', nameKey: 'weapon_sledgehammer_name', type: 'melee', typeKey: 'weapon_type_melee', tier: 'S', class: 'Melee', classKey: 'weapon_class_melee', damageKey: 'weapon_sledgehammer_damage' },
  { id: 'm9a3', nameKey: 'weapon_m9a3_name', type: 'handgun', typeKey: 'weapon_type_handgun', tier: 'B', class: 'Pistol', classKey: 'weapon_class_pistol', damageKey: 'weapon_m9a3_damage' },
  { id: 'x12', nameKey: 'weapon_x12_name', type: 'shotgun', typeKey: 'weapon_type_shotgun', tier: 'B', class: 'Shotgun', classKey: 'weapon_class_shotgun', damageKey: 'weapon_x12_damage' },
  { id: 'mc-15', nameKey: 'weapon_mc15_name', type: 'rifle', typeKey: 'weapon_type_rifle', tier: 'B', class: 'Carbine', classKey: 'weapon_class_carbine', damageKey: 'weapon_mc15_damage' },
  { id: 'gruber-922', nameKey: 'weapon_gruber_922_name', type: 'handgun', typeKey: 'weapon_type_handgun', tier: 'C', class: 'Pistol', classKey: 'weapon_class_pistol', damageKey: 'weapon_gruber_922_damage' },
];

/* ──────────────── Zombies Data ──────────────── */
export interface Zombie {
  id: string;
  nameKey: string;
  type: string;
  typeKey: string;
  tier: string;
  threatKey: string;
  counterKey: string;
}

export const ZOMBIES: Zombie[] = [
  { id: 'prime-runner', nameKey: 'zombie_prime_runner_name', type: 'armored-runner', typeKey: 'zombie_type_armored_runner', tier: 'S', threatKey: 'zombie_prime_runner_threat', counterKey: 'zombie_prime_runner_counter' },
  { id: 'shambler', nameKey: 'zombie_shambler_name', type: 'gas-screamer', typeKey: 'zombie_type_gas_screamer', tier: 'A', threatKey: 'zombie_shambler_threat', counterKey: 'zombie_shambler_counter' },
  { id: 'runner', nameKey: 'zombie_runner_name', type: 'sprinter', typeKey: 'zombie_type_sprinter', tier: 'A', threatKey: 'zombie_runner_threat', counterKey: 'zombie_runner_counter' },
  { id: 'walker', nameKey: 'zombie_walker_name', type: 'shambler', typeKey: 'zombie_type_shambler', tier: 'C', threatKey: 'zombie_walker_threat', counterKey: 'zombie_walker_counter' },
  { id: 'crawler', nameKey: 'zombie_crawler_name', type: 'dismembered', typeKey: 'zombie_type_dismembered', tier: 'C', threatKey: 'zombie_crawler_threat', counterKey: 'zombie_crawler_counter' },
];

/* ──────────────── Maps Data ──────────────── */
export interface MapItem {
  id: string;
  nameKey: string;
  mode: string;
  modeKey: string;
  tier: string;
  difficultyKey: string;
}

export const MAPS: MapItem[] = [
  { id: 'lewiston', nameKey: 'map_lewiston_name', mode: 'Objective', modeKey: 'map_mode_objective', tier: 'A', difficultyKey: 'map_lewiston_difficulty' },
  { id: 'broadway', nameKey: 'map_broadway_name', mode: 'Objective', modeKey: 'map_mode_objective', tier: 'A', difficultyKey: 'map_broadway_difficulty' },
  { id: 'raven-rock', nameKey: 'map_raven_rock_name', mode: 'Objective', modeKey: 'map_mode_objective', tier: 'S', difficultyKey: 'map_raven_rock_difficulty' },
  { id: 'flooded', nameKey: 'map_flooded_name', mode: 'Survival', modeKey: 'map_mode_survival', tier: 'B', difficultyKey: 'map_flooded_difficulty' },
  { id: 'night-of-the-living-dead', nameKey: 'map_night_of_living_dead_name', mode: 'Survival', modeKey: 'map_mode_survival', tier: 'S', difficultyKey: 'map_night_of_living_dead_difficulty' },
];

/* ──────────────── Skills Data ──────────────── */
export interface Skill {
  id: string;
  nameKey: string;
  category: string;
  categoryKey: string;
  tier: string;
  effectKey: string;
}

export const SKILLS: Skill[] = [
  { id: 'acquired-immunity', nameKey: 'skill_acquired_immunity_name', category: 'survival', categoryKey: 'skill_category_survival', tier: 'S', effectKey: 'skill_acquired_immunity_effect' },
  { id: 'resident-genes', nameKey: 'skill_resident_genes_name', category: 'survival', categoryKey: 'skill_category_survival', tier: 'A', effectKey: 'skill_resident_genes_effect' },
  { id: 'wicked', nameKey: 'skill_wicked_name', category: 'combat', categoryKey: 'skill_category_combat', tier: 'S', effectKey: 'skill_wicked_effect' },
  { id: 'mule', nameKey: 'skill_mule_name', category: 'utility', categoryKey: 'skill_category_utility', tier: 'A', effectKey: 'skill_mule_effect' },
  { id: 'marathon-runner', nameKey: 'skill_marathon_runner_name', category: 'movement', categoryKey: 'skill_category_movement', tier: 'A', effectKey: 'skill_marathon_runner_effect' },
];

/* ──────────────── Update Highlights Data ──────────────── */
export interface UpdateItem {
  id: string;
  nameKey: string;
  type: string;
  typeKey: string;
  tier: string;
  dateKey: string;
  headlineKey: string;
}

export const UPDATES: UpdateItem[] = [
  { id: 'armageddon', nameKey: 'update_armageddon_name', type: 'major', typeKey: 'update_type_major', tier: 'S', dateKey: 'update_armageddon_date', headlineKey: 'update_armageddon_headline' },
  { id: 'survival', nameKey: 'update_survival_name', type: 'major', typeKey: 'update_type_major', tier: 'A', dateKey: 'update_survival_date', headlineKey: 'update_survival_headline' },
  { id: 'raven-rock', nameKey: 'update_raven_rock_name', type: 'content', typeKey: 'update_type_content', tier: 'S', dateKey: 'update_raven_rock_date', headlineKey: 'update_raven_rock_headline' },
  { id: 'assignments', nameKey: 'update_assignments_name', type: 'content', typeKey: 'update_type_content', tier: 'A', dateKey: 'update_assignments_date', headlineKey: 'update_assignments_headline' },
  { id: 'hotfix', nameKey: 'update_hotfix_name', type: 'minor', typeKey: 'update_type_minor', tier: 'B', dateKey: 'update_hotfix_date', headlineKey: 'update_hotfix_headline' },
];