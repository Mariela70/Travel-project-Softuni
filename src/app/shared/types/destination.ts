import { IUser } from "./user-id"

export interface Destination {
    _ownerId: string,
    userId: IUser,
    title: string,
    location: string,
    date: number,
    image: string,
    description: string
    likes: string[],
}