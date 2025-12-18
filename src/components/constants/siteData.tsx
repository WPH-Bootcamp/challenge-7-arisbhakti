export type NavItem = {
  label: string;
  href: string;
};

export type MetricItem = {
  value: string;
  label: string;
};

export type ProcessStep = {
  step: number;
  title: string;
  subtitle: string;
};

export type FaqItem = {
  id: string; // misal: "faq-1"
  question: string;
  answer: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const METRICS: MetricItem[] = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5+", label: "Years of Experience" },
  { value: "10+", label: "Industry Awards Won" },
  { value: "100%", label: "Client Satisfaction Rate" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Consultation",
    subtitle: "Understand Your Needs & Goals",
  },
  {
    step: 2,
    title: "Planning & Strategy",
    subtitle: "Build a Clear, Scalable Roadmap",
  },
  {
    step: 3,
    title: "Design & Prototyping",
    subtitle: "Craft UX That Converts",
  },
  {
    step: 4,
    title: "Development & Implementation",
    subtitle: "Deliver With Speed & Precision",
  },
  {
    step: 5,
    title: "Testing & Optimization",
    subtitle: "Ensure Quality at Every Step",
  },
  {
    step: 6,
    title: "Launch & Growth",
    subtitle: "Scale, Measure & Improve Continuously",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What services do you offer?",
    answer:
      "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
  },
  {
    id: "faq-2",
    question: "How do I know if this is right for my business?",
    answer:
      "Book a free consult — we’ll assess your goals and recommend the right approach.",
  },
  {
    id: "faq-3",
    question: "How much does a project cost?",
    answer:
      "Every project is different. Let’s talk about your needs to get a tailored estimate.",
  },
  {
    id: "faq-4",
    question: "How long does it take?",
    answer:
      "Depends on scope — but we always prioritize quality and deadlines.",
  },
  {
    id: "faq-5",
    question: "Can I start with a small project first?",
    answer: "Absolutely. We often begin with MVPs or pilot projects.",
  },
];
