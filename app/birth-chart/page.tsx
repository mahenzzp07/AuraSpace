import { PageHeader } from '@/components/layout/page-header';

export default function BirthChartPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <PageHeader
        eyebrow="Natal map"
        title="Birth Chart"
        description="Enter your birth date, time and place to map the sky."
      />
      <div className="py-16">
        <p className="text-text-secondary">Chart wheel coming next.</p>
      </div>
    </div>
  );
}
