import { PageHeader } from '@/components/layout/page-header';

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <PageHeader
        eyebrow="Your account"
        title="Profile"
        description="Your sign, saved readings and coin balance live here."
      />
      <div className="py-16">
        <p className="text-text-secondary">Profile settings coming next.</p>
      </div>
    </div>
  );
}
