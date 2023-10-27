import { UserType } from "../user.model";

export interface RegisterRequest {
    email:string;
    userName: string;
    fullName: string;
    password: string;
    userType: UserType;
}
