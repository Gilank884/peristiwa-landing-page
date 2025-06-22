type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'How do I create my agenda or branding in PERISTIWA?',
    answer:
      'Create a seamless event experience with PERISTIWA’s expertise, trusted partnerships, and affordable solutions, all tailored to your vision.',
  },
  {
    question: 'How does PERISTIWA ensure the safety and privacy of my event details?',
    answer:
      'PERISTIWA ensures the safety and privacy of your event details through secure data encryption, trusted vendor partnerships, and strict access controls, protecting your information at every step.',
  },
  {
    question: 'What types of event-related services can I access with PERISTIWA?',
    answer:
      'With PERISTIWA, you can access services like event planning, vendor coordination, custom website development, and attendee management, all tailored to your vision.',
  },
  {
    question: 'Can PERISTIWA create a website for my event or branding?',
    answer:
      'Yes, PERISTIWA offers cutting-edge web development services to create custom, user-friendly websites that promote your event, streamline registrations, and enhance guest engagement.',
  },
];
