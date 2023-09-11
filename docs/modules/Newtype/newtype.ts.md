---
title: Newtype/newtype.ts
nav_order: 6
parent: Modules
---

## newtype overview

Added in v0.2.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [AnyNewtype (type alias)](#anynewtype-type-alias)
  - [CarrierOf (type alias)](#carrierof-type-alias)
  - [Concat (type alias)](#concat-type-alias)
  - [Extends (type alias)](#extends-type-alias)
  - [IGuardNewType (interface)](#iguardnewtype-interface)
  - [INewtype (interface)](#inewtype-interface)
  - [INewtypeClass (interface)](#inewtypeclass-interface)
  - [INewtypeProto (interface)](#inewtypeproto-interface)
  - [INewtypeProtoURI (interface)](#inewtypeprotouri-interface)
  - [INewtypeURI (interface)](#inewtypeuri-interface)
  - [Newtype (type alias)](#newtype-type-alias)
  - [URIOf (type alias)](#uriof-type-alias)
  - [define](#define)
  - [getAsserts](#getasserts)
  - [getEq](#geteq)
  - [getField](#getfield)
  - [getFunctor](#getfunctor)
  - [getMonoid](#getmonoid)
  - [getOrd](#getord)
  - [getRing](#getring)
  - [getSemigroup](#getsemigroup)
  - [getSemiring](#getsemiring)
  - [newtypeId](#newtypeid)

---

# utils

## AnyNewtype (type alias)

**Signature**

```ts
export type AnyNewtype = INewtype<any, any>
```

Added in v0.2.0

## CarrierOf (type alias)

**Signature**

```ts
export type CarrierOf<N extends AnyNewtype> = N extends INewtype<any, infer A> ? A : never
```

Added in v0.2.0

## Concat (type alias)

**Signature**

```ts
export type Concat<N1 extends INewtype<object, any>, N2 extends INewtype<object, CarrierOf<N1>>> = INewtype<
  URIOf<N1> & URIOf<N2>,
  CarrierOf<N1>
>
```

Added in v0.2.0

## Extends (type alias)

**Signature**

```ts
export type Extends<N extends AnyNewtype, Tags extends object> = INewtype<Tags & URIOf<N>, CarrierOf<N>>
```

Added in v0.2.0

## IGuardNewType (interface)

**Signature**

```ts
export interface IGuardNewType<URI extends Newtypes.TypeURIS, S extends AnyNewtype, T extends CarrierOf<S>>
  extends INewtypeProtoURI<URI, S, T> {
  /**
   * @param input -
   * @param unsafeCoerce - 不进行类型检查
   */
  <const A extends T>(input: A, unsafeCoerce: true): Newtypes.GuardResult<URI, A>
  <A extends T>(a: Newtypes.InputGuard<URI, A>, unsafeCoerce?: false): Newtypes.GuardResult<URI, A>
}
```

## INewtype (interface)

**Signature**

```ts
export interface INewtype<URI, A> {
  readonly [newtypeId]: typeof newtypeId
  readonly _URI: URI
  readonly _A: A
}
```

Added in v0.2.0

## INewtypeClass (interface)

**Signature**

```ts
export interface INewtypeClass<S extends AnyNewtype, T extends CarrierOf<S>> extends INewtypeProto<S, T> {
  /**
   * @param input -
   * @param unsafeCoerce - 不进行类型检查
   */
  (input: T, unsafeCoerce?: boolean): S
  lift: Functor.Functor<URIOf<S>>['map']
  liftF1: liftF1C.liftF1C<URIOf<S>, T>['liftF1']
  liftF2: liftF1C.liftF1C<URIOf<S>, T>['liftF2']
  liftF3: liftF1C.liftF1C<URIOf<S>, T>['liftF3']
  Monad: Monad.Monad<URIOf<S>>
}
```

## INewtypeProto (interface)

**Signature**

```ts
export interface INewtypeProto<S extends AnyNewtype, T extends CarrierOf<S>> {
  msg: string
  unsafe(a: T): S
  unwrap(a: S): T
  predicate: Predicate.Predicate<CarrierOf<S>>
  is: R.Refinement<any, S>
}
```

## INewtypeProtoURI (interface)

**Signature**

```ts
export interface INewtypeProtoURI<URI extends Newtypes.TypeURIS, S extends AnyNewtype, T extends CarrierOf<S>>
  extends INewtypeProto<S, T> {
  lift: Functor.Functor1<URI>['map']
  liftF1: liftF1C.liftF11C<URI, T>['liftF1']
  liftF2: liftF1C.liftF11C<URI, T>['liftF2']
  liftF3: liftF1C.liftF11C<URI, T>['liftF3']
  Monad: Monad.Monad1<URI>
}
```

## INewtypeURI (interface)

**Signature**

```ts
export interface INewtypeURI<URI extends Newtypes.TypeURIS, S extends AnyNewtype, T extends CarrierOf<S>>
  extends INewtypeProtoURI<URI, S, T> {
  /**
   * @param input -
   * @param unsafeCoerce - 不进行类型检查
   */
  <const A extends T>(a: Newtypes.InputGuard<URI, A>, unsafeCoerce?: false): Newtypes.Kind<URI, A>
  <const A extends T>(input: A, unsafeCoerce: true): Newtypes.Kind<URI, A>
}
```

## Newtype (type alias)

**Signature**

```ts
export type Newtype<URI extends string, A = any> = INewtype<{ readonly [K in URI]: K }, A>
```

## URIOf (type alias)

**Signature**

```ts
export type URIOf<N extends AnyNewtype> = N extends INewtype<infer URI, any> ? URI : never
```

Added in v0.2.0

## define

**Signature**

```ts
export declare function define<URI extends Newtypes.TypeURIS, T>(
  guard: Newtypes.Guard<URI, T>['guard'],
  URI: Newtypes.Guard<URI, T>['URI']
): INewtypeURI<URI, Newtypes.Kind<URI, T>, CarrierOf<Newtypes.Kind<URI, T>>>
export declare function define<S extends AnyNewtype>(
  predicate: Predicate.Predicate<CarrierOf<S>>,
  message?: string
): INewtypeClass<S, CarrierOf<S>>
export declare function define<S extends AnyNewtype, A extends CarrierOf<S> = CarrierOf<S>>(
  predicate?: Predicate.Predicate<A>
): INewtypeClass<S, A>
```

Added in v0.2.0

## getAsserts

**Signature**

```ts
export declare function getAsserts<S extends AnyNewtype>(R: INewtypeProto<S, any>): AssertsT.AssertsId<S>
```

Added in v0.2.0

## getEq

**Signature**

```ts
export declare const getEq: <S extends AnyNewtype>(S: Eq.Eq<CarrierOf<S>>) => Eq.Eq<S>
```

Added in v0.3.0

## getField

**Signature**

```ts
export declare const getField: <S extends AnyNewtype>(F: Field<CarrierOf<S>>) => Field<S>
```

Added in v0.2.0

## getFunctor

**Signature**

```ts
export declare const getFunctor: <S extends AnyNewtype>(S: Functor.Functor<CarrierOf<S>>) => Functor.Functor<S>
```

Added in v0.3.0

## getMonoid

**Signature**

```ts
export declare const getMonoid: <S extends AnyNewtype>(M: Monoid<CarrierOf<S>>) => Monoid<S>
```

Added in v0.2.0

## getOrd

**Signature**

```ts
export declare const getOrd: <S extends AnyNewtype>(O: Ord.Ord<CarrierOf<S>>) => Ord.Ord<S>
```

Added in v0.2.0

## getRing

**Signature**

```ts
export declare const getRing: <S extends AnyNewtype>(R: Ring.Ring<CarrierOf<S>>) => Ring.Ring<S>
```

Added in v0.2.0

## getSemigroup

**Signature**

```ts
export declare const getSemigroup: <S extends AnyNewtype>(
  S: Semigroup.Semigroup<CarrierOf<S>>
) => Semigroup.Semigroup<S>
```

Added in v0.2.0

## getSemiring

**Signature**

```ts
export declare const getSemiring: <S extends AnyNewtype>(S: Semiring.Semiring<CarrierOf<S>>) => Semiring.Semiring<S>
```

Added in v0.2.0

## newtypeId

**Signature**

```ts
export declare const newtypeId: typeof newtypeId
```
