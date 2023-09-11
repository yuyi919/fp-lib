---
title: LiftFC.ts
nav_order: 3
parent: Modules
layout: default
---

## LiftFC overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Id](#id)
  - [Id (type alias)](#id-type-alias)
  - [getPrediates](#getprediates)
  - [liftF11C (interface)](#liftf11c-interface)
  - [liftF1C (interface)](#liftf1c-interface)

---

# utils

## Id

**Signature**

```ts
export declare const Id: Id
```

## Id (type alias)

**Signature**

```ts
export type Id = liftF11C<Identity.URI, any>
```

## getPrediates

**Signature**

```ts
export declare const getPrediates: Id
```

## liftF11C (interface)

**Signature**

```ts
export interface liftF11C<URI extends HKT.URIS, T> {
  liftF1<A extends T, B extends T>(f: (a: A) => B): (a: HKT.Kind<URI, A>) => HKT.Kind<URI, B>
  liftF2<const A extends T, const B extends T, const C extends T>(
    f: (a: A, b: B) => C
  ): (...args: MSeq<URI, [a: A, b: B]>) => HKT.Kind<URI, C>
  liftF3<A extends T, B extends T, C extends T, D extends T>(
    f: (a: A, b: B, c: C) => D
  ): (a: HKT.Kind<URI, A>, b: HKT.Kind<URI, B>, c: HKT.Kind<URI, C>) => HKT.Kind<URI, D>
  liftF4<A extends T, B extends T, C extends T, D extends T, E extends T>(
    f: (a: A, b: B, c: C, d: D) => E
  ): (...args: MSeq<URI, [a: A, b: B, c: C, d: D]>) => HKT.Kind<URI, E>
}
```

## liftF1C (interface)

**Signature**

```ts
export interface liftF1C<URI, T> {
  liftF1<A extends T, B extends T>(f: (a: A) => B): (a: HKT.HKT<URI, A>) => HKT.HKT<URI, B>
  liftF2<A extends T, B extends T, C extends T>(
    f: (a: A, b: B) => C
  ): (a: HKT.HKT<URI, A>, b: HKT.HKT<URI, B>) => HKT.HKT<URI, C>
  liftF3<A extends T, B extends T, C extends T, D extends T>(
    f: (a: A, b: B, c: C) => D
  ): (a: HKT.HKT<URI, A>, b: HKT.HKT<URI, B>, c: HKT.HKT<URI, C>) => HKT.HKT<URI, D>
  liftF4<A extends T, B extends T, C extends T, D extends T, E extends T>(
    f: (a: A, b: B, c: C, d: D) => E
  ): (a: HKT.HKT<URI, A>, b: HKT.HKT<URI, B>, c: HKT.HKT<URI, C>, d: HKT.HKT<URI, D>) => HKT.HKT<URI, E>
}
```
