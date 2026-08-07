import { ReactNode } from 'react';
import { AppHeader } from './AppHeader';
import { AppSidebar } from './AppSidebar';

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className='flex min-h-screen w-full bg-paper text-ink'>
      <AppSidebar />
        <main className="flex-1 flex flex-col min-w-0">
        <AppHeader />
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-6xl w-full mx-auto px-8 py-8">{children}</div>
        </div>
      </main>
    </div>
  );
}


export function SectionHeading({
  eyebrow,
  title,
  right,
}: {
  eyebrow?: string;
  title: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex items-end justify-between mb-4">
      <div>
        {eyebrow ? (
          <div className="text-[10px] font-mono uppercase tracking-widest text-ink-4 mb-1">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="text-sm font-semibold uppercase tracking-widest text-ink">{title}</h2>
      </div>
      {right}
    </div>
  );
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`bg-panel border border-hairline ${className}`}>{children}</div>;
}
