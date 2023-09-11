---
title: LiftMap.ts
nav_order: 4
parent: Modules
---

## LiftMap overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [IO](#io)
  - [Identity](#identity)
  - [LiftMap1 (interface)](#liftmap1-interface)
  - [LiftMap2 (interface)](#liftmap2-interface)
  - [LiftMapT21 (type alias)](#liftmapt21-type-alias)
  - [LiftMapT22 (type alias)](#liftmapt22-type-alias)
  - [MSeq (type alias)](#mseq-type-alias)
  - [MSeq2 (type alias)](#mseq2-type-alias)
  - [Reader](#reader)

---

# utils

## IO

**Signature**

```ts
export declare const IO: LiftMap1<'IO'>
```

## Identity

**Signature**

```ts
export declare const Identity: LiftMap1<'Identity'>
```

## LiftMap1 (interface)

**Signature**

```ts
export interface LiftMap1<URI extends URIS> extends Functor.Functor1<URI> {
  liftMap<A, B, C>(fa: Kind<URI, A>, fb: Kind<URI, B>, f: (a: A, b: B) => C): Kind<URI, C>
  liftMap<A, B, C, D>(fa: Kind<URI, A>, fb: Kind<URI, B>, fc: Kind<URI, C>, f: (a: A, b: B, c: C) => D): Kind<URI, D>
  liftMap<A, B, C, D, E>(
    fa: Kind<URI, A>,
    fb: Kind<URI, B>,
    fc: Kind<URI, C>,
    fd: Kind<URI, D>,
    f: (a: A, b: B, c: C, d: D) => E
  ): Kind<URI, E>
  liftMap<A, B, C, D, E, F>(
    fa: Kind<URI, A>,
    fb: Kind<URI, B>,
    fc: Kind<URI, C>,
    fd: Kind<URI, D>,
    fe: Kind<URI, E>,
    f: (a: A, b: B, c: C, d: D, e: E) => F
  ): Kind<URI, F>
  liftMap<A, B, C, D, E, F, G>(
    fa: Kind<URI, A>,
    fb: Kind<URI, B>,
    fc: Kind<URI, C>,
    fd: Kind<URI, D>,
    fe: Kind<URI, E>,
    ff: Kind<URI, F>,
    f: (a: A, b: B, c: C, d: D, e: E, f: F) => G
  ): Kind<URI, G>
}
```

## LiftMap2 (interface)

**Signature**

```ts
export interface LiftMap2<URI extends URIS2> extends Functor.Functor2<URI> {
  liftMap<I, A, B, C>(fa: Kind2<URI, I, A>, fb: Kind2<URI, I, B>, f: (a: A, b: B) => C): Kind2<URI, I, C>
  liftMap<I, A, B, C, D>(
    fa: Kind2<URI, I, A>,
    fb: Kind2<URI, I, B>,
    fc: Kind2<URI, I, C>,
    f: (a: A, b: B, c: C) => D
  ): Kind2<URI, I, D>
  liftMap<I, A, B, C, D, E>(
    fa: Kind2<URI, I, A>,
    fb: Kind2<URI, I, B>,
    fc: Kind2<URI, I, C>,
    fd: Kind2<URI, I, D>,
    f: (a: A, b: B, c: C, d: D) => E
  ): Kind2<URI, I, E>
  liftMap<I, A, B, C, D, E, F>(
    fa: Kind2<URI, I, A>,
    fb: Kind2<URI, I, B>,
    fc: Kind2<URI, I, C>,
    fd: Kind2<URI, I, D>,
    fe: Kind2<URI, I, E>,
    f: (a: A, b: B, c: C, d: D, e: E) => F
  ): Kind2<URI, I, F>
  liftMap<I, A, B, C, D, E, F, G>(
    fa: Kind2<URI, I, A>,
    fb: Kind2<URI, I, B>,
    fc: Kind2<URI, I, C>,
    fd: Kind2<URI, I, D>,
    fe: Kind2<URI, I, E>,
    ff: Kind2<URI, I, F>,
    f: (a: A, b: B, c: C, d: D, e: E, f: F) => G
  ): Kind2<URI, I, G>
}
```

## LiftMapT21 (type alias)

**Signature**

```ts
export type LiftMapT21<MG extends URIS2, MF extends URIS> = {
  <I, A, B, C>(fa: Kind2<MG, I, Kind<MF, A>>, fb: Kind2<MG, I, Kind<MF, B>>, f: (a: A, b: B) => C): Kind2<
    MG,
    I,
    Kind<MF, C>
  >
  <I, A, B, C, D>(
    fa: Kind2<MG, I, Kind<MF, A>>,
    fb: Kind2<MG, I, Kind<MF, B>>,
    fc: Kind2<MG, I, Kind<MF, C>>,
    f: (a: A, b: B, c: C) => D
  ): Kind2<MG, I, Kind<MF, D>>
  <I, A, B, C, D, E>(
    fa: Kind2<MG, I, Kind<MF, A>>,
    fb: Kind2<MG, I, Kind<MF, B>>,
    fc: Kind2<MG, I, Kind<MF, C>>,
    fd: Kind2<MG, I, Kind<MF, D>>,
    f: (a: A, b: B, c: C, d: D) => E
  ): Kind2<MG, I, Kind<MF, E>>
  <I, A, B, C, D, E, F>(
    fa: Kind2<MG, I, Kind<MF, A>>,
    fb: Kind2<MG, I, Kind<MF, B>>,
    fc: Kind2<MG, I, Kind<MF, C>>,
    fd: Kind2<MG, I, Kind<MF, D>>,
    fe: Kind2<MG, I, Kind<MF, E>>,
    f: (a: A, b: B, c: C, d: D, e: E) => F
  ): Kind2<MG, I, Kind<MF, F>>
  <I, A, B, C, D, E, F, G>(
    fa: Kind2<MG, I, Kind<MF, A>>,
    fb: Kind2<MG, I, Kind<MF, B>>,
    fc: Kind2<MG, I, Kind<MF, C>>,
    fd: Kind2<MG, I, Kind<MF, D>>,
    fe: Kind2<MG, I, Kind<MF, E>>,
    ff: Kind2<MG, I, Kind<MF, F>>,
    f: (a: A, b: B, c: C, d: D, e: E, f: F) => G
  ): Kind2<MG, I, Kind<MF, G>>
}
```

## LiftMapT22 (type alias)

**Signature**

```ts
export type LiftMapT22<MG extends URIS2, MF extends URIS2> = {
  <I, ER, A, B, C>(fa: Kind2<MG, I, Kind2<MF, ER, A>>, fb: Kind2<MG, I, Kind2<MF, ER, B>>, f: (a: A, b: B) => C): Kind2<
    MG,
    I,
    Kind2<MF, ER, C>
  >
  <I, ER, A, B, C, D>(
    fa: Kind2<MG, I, Kind2<MF, ER, A>>,
    fb: Kind2<MG, I, Kind2<MF, ER, B>>,
    fc: Kind2<MG, I, Kind2<MF, ER, C>>,
    f: (a: A, b: B, c: C) => D
  ): Kind2<MG, I, Kind2<MF, ER, D>>
  <I, ER, A, B, C, D, E>(
    fa: Kind2<MG, I, Kind2<MF, ER, A>>,
    fb: Kind2<MG, I, Kind2<MF, ER, B>>,
    fc: Kind2<MG, I, Kind2<MF, ER, C>>,
    fd: Kind2<MG, I, Kind2<MF, ER, D>>,
    f: (a: A, b: B, c: C, d: D) => E
  ): Kind2<MG, I, Kind2<MF, ER, E>>
  <I, ER, A, B, C, D, E, F>(
    fa: Kind2<MG, I, Kind2<MF, ER, A>>,
    fb: Kind2<MG, I, Kind2<MF, ER, B>>,
    fc: Kind2<MG, I, Kind2<MF, ER, C>>,
    fd: Kind2<MG, I, Kind2<MF, ER, D>>,
    fe: Kind2<MG, I, Kind2<MF, ER, E>>,
    f: (a: A, b: B, c: C, d: D, e: E) => F
  ): Kind2<MG, I, Kind2<MF, ER, F>>
  <I, ER, A, B, C, D, E, F, G>(
    fa: Kind2<MG, I, Kind2<MF, ER, A>>,
    fb: Kind2<MG, I, Kind2<MF, ER, B>>,
    fc: Kind2<MG, I, Kind2<MF, ER, C>>,
    fd: Kind2<MG, I, Kind2<MF, ER, D>>,
    fe: Kind2<MG, I, Kind2<MF, ER, E>>,
    ff: Kind2<MG, I, Kind2<MF, ER, F>>,
    f: (a: A, b: B, c: C, d: D, e: E, f: F) => G
  ): Kind2<MG, I, Kind2<MF, ER, G>>
}
```

## MSeq (type alias)

**Signature**

```ts
export type MSeq<MF extends URIS, Args extends any[]> = {
  [Index in keyof Args]: Kind<MF, Args[Index]>
}
```

## MSeq2 (type alias)

**Signature**

```ts
export type MSeq2<MF extends URIS2, E, Args extends any[]> = {
  [Index in keyof Args]: Kind2<MF, E, Args[Index]>
}
```

## Reader

**Signature**

```ts
export declare const Reader: LiftMap2<'Reader'>
```
