import { createContext } from "react";

export const countContext = createContext({
    count : 0,               //default value..
    setCount : ()=>{}         //default function..
});