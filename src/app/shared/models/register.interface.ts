export interface IRegister {
	shortName: string;
	lastName: string;
	userName: string;
	dni: number;
	cuil: number;
	pass: string;
	email: string;
	phoneNumber: number;
	avatar_url?: string;
	userId?: string;
	createdAt?: Date;
}
