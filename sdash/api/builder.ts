import {
  Latesttransaction,
  Overviews,
  Supplies,
  TransactionLog,
} from "./../types/alltypes";
import { API } from "./axios-config";
import { createBuilder } from "@ibnlanre/portal";

export const builder = createBuilder({
  supplies: {
    fetch: API.get<Supplies>("/supplies/forecast"),
  },
  transactions: {
    latesttransaction: API.get<Latesttransaction>("/transactions/latest"),
    transactionLog: API.get<TransactionLog>("/transactions/payout-logs"),
    overviews: API.get<Overviews>("/transactions/overview"),
  },
});
