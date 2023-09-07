/**
 * @since 1.0.0
 */
import { Kind, Kind2, Kind3, URIS, URIS2, URIS3 } from "fp-ts/HKT";
import * as identity from "fp-ts/Identity";
import { Predicate } from "fp-ts/Predicate";
import { Refinement } from "fp-ts/Refinement";

/**
 * @category model
 * @since 1.0.0
 */
export type AssertsT<URI extends URIS> = {
  assert<A>(a: unknown, msg?: string): asserts a is Kind<URI, A>;
  expect<A>(
    value: any,
    isMatched: boolean,
    msg?: string,
  ): asserts value is Kind<URI, A>;
};
export type AssertsT2<URI extends URIS2> = {
  assert<A, B>(a: unknown, msg?: string): asserts a is Kind2<URI, A, B>;
  expect<A, B>(
    value: unknown,
    isMatched: boolean,
    msg?: string,
  ): asserts value is Kind2<URI, A, B>;
};
export type AssertsT3<URI extends URIS3> = {
  assert<A, B, C>(a: unknown, msg?: string): asserts a is Kind3<URI, A, B, C>;
  expect<A, B, C>(
    value: unknown,
    isMatched: boolean,
    msg?: string,
  ): asserts value is Kind3<URI, A, B, C>;
};
export type AssertsT1C<URI extends URIS, T> = {
  assert<A extends T>(a: unknown, msg?: string): asserts a is Kind<URI, A>;
  expect<A extends T>(
    value: unknown,
    isMatched: boolean,
    msg?: string,
  ): asserts value is Kind<URI, A>;
};
export type AssertsT2C<URI extends URIS2, T, T2> = {
  assert<A extends T, B extends T2>(
    a: unknown,
    msg?: string,
  ): asserts a is Kind2<URI, A, B>;
  expect<A extends T, B extends T2>(
    value: unknown,
    isMatched: boolean,
    msg?: string,
  ): asserts value is Kind2<URI, A, B>;
};
export type AssertsT3C<URI extends URIS3, T, T2, T3> = {
  assert<A extends T, B extends T2, C extends T3>(
    a: unknown,
    msg?: string,
  ): asserts a is Kind3<URI, A, B, C>;
  expect<A extends T, B extends T2, C extends T3>(
    value: unknown,
    isMatched: boolean,
    msg?: string,
  ): asserts value is Kind3<URI, A, B, C>;
};

export type AssertsId<T = any> = AssertsT1C<identity.URI, T>;

export function getAsserts<M extends URIS3, A>(
  isMatched: Predicate<A>,
  URI: M,
): AssertsT3<M>;
export function getAsserts<M extends URIS2, A>(
  isMatched: Predicate<A>,
  URI: M,
): AssertsT2<M>;
export function getAsserts<M extends URIS, A, B extends A>(
  isMatched: Refinement<A, B>,
  URI: M,
): AssertsT1C<M, B>;
export function getAsserts<M extends URIS, A>(
  isMatched: Predicate<A>,
  URI: M,
): AssertsT1C<M, A>;
export function getAsserts<A>(
  isMatched: Predicate<A>,
  msg?: string,
): AssertsId<A>;
export function getAsserts<A>(
  isMatched: Predicate<A>,
  uri?: any,
): AssertsId<A> {
  return {
    assert(value: any, msg = uri) {
      if (!isMatched(value)) throw new AssertError(msg);
    },
    expect(_value: any, isMatched, msg = uri) {
      if (!isMatched) throw new AssertError(msg);
    },
  };
}

export class AssertError extends Error {
  constructor(msg?: string) {
    super(`Wrong assertion encountered` + (!msg ? "" : `: "${msg}"`));
  }
}
