import {
  FAQ,
  ServiceSection,
  ServiceText,
  JoinSection,
  FinancialFuture,
} from '@/components';

export default function Home() {
  return (
    <main>
      <ServiceSection />
      <ServiceText />
      <FinancialFuture />
      <JoinSection />
      <FAQ />
    </main>
  );
}
