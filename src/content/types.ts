export interface CtaLink {
  label: string;
  href: string;
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
  performanceTeaser: {
    eyebrow: string;
    heading: string;
    body: string;
    points: string[];
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
