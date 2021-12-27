import { IActivo } from "./activo.interface";

export interface IWallet {
    total: number;
    balances: IBalances[];
}

export interface IBalances {
    amount: number;
    tokenId: IActivo;
}
