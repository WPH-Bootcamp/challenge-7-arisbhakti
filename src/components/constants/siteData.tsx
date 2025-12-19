export type NavItem = {
  label: string;
  href: string;
};

export type MetricItem = {
  value: string;
  label: string;
};

export type ProcessStep = {
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
    title: "Discovery & Consultation",
    subtitle: "Understand Your Needs & Goals",
  },
  {
    title: "Planning & Strategy",
    subtitle: "Build a Clear, Scalable Roadmap",
  },
  {
    title: "Design & Prototyping",
    subtitle: "Craft UX That Converts",
  },
  {
    title: "Development & Implementation",
    subtitle: "Deliver With Speed & Precision",
  },
  {
    title: "Testing & Optimization",
    subtitle: "Ensure Quality at Every Step",
  },
  {
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
export type TrustedLogo = {
  name: string;
  src: string;
};

export const TRUSTED_LOGOS: TrustedLogo[] = [
  { name: "Adobe", src: "/images/company-logo/adobe.svg" },
  { name: "Airbnb", src: "/images/company-logo/airbnb.svg" },
  { name: "Databricks", src: "/images/company-logo/databricks.svg" },
  { name: "Dropbox", src: "/images/company-logo/dropbox.svg" },
  { name: "Netflix", src: "/images/company-logo/netflix.svg" },
  { name: "PayPal", src: "/images/company-logo/paypal.svg" },
  { name: "Postman", src: "/images/company-logo/postman.svg" },
  { name: "Upwork", src: "/images/company-logo/upwork.svg" },
  { name: "Zoom", src: "/images/company-logo/zoom.svg" },
];

export type SolutionItem = {
  title: string;
  description: string;
  image: string;
};

export const SOLUTIONS: SolutionItem[] = [
  {
    title: "Web Development",
    description: "Build fast, scalable, and SEO-friendly websites.",
    image: "/images/solutions/web.svg",
  },
  {
    title: "Mobile App Development",
    description: "Native & cross-platform apps tailored to user needs.",
    image: "/images/solutions/mobile.svg",
  },
  {
    title: "UI/UX Design",
    description: "Delight users with intuitive and beautiful interfaces.",
    image: "/images/solutions/ui.svg",
  },
  {
    title: "Cloud Solutions",
    description: "Build fast, scalable, and SEO-friendly websites.",
    image: "/images/solutions/cloud.svg",
  },
  {
    title: "Software Development",
    description: "Custom solutions built around your business logic.",
    image: "/images/solutions/software.svg",
  },
  {
    title: "IT Infrastructure",
    description: "Scale your backend with reliable tech foundations.",
    image: "/images/solutions/infrastructure.svg",
  },
  {
    title: "Cybersecurity Services",
    description: "Stay protected with enterprise-grade security.",
    image: "/images/solutions/cybersecurity.svg",
  },
  {
    title: "QA Solutions",
    description: "Ensure performance with rigorous testing frameworks.",
    image: "/images/solutions/qa.svg",
  },
  {
    title: "IT Consulting & Support",
    description: "Make smarter tech decisions with expert guidance.",
    image: "/images/solutions/consulting.svg",
  },
];

export type IndustryItem = {
  key: "fintech" | "ecommerce" | "healthcare";
  label: string;
  description: string;
  image: string;
};

export const INDUSTRIES: IndustryItem[] = [
  {
    key: "fintech",
    label: "Fintech",
    description:
      "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
    image: "/images/industry/fintech.svg",
  },
  {
    key: "ecommerce",
    label: "E-Commerce",
    description:
      "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
    image: "/images/industry/e-commerce.svg",
  },
  {
    key: "healthcare",
    label: "Healthcare",
    description:
      "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
    image: "/images/industry/healthcare.svg",
  },
];
