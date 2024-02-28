export interface Supplies {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url: null;
  prev_page_url: null;
  count: number;
  data: SupplyData[];
}

export interface SupplyData {
  actual_value: number;
  forecasted_value: number;
  name: string;
  q1_variance: number;
  q2_variance: number;
  q3_variance: number;
  q4_variance: number;
}

export interface Latesttransaction {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url: null;
  prev_page_url: null;
  count: number;
  data: Date[];
}

export interface Date {
  created_at: string;
  charged_by: ChargedBy;
  charge: Charge;
}

export interface Charge {
  amount: number;
  currency: Currency;
  type: string;
}

export interface Currency {
  code: string;
  sign: string;
}

export interface ChargedBy {
  company: string;
  logo: string;
}

export interface TransactionLog {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url: null;
  prev_page_url: null;
  count: number;
  data: Log[];
}

export interface Log {
  date: Date;
  salary_paid: number;
  cash_bond_bought: number;
}

export interface Overviews {
  message: string;
  current_page: number;
  page_size: number;
  next_page_url: null;
  prev_page_url: null;
  count: number;
  data: Views[];
}

export interface Views {
  name: string;
  current: number;
  last_month: number;
}
