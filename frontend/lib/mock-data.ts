export type AccountType =
  | 'asset'
  | 'liability'
  | 'revenue'
  | 'expense'
  | 'equity';

export interface Account {
  id: string;
  name: string;
  type: AccountType;
  openingBalance: number;
}

export type TxStatus = 'settled' | 'pending' | 'flagged';

export interface Transaction {
  id: string;
  timestamp: string; // ISO UTC
  idempotencyKey: string;
  memo: string;
  status: TxStatus;
  debitAccountId: string;
  creditAccountId: string;
  amount: number; // positive; debit = -amount on debit acct, credit = +amount on credit acct
  hash: string;
}

export const ACCOUNTS: Account[] = [
  {
    id: 'ACC_OPER_992',
    name: 'Operating Treasury',
    type: 'asset',
    openingBalance: 4_820_000,
  },
  {
    id: 'ACC_REVE_001',
    name: 'Revenue Recognition',
    type: 'revenue',
    openingBalance: 0,
  },
  {
    id: 'ACC_USER_415',
    name: 'User Wallet — 0x415…',
    type: 'liability',
    openingBalance: 120_000,
  },
  {
    id: 'ACC_VAULT_01',
    name: 'Escrow Vault 01',
    type: 'asset',
    openingBalance: 2_400_000,
  },
  {
    id: 'ACC_ESCR_204',
    name: 'Merchant Escrow #204',
    type: 'liability',
    openingBalance: 82_500,
  },
  {
    id: 'ACC_FEES_010',
    name: 'Platform Fees',
    type: 'revenue',
    openingBalance: 0,
  },
];

// Deterministic seed transactions. Order: oldest first.
export const SEED_TX: Transaction[] = [
  {
    id: 'TX_611A_K',
    timestamp: '2026-07-27T09:14:02Z',
    idempotencyKey: 'LLOCK-ID-611A-9F02-C1D9',
    memo: 'Merchant settlement — order #48221',
    status: 'settled',
    debitAccountId: 'ACC_ESCR_204',
    creditAccountId: 'ACC_OPER_992',
    amount: 12_480.5,
    hash: '0x9f8e3b2141ac7d9e',
  },
  {
    id: 'TX_612B_M',
    timestamp: '2026-07-27T14:22:18Z',
    idempotencyKey: 'LLOCK-ID-612B-4410-PQ88',
    memo: 'Platform fee accrual — SaaS #441',
    status: 'settled',
    debitAccountId: 'ACC_OPER_992',
    creditAccountId: 'ACC_FEES_010',
    amount: 1_250.0,
    hash: '0x2c1140abfe93d011',
  },
  {
    id: 'TX_713C_R',
    timestamp: '2026-07-28T02:41:55Z',
    idempotencyKey: 'LLOCK-ID-713C-2001-XJ92',
    memo: 'Wallet deposit — user 0x415…',
    status: 'settled',
    debitAccountId: 'ACC_OPER_992',
    creditAccountId: 'ACC_USER_415',
    amount: 4_500.0,
    hash: '0x81b9202fa1cc00e2',
  },
  {
    id: 'TX_772A_X',
    timestamp: '2026-07-28T11:02:11Z',
    idempotencyKey: 'LLOCK-ID-772A-8812-XJ92',
    memo: 'Revenue recognition — Enterprise Plan #441',
    status: 'settled',
    debitAccountId: 'ACC_OPER_992',
    creditAccountId: 'ACC_REVE_001',
    amount: 3_120.0,
    hash: '0x4a01de88b32c119a',
  },
  {
    id: 'TX_814D_S',
    timestamp: '2026-07-28T16:47:39Z',
    idempotencyKey: 'LLOCK-ID-814D-A9B1-2200',
    memo: 'Refund — order #48119',
    status: 'flagged',
    debitAccountId: 'ACC_REVE_001',
    creditAccountId: 'ACC_USER_415',
    amount: 240.0,
    hash: '0xbb0e441128ac0f92',
  },
  {
    id: 'TX_918B_C',
    timestamp: '2026-07-29T08:14:02Z',
    idempotencyKey: 'LLOCK-ID-918B-77F0-8812',
    memo: 'Escrow loading — LK-21',
    status: 'pending',
    debitAccountId: 'ACC_OPER_992',
    creditAccountId: 'ACC_VAULT_01',
    amount: 84_200.0,
    hash: '0x1188e2a0cc4419fa',
  },
  {
    id: 'TX_921E_Q',
    timestamp: '2026-07-29T10:03:22Z',
    idempotencyKey: 'LLOCK-ID-921E-3311-A0F2',
    memo: 'Wallet withdrawal — user 0x415…',
    status: 'settled',
    debitAccountId: 'ACC_USER_415',
    creditAccountId: 'ACC_OPER_992',
    amount: 620.0,
    hash: '0x2ef01a889c1200b3',
  },
  {
    id: 'TX_929F_H',
    timestamp: '2026-07-29T11:41:07Z',
    idempotencyKey: 'LLOCK-ID-929F-88C1-4488',
    memo: 'Fee accrual — Merchant #204',
    status: 'settled',
    debitAccountId: 'ACC_ESCR_204',
    creditAccountId: 'ACC_FEES_010',
    amount: 88.25,
    hash: '0xa9c231fd0e8813bb',
  },
  {
    id: 'TX_931G_L',
    timestamp: '2026-07-29T12:17:44Z',
    idempotencyKey: 'LLOCK-ID-931G-11E2-77CC',
    memo: 'Vault → Treasury sweep',
    status: 'settled',
    debitAccountId: 'ACC_VAULT_01',
    creditAccountId: 'ACC_OPER_992',
    amount: 40_000.0,
    hash: '0x77c0122abfe0e991',
  },
  {
    id: 'TX_940H_T',
    timestamp: '2026-07-29T13:02:11Z',
    idempotencyKey: 'LLOCK-ID-940H-9910-2213',
    memo: 'Merchant settlement — order #48311',
    status: 'pending',
    debitAccountId: 'ACC_ESCR_204',
    creditAccountId: 'ACC_OPER_992',
    amount: 2_310.75,
    hash: '0x0e88c11fe2a99b02',
  },
];

