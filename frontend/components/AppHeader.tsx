'use client';

import { usePathname } from 'next/navigation';

const CRUMBS: Record<string, string> = {
  '/': 'ROOT / OVERVIEW',
  '/transfer': 'ROOT / TRANSFERS / NEW',
  '/transactions': 'ROOT / TRANSACTIONS',
  '/leger': 'ROOT / ACCOUNTS / LEDGER',
  '/chaos': 'ROOT / SYSTEMS / CHAOS',
};

export function AppHeader() {
  const pathName = usePathname();

  const crumb =
    CRUMBS[pathName] ??
    (pathName.startsWith('/transactions')
      ? 'ROOT / TRANSACTIONS / DETAIL'
      : 'ROOT');
  return (
    <header className='h-14 border-b border-hairline bg-panel flex items-center justify-between px-8 shrink-0'>
      <span className='text-[11px] font-mono tracking-widest text-ink-4'>
        {crumb}
      </span>
      <div className='flex items-center gap-2'>
        <span className='size-1.5 bg-status-ok' />
        <span className='text-[10px] font-mono uppercase tracking-widest text-ink-4'>
          Engine: Operational
        </span>
        <span className='mx-3 h-4 w-px bg-hairline' />
        <span className='text-[10px] font-mono uppercase tracking-widest text-ink-4'>
          Build 4.2.118
        </span>
      </div>
    </header>
  );
}
