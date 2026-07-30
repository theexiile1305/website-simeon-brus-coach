import type { HomeContent } from "../types";
import { faq } from "./faq";

export const home: HomeContent = {
  hero: {
    eyebrow: "Simeon Brus · Holistic Therapy & Coaching in Bavaria",
    headline:
      "Holistic Therapy & Coaching for a Healthier, Higher-Performing Life.",
    subheadline:
      "Personalized programs combining physiotherapy, sports physiotherapy, manual therapy, nutrition, and coaching — for lasting health, recovery, and personal growth.",
    primaryCta: { label: "Book a session", href: "/kontakt" },
    secondaryCta: { label: "Explore therapy & coaching", href: "/therapie" },
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
      href: "/therapie",
    },
    {
      title: "Manual Therapy & Movement Coaching",
      description:
        "Hands-on techniques and personalized movement coaching for better mobility, strength, and body awareness.",
      href: "/therapie",
    },
    {
      title: "Nutrition & Lifestyle Coaching",
      description:
        "Holistic guidance on nutrition, recovery, and everyday habits — tailored to your goals.",
      href: "/therapie",
    },
  ],
  benefits: {
    heading: "Why Holistic Therapy & Coaching?",
    intro: "Four principles that guide my work with you.",
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
      "As a state-certified physiotherapist with advanced training in sports physiotherapy, I've spent over a decade helping people across Bavaria understand their symptoms, recover sustainably, and build lasting performance.",
      "My approach is deliberately holistic: therapy, nutrition, and mental coaching work together rather than in isolation. That same view of body and mind as one system carries into my work coaching MMA training and modern self-defense. I've been running my own practice independently since 2020.",
    ],
    highlights: [
      "10+ years of experience",
      "Independent since 2020",
      "State-certified physiotherapist",
      "A holistic approach",
    ],
  },
  qualifications: {
    heading: "Qualifications & Expertise",
    intro:
      "Knowledge from my training, further education, and continuing education, combined to help people holistically and for the long term.",
    items: [
      {
        title: "Physiotherapy",
        description: "Vocational Training",
      },
      {
        title: "Sports Physiotherapy (DOSB Basic Certification)",
        description:
          "German Olympic Sports Confederation basic certification in sports physiotherapy.",
      },
      {
        title: "Manual Therapy",
        description: "Based on the osteopathic concept.",
      },
      {
        title: "CMD & Atlas-Axis Therapy",
        description: "Jaw manual therapy (CMD) and atlas-axis therapy.",
      },
      {
        title: "Athletic Trainer",
        description: "Supporting athletes through training and competition.",
      },
      {
        title: "Chiropractic",
        description: "Manual techniques for joint treatment.",
      },
      {
        title: "Dry Needling",
        description:
          "Targeted needling technique for treating myofascial trigger points.",
      },
      {
        title: "Masseur & Certified Medical Bath Attendant",
        description: "State-recognized qualification.",
      },
      {
        title: "Medical Flossing & Taping",
        description:
          "Compression and taping techniques to support mobility and recovery.",
      },
      {
        title: "Nutrition & Fasting Concepts",
        description: "Personalized nutrition guidance and fasting concepts.",
      },
      {
        title:
          "Sectoral Alternative-Practitioner (Heilpraktiker) License, Physiotherapy",
        description:
          "Extended alternative-practitioner license for the physiotherapy scope.",
      },
    ],
  },
  philosophy: {
    heading: "My Philosophy: Your Success Comes First",
    body: "I see my work as a long-term partnership. It's not about quick relief — it's about understanding your body, trusting it, and staying healthy and capable for the long run.",
    pillars: [
      {
        title: "Personalized",
        description: "Every plan is as unique as the person it's built for.",
      },
      {
        title: "Sustainable",
        description:
          "Success shows up not just today, but a year from now too.",
      },
      {
        title: "Holistic",
        description:
          "Body, nutrition, and mental health are considered together.",
      },
    ],
  },
  faqTeaser: {
    heading: "Frequently Asked Questions",
    intro:
      "Answers to the most common questions about therapy, coaching, and scheduling.",
    entries: [faq.entries[0], faq.entries[1], faq.entries[3], faq.entries[4]],
    cta: { label: "View all FAQs", href: "/faq" },
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
    cta: { label: "Learn more", href: "/mma" },
  },
  ctaBanner: {
    heading: "Ready to take the first step?",
    body: "Book a no-obligation introductory session — together we'll figure out how I can support you best.",
    cta: { label: "Request a session", href: "/kontakt" },
  },
};
