export interface TransactionsListResponse {
  data: Datum[];
}

export interface Datum {
  id: string;
  type: Type;
  attributes: Attributes;
}

export interface Attributes {
  amount: string;
  created_at: Date;
  currency: Currency;
  currency_iso_code: Currency;
  gas: null;
  gas_price: null;
  from_address: null;
  to_address: null;
  fixed_cost: string;
  recipient_email: null;
  description: Description;
  source: Source;
  fee_type: FeeType;
  fee_value: string;
  local_currency: string;
  amount_local_currency: string;
  total_fee: string;
  total: string;
  total_in_default_currency: string;
  hash_result: null;
  status: Status;
  currency_to_default_currency_price: string;
  powwi_transaction_id: null;
  account_bank: null;
  favorite_account: null;
  gmf: string;
  iva: string;
  commission_cost: string;
  transaction_cost: string;
  spot_price: string;
  bonus_amount: null;
  bonus_percentage: null;
  bonus_type: null;
  total_in_exchange_currency: null | string;
  exchange_price: null | string;
  exchange_currency: Currency | null;
  purpose_comentary: null;
  sender_remaining_balance: string;
  user_device: null;
  category: Category;
  remaining_balance: number;
  sender_email: Email;
  recipient: Recipient;
  encrypt_id: string;
  category_translate: CategoryTranslate;
  invoices: null;
  coupon_user: null;
  coupon_transfer: null;
  network: null;
  reject_reason: null;
  is_favorite: null;
  payment_order: null;
}

export enum Category {
  Exchange = "exchange",
}

export enum CategoryTranslate {
  Cambios = "Cambios",
}

export enum Currency {
  Usd = "usd",
  Usdc = "usdc",
  Usdt = "usdt",
}

export enum Description {
  ExchangeUsdUsdc = "Exchange usd-usdc",
  ExchangeUsdUsdt = "Exchange usd-usdt",
  ExchangeUsdcUsdc = "Exchange usdc-usdc",
  ExchangeUsdtUsdt = "Exchange usdt-usdt",
}

export enum FeeType {
  Amount = "amount",
}

export interface Recipient {
  id: number;
  first_name: FirstName;
  last_name: LastName;
  email: Email;
}

export enum Email {
  ProspectoVitawalletIo = "prospecto@vitawallet.io",
  SoporteVitawalletIo = "soporte@vitawallet.io",
}

export enum FirstName {
  Prospecto = "Prospecto",
  VitaSolutions = "Vita Solutions",
}

export enum LastName {
  SPA = "SPA",
  Vita = "Vita",
}

export enum Source {
  Web = "Web",
}

export enum Status {
  Completed = "completed",
}

export enum Type {
  Transaction = "transaction",
}
