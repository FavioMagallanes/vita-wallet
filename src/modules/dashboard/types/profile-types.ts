export interface Relationships {
  country: Country;
  referrer: ProfileResponse;
}

export interface ProfileResponseData {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: Relationships;
}

export interface ProfileResponse {
  data: ProfileResponseData | null;
}

export interface Country {
  data: CountryData;
}

export interface CountryData {
  id: string;
  type: string;
}

export interface Attributes {
  email: string;
  created_at: Date;
  default_currency: string;
  first_name: string;
  last_name: string;
  birthdate: Date;
  document_type: string;
  document_number: string;
  document_expedition_date: Date;
  country_id: number;
  address: string;
  state_id: number;
  city: null;
  zipcode: string;
  profile_completed: boolean;
  accept_pep: boolean;
  accept_real_info: boolean;
  accept_funds: boolean;
  email_confirmed: boolean;
  account_bank: null;
  auto_convert_to_local_currency: boolean;
  second_factor: boolean;
  second_factor_confirmed: boolean;
  profile_verification: string;
  is_pin: boolean;
  referral_token: string;
  is_cashout: boolean;
  is_business_api: boolean;
  civil_status: string;
  phone: string;
  ocupation: string;
  gender: string;
  status: string;
  has_sent_transactions: boolean;
  intercom_hash: string;
  is_external_terms: boolean;
  is_sent_available: boolean;
  is_email_code_verification: boolean;
  first_transaction: boolean;
  source_biometric: string;
  status_valoration_transaction: string;
  rejected_note: null;
  category: string;
  payment_orders_service_status: string;
  secondary_document_type: null;
  secondary_document_number: null;
  is_usd_account: boolean;
  beneficiary_search_for_own_account: BeneficiarySearchForOwnAccount;
  login_current: Login;
  login_last: Login;
  country_name: string;
  state_name: string;
  residence_country_name: string;
  city_name: string;
  city_id: number;
  residence_country_id: number;
  document_issuing_country_id: number;
  document_issuing_country_name: string;
  iso_code_country: string;
  verification_code_expiration_time: number;
  balances: { [key: string]: number };
  document_image_url: string;
  back_document_image_url: null;
  facial_image_url: string;
  avatar: null;
  is_vita_card_available: boolean;
  vita_card_account_status: null;
  vita_cards: null;
  is_service_payment_available: boolean;
  coupon: null;
  biometric_verification: string;
  active_cryptos: ActiveCryptos;
  politically_exposed_person_check: boolean;
  politically_exposed_person: BeneficiarySearchForOwnAccount;
  reason_for_update: null;
  business_user: null;
  profile_update_alerted_date: null;
  default_fiat_currency: string;
  default_crypto_currency: null;
  bridge_customer_status: null;
  bridge_virtual_account_status: null;
  assigned_payment_order_providers: null;
}

export interface ActiveCryptos {
  btc: Btc;
  usdt: Btc;
  usdc: Usdc;
}

export interface Btc {
  addresses: BtcAddress[];
}

export interface BtcAddress {
  bsc: string;
}

export interface Usdc {
  addresses: UsdcAddress[];
}

export interface UsdcAddress {
  dummy: string;
}

export type BeneficiarySearchForOwnAccount = unknown;

export interface Login {
  country: string;
  city: string;
  created_at: Date;
  ip_address: string;
}
