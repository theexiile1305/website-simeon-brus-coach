import type { TherapieContent } from "../types";

export const therapie: TherapieContent = {
  hero: {
    eyebrow: "Physiotherapie & Coaching",
    headline: "Physiotherapie Traubing & Starnberg",
    subheadline:
      "Ganzheitliche Sportphysiotherapie und Bewegungscoaching für Alltag, Reha und Leistungssport - individuell abgestimmt auf Ihren Körper und Ihre Ziele.",
    primaryCta: { label: "Termin vereinbaren", href: "/kontakt" },
    secondaryCta: { label: "Häufige Fragen", href: "/faq" },
  },
  intro: {
    heading: "Was bedeutet ganzheitliche Therapie?",
    body: "Schmerzen und Bewegungseinschränkungen haben selten nur eine Ursache. Deshalb betrachte ich nicht nur das betroffene Gelenk oder den schmerzenden Muskel, sondern auch Haltung, Belastung, Stresslevel und Bewegungsgewohnheiten. Als Physiotherapeut in Traubing bei Starnberg kombiniere ich manuelle Techniken mit aktiver Bewegungstherapie und mentalem Coaching, damit Sie nicht nur kurzfristig Linderung erfahren, sondern langfristig belastbarer werden.",
  },
  modalities: [
    {
      title: "Physiotherapie & Sportphysiotherapie",
      description:
        "Gezielte und individuell angepasste Übungen für optimale Gelenkfunktion, verbesserte Stabilität über Sehnen und Bänder sowie Muskeltraining für mehr Kraft und Sicherheit im Sport und Alltag.",
    },
    {
      title: "Massage & Manuelle Therapie (nach osteopathischem Prinzip)",
      description:
        "Optimierung der venösen, lymphatischen und arteriellen Ver- und Entsorgung für eine optimierte Wundheilung. Befreiung von Nerven-Durchtrittstellen für eine bessere Ansteuerung der Muskeln und Reduktion nervaler Irritationen.",
    },
    {
      title: "Ernährungs- und Trainingspläne",
      description:
        "Ein individuell auf Ihre Lebenssituation und Langzeitziele abgestimmtes Ernährungs- und Trainingsschema, damit Sie Ihre Therapieerfolge selbständig und langfristig erhalten.",
    },
  ],
  audience: {
    heading: "Für wen ist das geeignet?",
    items: [
      "Sportler:innen in Reha nach Verletzungen",
      "Menschen mit chronischen Rücken- oder Gelenkbeschwerden",
      "Berufstätige mit bewegungsarmem Alltag",
      "Alle, die mentale und körperliche Belastbarkeit aufbauen möchten",
    ],
  },
  process: [
    {
      title: "Anamnese & Bewegungsanalyse",
      description:
        "Im ersten Termin besprechen wir Ihre Beschwerden, Ihre Ziele und analysieren gemeinsam Ihr Bewegungsmuster.",
    },
    {
      title: "Individueller Behandlungsplan",
      description:
        "Darauf aufbauend erstelle ich einen Plan aus manueller Therapie, aktiver Bewegung und ggf. mentalem Coaching.",
    },
    {
      title: "Begleitung & Anpassung",
      description:
        "Wir überprüfen regelmäßig Ihre Fortschritte und passen die Therapie an Ihre Entwicklung an.",
    },
  ],
  ctaBanner: {
    heading: "Lassen Sie uns Ihre Situation besprechen",
    body: "In einem ersten Gespräch klären wir, welche Form der Therapie zu Ihnen passt.",
    cta: { label: "Kennenlerntermin vereinbaren", href: "/kontakt" },
  },
};
