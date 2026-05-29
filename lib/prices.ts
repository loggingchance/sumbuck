import type { PriceTable } from "./types";

export const DEFAULT_PRICES: PriceTable = {
  slicer_veneer: 1400,
  rotary_veneer: 1000,
  prime_plus_sawlog: 950,
  prime_sawlog: 775,
  select_sawlog: 625,
  number_1_sawlog: 525,
  number_2_sawlog: 200,
  number_3_sawlog: 150,
  pallet_log: 95
};

export const PRICE_STORAGE_KEY = "sumbuck-prices-by-species-v1";
export const LOG_LIBRARY_STORAGE_KEY = "hardwood-buck-trainer-practice-logs-v5";
