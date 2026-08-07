'use client';

import { AppShell, Panel, SectionHeading } from '@/components/AppShell';
import { ACCOUNTS, computeCurrentBalance } from '@/lib/mock-data';

export default function OverViewClient() {
  return (
    <AppShell>
      <div
        className='flex mb-8  items-end justify-around
            '
      >
        <div>
          <div className='mb-1 text-[10px] font-mono uppercase tracking-widest text-ink-4'>
            System Integrity Dashboard
          </div>
          <h1 className='text-2xl font-medium text-ink'>
            Primary Operational Ledger
          </h1>
        </div>
      </div>

      {/* <div className='mb-10 grid grid-cols-4 gap-4'>
        <Kpi
          label='Total Managed Accounts'
          value={ACCOUNTS.length.toString().padStart(2, '0')}
        />
        <Kpi label='Asset Reserves' value={formatUsd(totalAssets)} />
        <Kpi label='Transactions Recorded' value={txs.length.toString()} />
        <Kpi
          label='Pending Reconciliations'
          value={pending.toString().padStart(2, '0')}
        />
      </div> */}

      <SectionHeading
        title='Live Transaction Log'
        eyebrow='Double-entry pairs — every debit matched to a credit'
        right={
          <span className='border border-hairline px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-ink-4'>
            Real-time Feed
          </span>
        }
      />

      <Panel>
        <div className='hidden gap-4 border-b border-hairline bg-secondary/50 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-ink-4 md:flex items-center'>
          <div className='w-6 shrink-0' />
          <div className='w-14 shrink-0'>Side</div>
          <div className='w-40 shrink-0'>Account</div>
          <div className='flex-1'>Memo / Timestamp</div>
          <div className='w-32 shrink-0 text-right'>Amount</div>
          <div className='w-24 shrink-0 text-right'>Status</div>
        </div>

        {/* <div className="divide-y divide-hairline">
          {txs.slice(0, 8).map((tx) => (
            <JournalPair key={tx.id} tx={tx} />
          ))}
        </div> */}
      </Panel>
    </AppShell>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className='border border-hairline bg-panel p-4'>
      <div className='mb-3 text-[10px] font-mono uppercase tracking-widest text-ink-4'>
        {label}
      </div>
      <div className='tabular font-mono text-xl text-ink'>{value}</div>
    </div>
  );
}
