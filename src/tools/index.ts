import { identity } from "fp-ts/function";

export * from "./capitalize";

export const return1 = identity;
export const return2 = <B>(_a: any, b: B): B => b;
export const return3 = <C>(_a: any, _b: any, c: C): C => c;
export const return4 = <D>(_a: any, _b: any, _c: any, d: D): D => d;
