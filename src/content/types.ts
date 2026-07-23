import type { AppPathname } from "@/i18n/routing";

export interface CtaLink {
  label: string;
  href: AppPathname;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
}

export interface ServiceItem {
  title: string;
  description: string;
  href: AppPathname;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface QualificationItem {
  title: string;
  description: string;
}

export interface PhilosophyPillar {
  title: string;
  description: string;
}

export interface HomeContent {
  hero: HeroContent;
  therapyIntro: {
    eyebrow: string;
    heading: string;
    body: string;
  };
  therapyServices: ServiceItem[];
  benefits: {
    heading: string;
    intro: string;
    items: BenefitItem[];
  };
  about: {
    eyebrow: string;
    heading: string;
    body: string[];
    highlights: string[];
  };
  qualifications: {
    heading: string;
    intro: string;
    items: QualificationItem[];
  };
  philosophy: {
    heading: string;
    body: string;
    pillars: PhilosophyPillar[];
  };
  faqTeaser: {
    heading: string;
    intro: string;
    entries: FaqEntry[];
    cta: CtaLink;
  };
  performanceTeaser: {
    eyebrow: string;
    heading: string;
    body: string;
    points: string[];
    cta: CtaLink;
  };
  ctaBanner: {
    heading: string;
    body: string;
    cta: CtaLink;
  };
}

export interface TherapieContent {
  hero: HeroContent;
  intro: {
    heading: string;
    body: string;
  };
  modalities: { title: string; description: string }[];
  audience: {
    heading: string;
    items: string[];
  };
  process: ProcessStep[];
  ctaBanner: {
    heading: string;
    body: string;
    cta: CtaLink;
  };
}

export interface MmaContent {
  hero: HeroContent;
  intro: {
    heading: string;
    body: string;
  };
  training: {
    heading: string;
    body: string;
    styles: string[];
    conditioning: { title: string; description: string }[];
  };
  selfDefence: {
    heading: string;
    body: string;
    focusPoints: string[];
  };
  audience: {
    heading: string;
    intro: string;
    scenarios: { title: string; description: string }[];
    cta: string;
  };
  ctaBanner: {
    heading: string;
    body: string;
    cta: CtaLink;
  };
}

export interface FaqContent {
  heading: string;
  intro: string;
  entries: FaqEntry[];
}

export interface KontaktContent {
  heading: string;
  intro: string;
  address: {
    heading: string;
    lines: string[];
  };
  hours: {
    heading: string;
    lines: string[];
  };
}

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalContent {
  heading: string;
  intro?: string;
  sections: LegalSection[];
}
