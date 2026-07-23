import type { HomeContent } from "../types";
import { faq } from "./faq";

export const home: HomeContent = {
  hero: {
    eyebrow: "Simeon Brus · Ganzheitliche Therapie & Coaching in Bayern",
    headline:
      "Ganzheitliche Therapie & Coaching für ein gesundes und leistungsfähiges Leben.",
    subheadline:
      "Individuelle Konzepte aus Physiotherapie, Sportphysiotherapie, manueller Therapie, Ernährung und Coaching - für nachhaltige Gesundheit, Regeneration und persönliche Entwicklung.",
    primaryCta: { label: "Termin vereinbaren", href: "/kontakt" },
    secondaryCta: { label: "Therapie & Coaching entdecken", href: "/therapie" },
  },
  therapyIntro: {
    eyebrow: "Therapie & Coaching",
    heading: "Körper, Ernährung und Kopf als Einheit",
    body: "Ich unterstütze Menschen in Bayern dabei, Schmerzen zu verstehen, Bewegungsmuster zu verbessern und langfristig leistungsfähig zu bleiben. Mein Ansatz verbindet fundierte Physiotherapie mit Ernährungs- und Mentalcoaching - für Gesundheit, die nicht nur kurzfristig hilft, sondern trägt.",
  },
  therapyServices: [
    {
      title: "Sportphysiotherapie",
      description:
        "Individuelle Behandlung von Beschwerden des Bewegungsapparats und gezielter Bewegungsaufbau nach Verletzungen.",
      href: "/therapie",
    },
    {
      title: "Manuelle Therapie & Bewegungscoaching",
      description:
        "Handgrifftechniken und individuelles Bewegungscoaching für mehr Beweglichkeit, Kraft und Körperbewusstsein.",
      href: "/therapie",
    },
    {
      title: "Ernährung & Lifestyle Coaching",
      description:
        "Ganzheitliche Begleitung bei Ernährung, Regeneration und Alltagsgewohnheiten - abgestimmt auf Ihre Ziele.",
      href: "/therapie",
    },
  ],
  benefits: {
    heading: "Warum ganzheitliche Therapie & Coaching?",
    intro: "Vier Prinzipien, die meine Arbeit mit Ihnen leiten.",
    items: [
      {
        title: "Individuelle Betreuung",
        description:
          "Jeder Behandlungs- und Coachingplan wird exakt auf Ihre Situation, Ihre Ziele und Ihren Körper abgestimmt.",
      },
      {
        title: "Ganzheitlicher Ansatz",
        description:
          "Körper, Ernährung und mentale Gesundheit werden als Einheit betrachtet - nicht isoliert behandelt.",
      },
      {
        title: "Nachhaltige Ergebnisse",
        description:
          "Der Fokus liegt auf langfristiger Gesundheit und Leistungsfähigkeit, nicht auf schnellen, kurzfristigen Lösungen.",
      },
      {
        title: "Wissenschaftlich fundiert",
        description:
          "Alle Methoden basieren auf aktuellem physiotherapeutischem und sportwissenschaftlichem Wissen.",
      },
    ],
  },
  about: {
    eyebrow: "Über Simeon Brus",
    heading: "Ihr Partner für Gesundheit und Leistungsfähigkeit",
    body: [
      "Als staatlich geprüfter Physiotherapeut mit sportphysiotherapeutischer Zusatzausbildung begleite ich Menschen in Bayern seit über zehn Jahren dabei, Beschwerden zu verstehen, nachhaltig gesund zu werden und ihre Leistungsfähigkeit aufzubauen.",
      "Mein Ansatz ist bewusst ganzheitlich: Therapie, Ernährung und mentales Coaching greifen ineinander, statt getrennt betrachtet zu werden. Diese Perspektive auf Körper und Kopf als Einheit hat sich auch in meiner Arbeit im MMA-Training und in der modernen Selbstverteidigung bewährt. Seit 2020 bin ich mit meinem eigenen Therapie-Konzept selbständig.",
    ],
    highlights: [
      "10+ Jahre Erfahrung",
      "Selbständig seit 2020",
      "Staatlich geprüfter Physiotherapeut",
      "Ganzheitlicher Ansatz",
    ],
  },
  qualifications: {
    heading: "Qualifikationen & Expertise",
    intro:
      "Wissen aus meinen Aus-, Fort- und Weiterbildungen, kombiniert, um Menschen ganzheitlich und langfristig zu helfen.",
    items: [
      {
        title: "Physiotherapie",
        description: "Staatlich geprüfte Grundausbildung.",
      },
      {
        title: "Sportphysiotherapie (DOSB GK)",
        description: "Grundkurs Sportphysiotherapie des DOSB.",
      },
      {
        title: "Manuelle Therapie",
        description: "Nach osteopathischem Konzept.",
      },
      {
        title: "CMD & Atlas-Axis-Therapie",
        description: "Kiefer-Manualtherapie (CMD) und Atlas-Axis-Therapie.",
      },
      {
        title: "Sportbetreuer",
        description:
          "Betreuung von Athlet:innen im Trainings- und Wettkampfalltag.",
      },
      {
        title: "Chiropraktik",
        description: "Manuelle Techniken zur Gelenkbehandlung.",
      },
      {
        title: "Dry Needling",
        description:
          "Gezielte Nadeltechnik zur Behandlung myofaszialer Triggerpunkte.",
      },
      {
        title: "Masseur & medizinischer Bademeister",
        description: "Staatlich geprüfte Ausbildung.",
      },
      {
        title: "Medical Flossing & Tapen",
        description:
          "Kompressions- und Tape-Techniken zur Unterstützung von Beweglichkeit und Regeneration.",
      },
      {
        title: "Ernährungs- & Fastenkonzepte",
        description: "Individuelle Ernährungsberatung und Fastenkonzepte.",
      },
      {
        title: "Sektoraler Heilpraktiker Physiotherapie",
        description:
          "Erweiterte Heilpraktiker-Erlaubnis im Bereich Physiotherapie.",
      },
    ],
  },
  philosophy: {
    heading: "Meine Philosophie: Ihr Erfolg zählt",
    body: "Ich verstehe meine Arbeit als langfristige Partnerschaft. Es geht nicht um schnelle Linderung, sondern darum, dass Sie Ihren Körper verstehen, ihm vertrauen und dauerhaft gesund und leistungsfähig bleiben.",
    pillars: [
      {
        title: "Individuell",
        description:
          "Jeder Plan ist so einzigartig wie die Person, für die er entwickelt wird.",
      },
      {
        title: "Nachhaltig",
        description:
          "Der Erfolg zeigt sich nicht nur heute, sondern auch in einem Jahr.",
      },
      {
        title: "Ganzheitlich",
        description:
          "Körper, Ernährung und mentale Gesundheit werden gemeinsam gedacht.",
      },
    ],
  },
  faqTeaser: {
    heading: "Häufig gestellte Fragen",
    intro:
      "Antworten auf die häufigsten Fragen zu Therapie, Coaching und Terminen.",
    entries: [faq.entries[0], faq.entries[1], faq.entries[3], faq.entries[4]],
    cta: { label: "Alle Fragen ansehen", href: "/faq" },
  },
  performanceTeaser: {
    eyebrow: "MMA-Training & Selbstverteidigung",
    heading: "Individuelles MMA-Training & Modern Self Defence",
    body: "Als Erweiterung meines ganzheitlichen Ansatzes biete ich individuelles MMA-Training und moderne Selbstverteidigung an - von den ersten Schritten bis zum eigenen Kampf-Style, angepasst an Ihre Ziele und Voraussetzungen.",
    points: [
      "MMA-Training für Einsteiger:innen & erfahrene Kämpfer:innen",
      "Modern Self Defence für Alltag und Ernstfall",
      "Individuell auf Ihre Ziele abgestimmt",
      "Selbstbewusstes Auftreten & Prävention",
      "Kraft, Kondition & Reaktionsschnelligkeit",
    ],
    cta: { label: "Mehr erfahren", href: "/mma" },
  },
  ctaBanner: {
    heading: "Bereit für den ersten Schritt?",
    body: "Vereinbaren Sie einen unverbindlichen Kennenlerntermin - gemeinsam finden wir heraus, wie ich Sie am besten unterstützen kann.",
    cta: { label: "Termin anfragen", href: "/kontakt" },
  },
};
