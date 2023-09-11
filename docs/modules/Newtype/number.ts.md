---
title: Newtype/number.ts
nav_order: 8
parent: Modules
layout: default
---

## number overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [CompareIsPositive (type alias)](#compareispositive-type-alias)
  - [GuardInteger (type alias)](#guardinteger-type-alias)
  - [GuardPositive (type alias)](#guardpositive-type-alias)
  - [GuardPositiveInteger (type alias)](#guardpositiveinteger-type-alias)
  - [Integer (type alias)](#integer-type-alias)
  - [IsInteger (type alias)](#isinteger-type-alias)
  - [IsNagetive (type alias)](#isnagetive-type-alias)
  - [IsNonZero (type alias)](#isnonzero-type-alias)
  - [IsPositive (type alias)](#ispositive-type-alias)
  - [Positive (type alias)](#positive-type-alias)
  - [PositiveInteger (type alias)](#positiveinteger-type-alias)
  - [assertPositive](#assertpositive)
  - [integer](#integer)
  - [isInteger](#isinteger)
  - [isPositive](#ispositive)
  - [isPositiveInteger](#ispositiveinteger)
  - [positive](#positive)
  - [positiveInteger](#positiveinteger)

---

# utils

## CompareIsPositive (type alias)

**Signature**

```ts
export type CompareIsPositive<
  N extends [number, number],
  NRA = IsPositive<N[0]>,
  NRB = IsPositive<N[1]>
> = TypeUtil.Extend<
  NRA,
  NRB,
  TypeUtil.Extend<NRA, true, 'both', 'bothLeft'>,
  TypeUtil.Extend<NRA, true, 'left', 'right'>
>
```

## GuardInteger (type alias)

**Signature**

```ts
export type GuardInteger<N extends number> = IsInteger<N, N, Newtypes.Left<Integer<N>>>
```

## GuardPositive (type alias)

**Signature**

```ts
export type GuardPositive<N extends number> = IsPositive<N, N, Newtypes.Left<Positive<N>>>
```

## GuardPositiveInteger (type alias)

**Signature**

```ts
export type GuardPositiveInteger<N extends number> = IsPositive<N, GuardInteger<N>, Newtypes.Left<PositiveInteger<N>>>
```

## Integer (type alias)

**Signature**

```ts
export type Integer<T extends number = number> = newtype.Newtype<'Integer', T>
```

## IsInteger (type alias)

**Signature**

```ts
export type IsInteger<N extends number, T = true, F = false> = `${N}` extends `${number}.${number}` ? F : T
```

## IsNagetive (type alias)

**Signature**

```ts
export type IsNagetive<N extends number, T = true, F = false> = `${N}` extends `-${number}` ? T : F
```

## IsNonZero (type alias)

**Signature**

```ts
export type IsNonZero<N extends number, T = true, F = false> = `${N}` extends '0' ? F : T
```

## IsPositive (type alias)

**Signature**

```ts
export type IsPositive<N extends number, T = true, F = false> = IsNonZero<N, IsNagetive<N, F, T>, F>
```

## Positive (type alias)

**Signature**

```ts
export type Positive<T extends number = number> = newtype.Newtype<'Positive', T>
```

## PositiveInteger (type alias)

**Signature**

```ts
export type PositiveInteger<T extends number = number> = newtype.Concat<Integer<T>, Positive<T>>
```

## assertPositive

**Signature**

```ts
export declare const assertPositive: <A>(a: unknown, msg?: string | undefined) => asserts a is A
```

## integer

**Signature**

```ts
export declare const integer: newtype.INewtypeURI<'Integer', Integer<number>, number>
```

## isInteger

**Signature**

```ts
export declare const isInteger: (n: number) => boolean
```

Added in v0.2.0

## isPositive

**Signature**

```ts
export declare const isPositive: (n: number) => boolean
```

Added in v0.2.0

## isPositiveInteger

**Signature**

```ts
export declare const isPositiveInteger: predicate.Predicate<number>
```

Added in v0.2.0

## positive

**Signature**

```ts
export declare const positive: newtype.INewtypeURI<'Positive', Positive<number>, number>
```

## positiveInteger

**Signature**

```ts
export declare const positiveInteger: newtype.INewtypeURI<'PositiveInteger', PositiveInteger<number>, number>
```
