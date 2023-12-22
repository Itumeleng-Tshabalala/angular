export interface IUser {
    id: string;
    name: string;
    surname: string;
    email: string;
    phone: string;
    emailVerified: boolean;
    lastLoggedIn: Date;
    createdOn: Date;
    updatedOn: Date;
    identityNumber: string;
    imageUrl: string;
}