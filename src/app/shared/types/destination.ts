import { IUser } from "./user-id"

export interface Destination {
    _ownerId: string,
    userId: IUser,
    _id: string,
    title: string,
    location: string,
    date: number,
    imageUrl: string,
    description: string
}