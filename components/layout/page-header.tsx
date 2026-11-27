export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-line py-16">
      <div className="mx-auto max-w-6xl px-6">
        {eyebrow && (
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl text-text-primary md:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-xl text-base text-text-secondary">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
