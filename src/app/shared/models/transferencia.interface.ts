export interface ITransferenciaReq {
  token: string;
  amount: number;
  notes: string;
  userIdentifier: string;
}

export interface ITransferenciaRes {
  transactionType: ITransactionTypes;
  token: string;
  walletFrom: string;
  walletTo: string;
  amount: number;
  user: string;
  notes: string;
  hash: string;
  id: string;
}



export interface ITransactionTypes {
  name: string,
  _id: string
}