export function getAccount(id: string): Account | undefined {
  return ACCOUNTS.find((a) => a.id === id);
}

export interface LedgerEntry {
  txId: string;
  timestamp: string;
  memo: string;
  debit: number; // > 0 if this account was debited
  credit: number; // > 0 if this account was credited
  balance: number;
}

export function computeLedgerEntries(
  accountId: string,
  txs: Transaction[],
): LedgerEntry[] {
  const acct = getAccount(accountId);
  if (!acct) return [];
  const sorted = [...txs].sort((a, b) =>
    a.timestamp.localeCompare(b.timestamp),
  );
  let balance = acct.openingBalance;
  const entries: LedgerEntry[] = [];
  for (const tx of sorted) {
    if (tx.debitAccountId !== accountId && tx.creditAccountId !== accountId)
      continue;
    const isDebit = tx.debitAccountId === accountId;
    // Convention: for asset accounts, debit increases balance; for liability/revenue, credit increases.
    // Simplify for demo: debit reduces balance of the debited side, credit increases balance of the credited side.
    // We'll show the raw movement: debit column = amount out of this account, credit column = amount into.
    const debit = isDebit ? tx.amount : 0;
    const credit = !isDebit ? tx.amount : 0;
    balance = balance - debit + credit;
    entries.push({
      txId: tx.id,
      timestamp: tx.timestamp,
      memo: tx.memo,
      debit,
      credit,
      balance,
    });
  }
  return entries;
}

export function computeCurrentBalance(
  accountId: string,
  txs: Transaction[],
): number {
  const entries = computeLedgerEntries(accountId, txs);
  return entries.length
    ? entries[entries.length - 1].balance
    : (getAccount(accountId)?.openingBalance ?? 0);
}
