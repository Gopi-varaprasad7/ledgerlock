import OverViewClient from './overview-client';
import { Metadata } from 'next';

export const meatadata: Metadata = {
  title: 'Overview - LedgerLock',
  description:
    'System integrity dashboard: total accounts, 24h volume, and the live double-entry transaction feed.',
  openGraph: {
    title: 'Overview — LedgerLock',
    description:
      'Live double-entry transaction feed and system integrity metrics.',
  },
};

export default function Page(){
  return <OverViewClient />;
}
