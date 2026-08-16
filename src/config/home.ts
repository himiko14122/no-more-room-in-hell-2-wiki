import {
  BookOpen, Skull, Map, Heart, Users, Zap, BarChart3, Gamepad2, Clock,
  Crosshair, Target, Shield, Swords, type LucideIcon,
} from 'lucide-react';

export interface StatConfig {
  val: string;
  labelKey: string;
}

export interface ModuleCardConfig {
  key: string;
  labelKey: string;
  titleKey: string;
  descKey: string;
  href: string;
  stats: StatConfig[];
  icon: LucideIcon;
  ctaKey?: string;
}

export interface GameFeatureConfig {
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
}

export interface StartHereStepConfig {
  titleKey: string;
  descKey: string;
  href: string;
}

export interface HeroCtaConfig {
  labelKey: string;
  href: string;
  style: 'primary' | 'secondary';
}

export const HOME_CONFIG = {
  hero: {
    // Official trailer — Torn Banner Studios, verified in research_report.md §3
    videoId: 'jkuwzUd9lGs',
    badgeKeys: [
      'home_hero_badge_release',
      'home_hero_badge_coop',
      'home_hero_badge_permadeath',
      'home_hero_badge_armageddon',
      'home_hero_badge_platforms',
    ],
    ctas: [
      { labelKey: 'home_hero_cta_guides', href: '/guides', style: 'primary' as const },
      { labelKey: 'home_hero_cta_tierList', href: '/tier-list', style: 'secondary' as const },
      { labelKey: 'home_hero_cta_updates', href: '/updates', style: 'secondary' as const },
    ],
  },

  moduleCards: [
    { key: 'guides', labelKey: 'home_module_guides', titleKey: 'home_module_guides_title', descKey: 'home_module_guides_desc', href: '/guides', stats: [{ val: '10+', labelKey: 'home_module_guides_stat1' }, { val: '8', labelKey: 'home_module_guides_stat2' }], icon: BookOpen, ctaKey: 'home_module_guides_cta' },
    { key: 'tier-list', labelKey: 'home_module_tierList', titleKey: 'home_module_tierList_title', descKey: 'home_module_tierList_desc', href: '/tier-list', stats: [{ val: 'S-C', labelKey: 'home_module_tierList_stat1' }, { val: '30+', labelKey: 'home_module_tierList_stat2' }], icon: BarChart3, ctaKey: 'home_module_tierList_cta' },
    { key: 'weapons', labelKey: 'home_module_weapons', titleKey: 'home_module_weapons_title', descKey: 'home_module_weapons_desc', href: '/weapons', stats: [{ val: '30+', labelKey: 'home_module_weapons_stat1' }, { val: '4', labelKey: 'home_module_weapons_stat2' }], icon: Crosshair, ctaKey: 'home_module_weapons_cta' },
    { key: 'zombies', labelKey: 'home_module_zombies', titleKey: 'home_module_zombies_title', descKey: 'home_module_zombies_desc', href: '/zombies', stats: [{ val: '6+', labelKey: 'home_module_zombies_stat1' }, { val: '4', labelKey: 'home_module_zombies_stat2' }], icon: Skull, ctaKey: 'home_module_zombies_cta' },
    { key: 'maps', labelKey: 'home_module_maps', titleKey: 'home_module_maps_title', descKey: 'home_module_maps_desc', href: '/maps', stats: [{ val: '9', labelKey: 'home_module_maps_stat1' }, { val: 'New', labelKey: 'home_module_maps_stat2' }], icon: Map, ctaKey: 'home_module_maps_cta' },
    { key: 'survival', labelKey: 'home_module_survival', titleKey: 'home_module_survival_title', descKey: 'home_module_survival_desc', href: '/survival', stats: [{ val: '5', labelKey: 'home_module_survival_stat1' }, { val: 'High', labelKey: 'home_module_survival_stat2' }], icon: Heart, ctaKey: 'home_module_survival_cta' },
    { key: 'responders', labelKey: 'home_module_responders', titleKey: 'home_module_responders_title', descKey: 'home_module_responders_desc', href: '/responders', stats: [{ val: '3', labelKey: 'home_module_responders_stat1' }, { val: '∞', labelKey: 'home_module_responders_stat2' }], icon: Users, ctaKey: 'home_module_responders_cta' },
    { key: 'skills', labelKey: 'home_module_skills', titleKey: 'home_module_skills_title', descKey: 'home_module_skills_desc', href: '/skills', stats: [{ val: '13+', labelKey: 'home_module_skills_stat1' }, { val: 'Expert', labelKey: 'home_module_skills_stat2' }], icon: Zap, ctaKey: 'home_module_skills_cta' },
    { key: 'multiplayer', labelKey: 'home_module_multiplayer', titleKey: 'home_module_multiplayer_title', descKey: 'home_module_multiplayer_desc', href: '/multiplayer', stats: [{ val: '8', labelKey: 'home_module_multiplayer_stat1' }, { val: '4', labelKey: 'home_module_multiplayer_stat2' }], icon: Gamepad2, ctaKey: 'home_module_multiplayer_cta' },
    { key: 'updates', labelKey: 'home_module_updates', titleKey: 'home_module_updates_title', descKey: 'home_module_updates_desc', href: '/updates', stats: [{ val: '1.0', labelKey: 'home_module_updates_stat1' }, { val: 'New', labelKey: 'home_module_updates_stat2' }], icon: Clock, ctaKey: 'home_module_updates_cta' },
  ] as ModuleCardConfig[],

  gameFeatures: [
    { titleKey: 'home_feature_permadeath_title', descKey: 'home_feature_permadeath_desc', icon: Heart },
    { titleKey: 'home_feature_infection_title', descKey: 'home_feature_infection_desc', icon: Shield },
    { titleKey: 'home_feature_coop_title', descKey: 'home_feature_coop_desc', icon: Users },
    { titleKey: 'home_feature_weapons_title', descKey: 'home_feature_weapons_desc', icon: Swords },
  ] as GameFeatureConfig[],

  startHereSteps: [
    { titleKey: 'home_start_1_title', descKey: 'home_start_1_desc', href: '/guides' },
    { titleKey: 'home_start_2_title', descKey: 'home_start_2_desc', href: '/survival' },
    { titleKey: 'home_start_3_title', descKey: 'home_start_3_desc', href: '/weapons' },
    { titleKey: 'home_start_4_title', descKey: 'home_start_4_desc', href: '/maps' },
    { titleKey: 'home_start_5_title', descKey: 'home_start_5_desc', href: '/responders' },
  ] as StartHereStepConfig[],

  gameOverview: {
    infoItems: ['developer', 'publisher', 'platform', 'genre', 'release', 'launch', 'players', 'reviews'],
    cta: {
      guideLabelKey: 'home_about_cta',
      guideHref: '/guides',
      externalLabelKey: 'home_cta_steam',
      externalLinkKey: 'steam',
    },
  },

  faq: {
    keys: ['howToPlay', 'isPermadeath', 'bestWeapons', 'howManyPlayers', 'platforms', 'difficultyLevels', 'infectionCure'],
  },

  bottomCta: {
    guideHref: '/guides',
    guideLabelKey: 'home_cta_guide',
    externalLinkKey: 'steam',
    externalLabelKey: 'home_cta_steam',
  },
};