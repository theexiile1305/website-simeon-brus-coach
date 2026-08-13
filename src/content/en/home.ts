import type { HomeContent } from "../types";

export const home: HomeContent = {
  hero: {
    eyebrow: "Simeon Brus · Holistic Therapy & Coaching in Bavaria",
    headline:
      "Holistic Therapy & Coaching for a Healthier, Higher-Performing Life.",
    subheadline:
      "I combine every part of my training - physiotherapy, nutrition, mental coaching, and martial arts - into one training and therapy concept, built individually around you and your goals.",
    primaryCta: { label: "Book a session", href: "#kontakt" },
    secondaryCta: { label: "Explore therapy & coaching", href: "#therapie" },
  },
  therapyIntro: {
    eyebrow: "Therapy & Coaching",
    heading: "Body, Nutrition, and Mind as One System",
    body: "I help people across Bavaria understand their pain, improve how they move, and stay resilient over the long term. My approach combines evidence-based physiotherapy with nutrition and mental coaching — health that doesn't just help in the moment, but holds up over time.",
  },
  therapyServices: [
    {
      title: "Sports Physiotherapy",
      description:
        "Individualized treatment for musculoskeletal issues and structured movement rehab after injury.",
    },
    {
      title: "Manual Therapy & Movement Coaching",
      description:
        "Hands-on techniques and personalized movement coaching for better mobility, strength, and body awareness.",
    },
    {
      title: "Nutrition & Lifestyle Coaching",
      description:
        "Holistic guidance on nutrition, recovery, and everyday habits — tailored to your goals.",
    },
  ],
  benefits: {
    heading: "My Philosophy: Your Success Comes First",
    intro:
      "I see my work as a long-term partnership — it's not about quick relief, it's about understanding your body, trusting it, and staying healthy and capable for the long run. Four principles guide that work:",
    items: [
      {
        title: "Personalized Care",
        description:
          "Every treatment and coaching plan is tailored precisely to your situation, goals, and body.",
      },
      {
        title: "A Holistic Approach",
        description:
          "Body, nutrition, and mental health are treated as one system, not in isolation.",
      },
      {
        title: "Lasting Results",
        description:
          "The focus is on long-term health and performance, not quick, short-lived fixes.",
      },
      {
        title: "Evidence-Based",
        description:
          "Every method is grounded in current physiotherapy and sports-science research.",
      },
    ],
  },
  about: {
    eyebrow: "About Simeon Brus",
    heading: "Your Partner in Health and Performance",
    body: [
      "As a physiotherapist with advanced training in sports physiotherapy, I've spent over a decade helping people across Bavaria understand their symptoms, recover sustainably, and build lasting performance.",
      "My approach is deliberately holistic: therapy, nutrition, and mental coaching work together rather than in isolation. That same view of body and mind as one system carries into my work coaching MMA training and modern self-defense. I've been running my own practice independently since 2020.",
    ],
    highlights: [
      "10+ years of experience",
      "Independent since 2020",
      "Physiotherapist",
      "A holistic approach",
      "Sports Physiotherapy (DOSB Basic Certification)",
      "Sectoral Alternative-Practitioner License, Physiotherapy",
      "Nutrition & Fasting Concepts",
    ],
  },
  performanceTeaser: {
    eyebrow: "MMA Training & Self-Defense",
    heading: "Personalized MMA Training & Modern Self Defence",
    body: "As an extension of my holistic approach, I offer personalized MMA training and modern self-defense - from your first steps to your own fighting style, adapted to your goals and starting point.",
    points: [
      "MMA training for beginners & experienced fighters",
      "Modern Self Defence for everyday life and real situations",
      "Tailored to your individual goals",
      "Confident presence & prevention",
      "Strength, conditioning & reaction speed",
    ],
    cta: { label: "Learn more", href: "#kontakt" },
  },
};
