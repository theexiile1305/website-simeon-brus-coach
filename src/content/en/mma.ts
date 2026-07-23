import type { MmaContent } from "../types";

export const mma: MmaContent = {
  hero: {
    eyebrow: "MMA Training & Modern Self Defence",
    headline: "MMA Training & Modern Self Defence in Bavaria",
    subheadline:
      "Individually tailored MMA training and modern self-defense - from your first session to experienced fighter, always adapted to your goals and starting point.",
    primaryCta: { label: "Request an intro session", href: "/kontakt" },
    secondaryCta: { label: "Common questions", href: "/faq" },
  },
  intro: {
    heading: "Two paths, one personalized program",
    body: "Whether you're developing your own fighting style in MMA or want to feel safer in everyday life, every session is built around you and continuously adapted to your goals and starting point.",
  },
  training: {
    heading: "MMA Training",
    body: "A complex training program combining elements from boxing, kickboxing, Muay Thai, wrestling, BJJ, judo, taekwondo, and MMA-specific cage-and-wall work - above all, the fluid, complementary transition between these disciplines, building an MMA fighter and fighting style shaped around your own strengths.",
    styles: [
      "Boxing",
      "Kickboxing",
      "Muay Thai",
      "Wrestling",
      "BJJ",
      "Judo",
      "Taekwondo",
      "MMA-specific cage-and-wall work",
    ],
    conditioning: [
      {
        title: "Speed & Explosive Power",
        description:
          "Targeted training for explosive movement and fast reactions in a fight.",
      },
      {
        title: "Targeted Muscle Building",
        description:
          "Individually tailored, including with an eye on weight classes where relevant.",
      },
      {
        title: "Endurance & Lactate Training",
        description:
          "Building the conditioning to hold up over the full length of a fight.",
      },
      {
        title: "Reaction Speed & Conditioning",
        description:
          "Speed and physical resilience are trained in a targeted way.",
      },
    ],
  },
  selfDefence: {
    heading: "Modern Self Defence",
    body: "Learning the absolute basics of fighting, and above all how to defend yourself accurately - on your feet as well as on the ground. Unlike competitive combat sports or traditional martial arts, the focus here is on:",
    focusPoints: [
      "Short, uncomplicated actions",
      "Coping with extreme stress",
      "Dealing with multiple opponents",
      "Dealing with potentially armed opponents",
      "Confident presence (prevention)",
      "Fighting without seriously injuring yourself in the process",
      "Perceiving and using your surroundings in a fight",
      "Escaping holds and grips",
      "Possible use of legal self-defense tools",
    ],
  },
  audience: {
    heading: "Who is this training for?",
    intro:
      "Every session is set up individually for the person training and continuously adapted - always with an eye on the goals and starting point someone brings with them.",
    scenarios: [
      {
        title: "Students",
        description:
          "More confidence and a safer feeling on the way home from school.",
      },
      {
        title: "Women",
        description: "Feeling safer even when taking the last train home.",
      },
      {
        title: "Security Staff & Police",
        description:
          "For situations where you reach your limits in confrontations against armed or numerically superior groups.",
      },
      {
        title: "MMA Beginners & Experienced Fighters",
        description:
          "Simply get started with MMA and develop your skills, push your limits - or get individually optimized training as an experienced fighter.",
      },
    ],
    cta: "Get in touch and let's set up a personalized, targeted training program!",
  },
  ctaBanner: {
    heading: "Curious to see how it feels?",
    body: "Get in touch and let's set up a personalized, targeted training program - matched to your goals and level.",
    cta: { label: "Get in touch", href: "/kontakt" },
  },
};
