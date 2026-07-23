import type { TherapieContent } from "../types";

export const therapy: TherapieContent = {
  hero: {
    eyebrow: "Therapy & Coaching",
    headline: "Sports Physiotherapy in Bavaria",
    subheadline:
      "Holistic sports physiotherapy and movement coaching for everyday life, rehab, and competitive sport — tailored to your body and your goals, near Munich, Germany.",
    primaryCta: { label: "Book a session", href: "/kontakt" },
    secondaryCta: { label: "Common questions", href: "/faq" },
  },
  intro: {
    heading: "What does holistic therapy mean?",
    body: "Pain and restricted movement rarely have just one cause. That's why I look beyond the affected joint or muscle to your posture, workload, stress levels, and movement habits. As a physiotherapist near Munich, I combine manual techniques with active movement therapy and mental coaching, so you experience relief in the short term and build lasting resilience over time.",
  },
  modalities: [
    {
      title: "Physiotherapy & Sports Physiotherapy",
      description:
        "Targeted, individually adapted exercises for optimal joint function, improved tendon and ligament stability, and muscle training for more strength and confidence in sport and everyday life.",
    },
    {
      title: "Massage & Manual Therapy (Osteopathic Principle)",
      description:
        "Optimizing venous, lymphatic, and arterial flow to support wound healing. Releasing nerve entrapment sites for better muscle activation and reduced nerve irritation.",
    },
    {
      title: "Nutrition & Training Plans",
      description:
        "A nutrition and training plan tailored to your life situation and long-term goals, so your therapy results last independently and for the long term.",
    },
  ],
  audience: {
    heading: "Who is this for?",
    items: [
      "Athletes in rehab after an injury",
      "People with chronic back or joint pain",
      "Professionals with a sedentary everyday routine",
      "Anyone looking to build mental and physical resilience",
    ],
  },
  process: [
    {
      title: "Assessment & Movement Analysis",
      description:
        "In our first session, we discuss your symptoms and goals and analyze your movement patterns together.",
    },
    {
      title: "A Personalized Treatment Plan",
      description:
        "Based on that, I put together a plan combining manual therapy, active movement, and mental coaching where helpful.",
    },
    {
      title: "Ongoing Support & Adjustment",
      description:
        "We regularly review your progress and adapt the plan as you develop.",
    },
  ],
  ctaBanner: {
    heading: "Let's talk about your situation",
    body: "In an initial conversation, we'll figure out which type of therapy is the right fit for you.",
    cta: { label: "Book an intro session", href: "/kontakt" },
  },
};
