export interface ITransferenciaReq {
  token: string;
  amount: number;
  notes: string;
  userIdentifier: string;
}

export interface ITransferenciaRes {
  transactionType: string;
  token: string;
  walletFrom: string;
  walletTo: string;
  amount: number;
  user: string;
  notes: string;
  hash: string;
  id: string;
}
