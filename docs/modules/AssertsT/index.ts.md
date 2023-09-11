---
title: AssertsT/index.ts
nav_order: 1
parent: Modules
layout: default
---

## index overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [model](#model)
  - [AssertsT (type alias)](#assertst-type-alias)
- [utils](#utils)
  - [AssertError (class)](#asserterror-class)
  - [AssertsId (type alias)](#assertsid-type-alias)
  - [AssertsT1C (type alias)](#assertst1c-type-alias)
  - [AssertsT2 (type alias)](#assertst2-type-alias)
  - [AssertsT2C (type alias)](#assertst2c-type-alias)
  - [AssertsT3 (type alias)](#assertst3-type-alias)
  - [AssertsT3C (type alias)](#assertst3c-type-alias)
  - [getAsserts](#getasserts)

---

# model

## AssertsT (type alias)

**Signature**

```ts
export type AssertsT<URI extends URIS> = {
  assert<A>(a: unknown, msg?: string): asserts a is Kind<URI, A>
  expect<A>(value: any, isMatched: boolean, msg?: string): asserts value is Kind<URI, A>
}
```

Added in v1.0.0

# utils

## AssertError (class)

**Signature**

```ts
export declare class AssertError {
  constructor(msg?: string)
}
```

## AssertsId (type alias)

**Signature**

```ts
export type AssertsId<T = any> = AssertsT1C<identity.URI, T>
```

## AssertsT1C (type alias)

**Signature**

```ts
export type AssertsT1C<URI extends URIS, T> = {
  assert<A extends T>(a: unknown, msg?: string): asserts a is Kind<URI, A>
  expect<A extends T>(value: unknown, isMatched: boolean, msg?: string): asserts value is Kind<URI, A>
}
```

## AssertsT2 (type alias)

**Signature**

```ts
export type AssertsT2<URI extends URIS2> = {
  assert<A, B>(a: unknown, msg?: string): asserts a is Kind2<URI, A, B>
  expect<A, B>(value: unknown, isMatched: boolean, msg?: string): asserts value is Kind2<URI, A, B>
}
```

## AssertsT2C (type alias)

**Signature**

```ts
export type AssertsT2C<URI extends URIS2, T, T2> = {
  assert<A extends T, B extends T2>(a: unknown, msg?: string): asserts a is Kind2<URI, A, B>
  expect<A extends T, B extends T2>(value: unknown, isMatched: boolean, msg?: string): asserts value is Kind2<URI, A, B>
}
```

## AssertsT3 (type alias)

**Signature**

```ts
export type AssertsT3<URI extends URIS3> = {
  assert<A, B, C>(a: unknown, msg?: string): asserts a is Kind3<URI, A, B, C>
  expect<A, B, C>(value: unknown, isMatched: boolean, msg?: string): asserts value is Kind3<URI, A, B, C>
}
```

## AssertsT3C (type alias)

**Signature**

```ts
export type AssertsT3C<URI extends URIS3, T, T2, T3> = {
  assert<A extends T, B extends T2, C extends T3>(a: unknown, msg?: string): asserts a is Kind3<URI, A, B, C>
  expect<A extends T, B extends T2, C extends T3>(
    value: unknown,
    isMatched: boolean,
    msg?: string
  ): asserts value is Kind3<URI, A, B, C>
}
```

## getAsserts

**Signature**

```ts
export declare function getAsserts<M extends URIS3, A>(isMatched: Predicate<A>, URI: M): AssertsT3<M>
export declare function getAsserts<M extends URIS2, A>(isMatched: Predicate<A>, URI: M): AssertsT2<M>
export declare function getAsserts<M extends URIS, A, B extends A>(
  isMatched: Refinement<A, B>,
  URI: M
): AssertsT1C<M, B>
export declare function getAsserts<M extends URIS, A>(isMatched: Predicate<A>, URI: M): AssertsT1C<M, A>
export declare function getAsserts<A>(isMatched: Predicate<A>, msg?: string): AssertsId<A>
```
