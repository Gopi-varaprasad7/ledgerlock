'use client';
import Link from 'next/link';
import { cn } from '@/lib/util';
import { usePathname } from 'next/navigation';

const NAV = [
  { href: '/', label: 'Overview' },
  { href: '/transfer', label: 'New transfer' },
  { href: '/transactions', label: 'Transactions' },
  { href: '/ledger', label: 'Ledger Audit' },
  { href: '/chaos', label: 'Chaos Test' },
] as const;

export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (path: string, exact = false) => {
    return exact ? pathname === path : pathname.startsWith(path);
  };
  return (
    <nav className='w-60 shrink-0 border-r border-hairline bg-panel flex flex-col '>
      <div className='p-6 border-b border-hairline'>
        <div className='text-[10px] font-mono font-medium tracking-[0.24em] uppercase text-ink-4'>
          LedgerLock
        </div>
        <div className='text-base font-medium mt-1 text-ink'>Engine v4.2</div>
      </div>
      <div>
        {NAV.map((item) => {
          const active = isActive(
            item.href,
            'exact' in item ? (item as any).exact : false,
          );
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center px-4 py-2 text-sm transition-colors rounded-md',
                active
                  ? 'bg-secondary text-ink font-medium'
                  : 'text-ink-4 hover:text-ink hover:bg-paper/60',
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className='p-6 border-b border-hairline'>
        <div className='flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-ink-4'>
          <span className='size-1.5 bg-status-ok'>System Synchronized</span>
        </div>
        <div className='mt-1 text-[10px] font-mono text-ink-4/70'>
          Region: india
        </div>
      </div>
    </nav>
  );
}
