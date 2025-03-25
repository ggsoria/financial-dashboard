import { Currency } from "../utils/enums/currency";

export interface Sale {
    id: string;
    amount: number | null;
    currency: Currency; 
    date: string; 
    product: string; 
    customer_id: string; 
  }