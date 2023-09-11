import * as predicate from "fp-ts/Predicate";
import * as AssertsT from "../AssertsT";
import * as newtype from "./newtype";

export type IsNagetive<
  N extends number,
  T = true,
  F = false,
> = `${N}` extends `-${number}` ? T : F;
export type IsNonZero<
  N extends number,
  T = true,
  F = false,
> = `${N}` extends "0" ? F : T;
export type IsPositive<N extends number, T = true, F = false> = IsNonZero<
  N,
  IsNagetive<N, F, T>,
  F
>;
export type IsInteger<
  N extends number,
  T = true,
  F = false,
> = `${N}` extends `${number}.${number}` ? F : T;

export type CompareIsPositive<
  N extends [number, number],
  NRA = IsPositive<N[0]>,
  NRB = IsPositive<N[1]>,
> = TypeUtil.Extend<
  NRA,
  NRB,
  TypeUtil.Extend<NRA, true, "both", "bothLeft">,
  TypeUtil.Extend<NRA, true, "left", "right">
>;

export type GuardInteger<N extends number> = IsInteger<
  N,
  N,
  Newtypes.Left<Integer<N>>
>;

export type GuardPositive<N extends number> = IsPositive<
  N,
  N,
  Newtypes.Left<Positive<N>>
>;

export type GuardPositiveInteger<N extends number> = IsPositive<
  N,
  GuardInteger<N>,
  Newtypes.Left<PositiveInteger<N>>
>;

declare global {
  namespace Newtypes {
    interface Types<A> {
      Integer: Integer<A & number>;
      Positive: Positive<A & number>;
      PositiveInteger: PositiveInteger<A & number>;
    }
    interface TypeGuards<A> {
      Integer: GuardInteger<A & number>;
      Positive: GuardPositive<A & number>;
      PositiveInteger: GuardPositiveInteger<A & number>;
    }
  }
}

export type Integer<T extends number = number> = newtype.Newtype<"Integer", T>;
export type Positive<T extends number = number> = newtype.Newtype<
  "Positive",
  T
>;

export type PositiveInteger<T extends number = number> = newtype.Concat<
  Integer<T>,
  Positive<T>
>;

/**
 * @since 0.2.0
 */
export const isInteger = (n: number) => Number.isInteger(n);
export const integer = newtype.define(isInteger, "Integer");

/**
 * @since 0.2.0
 */
export const isPositive = (n: number) => n > 0;
export const positive = newtype.define(isPositive, "Positive");

/**
 * @since 0.2.0
 */
export const isPositiveInteger = predicate.and(isPositive)(isInteger);
export const positiveInteger = newtype.define(
  isPositiveInteger,
  "PositiveInteger",
);

export const assertPositive: AssertsT.AssertsId<Positive>["assert"] =
  newtype.getAsserts(positive).assert;
// const foo: any = 1;
// assertPositive(foo);
// const b = foo;
// positiveInteger.unwrap(integer(1))
