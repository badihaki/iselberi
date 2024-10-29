import { atom } from "jotai";
import { IUser } from "../interfaces/IUser";

export const userAtom = atom<IUser>({
    username:"",
    email:"",
    password:""
})