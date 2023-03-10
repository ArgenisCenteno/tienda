import { IUser } from './';

export interface IOrder {

    _id? : string;
    user?: IUser | string;
    orderItems: IOrderItem[];
    shippingAddress: ShippingAddress;
    paymentResult?: string;

    numberOfItems: number;
    subTotal     : number;
    tax          : number;
    total        : number;

    isPaid  : boolean;
    paidAt? : string;

    transactionId?: string;
    status: string;

    createdAt?: string;
    updatedAt?: string;
}


export interface IOrderItem {
    _id      : string;
    title    : string;
    quantity : number;
    slug     : string;
    image    : string;
    price    : number;
    category   : string;
}


export interface ShippingAddress {
    firstName: string;
    lastName : string;
    address  : string;
    address2?: string;
    zip      : string;
    city     : string;
    country  : string;
    phone    : string;
}