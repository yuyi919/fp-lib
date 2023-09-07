/**
 * @since 0.2.0
 */
import * as Eq from "fp-ts/Eq";
import { Field } from "fp-ts/Field";
import * as Functor from "fp-ts/Functor";
import * as Identity from "fp-ts/Identity";
import * as Monad from "fp-ts/Monad";
import { Monoid } from "fp-ts/Monoid";
import * as Ord from "fp-ts/Ord";
import * as Predicate from "fp-ts/Predicate";
import * as R from "fp-ts/Refinement";
import * as Ring from "fp-ts/Ring";
import * as Semigroup from "fp-ts/Semigroup";
import * as Semiring from "fp-ts/Semiring";
import * as F from "fp-ts/function";
import * as AssertsT from "../AssertsT";
import * as liftF1C from "../LiftFC";

/**
 * @since 0.2.0
 */
export abstract class Newtype<URI, A> {
  readonly _URI!: URI;
  readonly _A!: A;
}

/**
 * @since 0.2.0
 */
export type AnyNewtype = Newtype<any, any>;

/**
 * @since 0.2.0
 */
export type URIOf<N extends AnyNewtype> = N extends Newtype<infer URI, any>
  ? URI
  : never;

/**
 * @since 0.2.0
 */
export type CarrierOf<N extends AnyNewtype> = N extends Newtype<any, infer A>
  ? A
  : never;

/**
 * @since 0.3.0
 */
export const getEq = <S extends AnyNewtype>(S: Eq.Eq<CarrierOf<S>>): Eq.Eq<S> =>
  S as unknown as Eq.Eq<S>;

/**
 * @since 0.3.0
 */
export const getFunctor = <S extends AnyNewtype>(
  S: Functor.Functor<CarrierOf<S>>,
): Functor.Functor<S> => S as unknown as Functor.Functor<S>;

/**
 * @since 0.2.0
 */
export const getOrd = <S extends AnyNewtype>(
  O: Ord.Ord<CarrierOf<S>>,
): Ord.Ord<S> => O as unknown as Ord.Ord<S>;

/**
 * @since 0.2.0
 */
export const getSemigroup = <S extends AnyNewtype>(
  S: Semigroup.Semigroup<CarrierOf<S>>,
): Semigroup.Semigroup<S> => S as unknown as Semigroup.Semigroup<S>;

/**
 * @since 0.2.0
 */
export const getMonoid = <S extends AnyNewtype>(
  M: Monoid<CarrierOf<S>>,
): Monoid<S> => M as unknown as Monoid<S>;

/**
 * @since 0.2.0
 */
export const getSemiring = <S extends AnyNewtype>(
  S: Semiring.Semiring<CarrierOf<S>>,
): Semiring.Semiring<S> => S as unknown as Semiring.Semiring<S>;

/**
 * @since 0.2.0
 */
export const getRing = <S extends AnyNewtype>(
  R: Ring.Ring<CarrierOf<S>>,
): Ring.Ring<S> => R as unknown as Ring.Ring<S>;

/**
 * @since 0.2.0
 */
export function getAsserts<S extends AnyNewtype>(
  R: INewtypeProto<S, any>,
): AssertsT.AssertsId<S>;
export function getAsserts<S extends AnyNewtype>(
  R: INewtypeProto<S, any>,
): AssertsT.AssertsId<S> {
  return AssertsT.getAsserts(
    R.predicate,
    R.msg,
  ) as unknown as AssertsT.AssertsId<S>;
}

/**
 * @since 0.2.0
 */
export const getField = <S extends AnyNewtype>(
  F: Field<CarrierOf<S>>,
): Field<S> => F as unknown as Field<S>;

export interface INewtypeProto<S extends AnyNewtype, T extends CarrierOf<S>> {
  msg: string;
  unsafe(a: T): S;
  unwrap(a: S): T;
  predicate: Predicate.Predicate<CarrierOf<S>>;
  is: R.Refinement<any, S>;
}

export interface INewtype<S extends AnyNewtype, T extends CarrierOf<S>>
  extends INewtypeProto<S, T> {
  /**
   * @param input -
   * @param unsafeCoerce - 不进行类型检查
   */
  (input: T, unsafeCoerce?: boolean): S;
  lift: Functor.Functor<URIOf<S>>["map"];
  liftF1: liftF1C.liftF1C<URIOf<S>, T>["liftF1"];
  liftF2: liftF1C.liftF1C<URIOf<S>, T>["liftF2"];
  liftF3: liftF1C.liftF1C<URIOf<S>, T>["liftF3"];
  Monad: Monad.Monad<URIOf<S>>;
}

export interface INewtypeProtoURI<
  URI extends Newtypes.TypeURIS,
  S extends AnyNewtype,
  T extends CarrierOf<S>,
> extends INewtypeProto<S, T> {
  lift: Functor.Functor1<URI>["map"];
  liftF1: liftF1C.liftF11C<URI, T>["liftF1"];
  liftF2: liftF1C.liftF11C<URI, T>["liftF2"];
  liftF3: liftF1C.liftF11C<URI, T>["liftF3"];
  Monad: Monad.Monad1<URI>;
}

export interface INewtypeURI<
  URI extends Newtypes.TypeURIS,
  S extends AnyNewtype,
  T extends CarrierOf<S>,
> extends INewtypeProtoURI<URI, S, T> {
  /**
   * @param input -
   * @param unsafeCoerce - 不进行类型检查
   */
  <const A extends T>(
    a: Newtypes.InputGuard<URI, A>,
    unsafeCoerce?: false,
  ): Newtypes.Kind<URI, A>;
  <const A extends T>(input: A, unsafeCoerce: true): Newtypes.Kind<URI, A>;
}

export interface IGuardNewType<
  URI extends Newtypes.TypeURIS,
  S extends AnyNewtype,
  T extends CarrierOf<S>,
> extends INewtypeProtoURI<URI, S, T> {
  /**
   * @param input -
   * @param unsafeCoerce - 不进行类型检查
   */
  <const A extends T>(
    input: A,
    unsafeCoerce: true,
  ): Newtypes.GuardResult<URI, A>;
  <A extends T>(
    a: Newtypes.InputGuard<URI, A>,
    unsafeCoerce?: false,
  ): Newtypes.GuardResult<URI, A>;
}

//
// isos
//

const __proto = {
  unwrap: F.identity,
  unsafe: F.identity,
  Monad: Identity.Monad,
  lift: Identity.Monad.map,
  predicate: F.constTrue,
  is: F.constTrue as any,
  ...liftF1C.Id,
} satisfies Omit<INewtypeProtoURI<Identity.URI, AnyNewtype, any>, "msg">;

const construct = (target: unknown) => Object.setPrototypeOf(target, __proto);

/**
 * @since 0.2.0
 */
export function newtype<URI extends Newtypes.TypeURIS, T>(
  guard: Newtypes.Guard<URI, T>["guard"],
  URI: Newtypes.Guard<URI, T>["URI"],
): INewtypeURI<URI, Newtypes.Kind<URI, T>, CarrierOf<Newtypes.Kind<URI, T>>>;
export function newtype<
  S extends AnyNewtype,
  A extends CarrierOf<S> = CarrierOf<S>,
>(predicate: Predicate.Predicate<A>, message?: string): INewtype<S, A>;
export function newtype<
  S extends AnyNewtype,
  A extends CarrierOf<S> = CarrierOf<S>,
>(predicate?: Predicate.Predicate<A>): INewtype<S, A>;
export function newtype(
  predicate?: any,
  msgOrURI = "newtype",
): INewtypeProto<any, any> {
  function wrap(input: CarrierOf<any>, unsafeCoerce?: boolean): any {
    if (!unsafeCoerce && predicate && !predicate(input as any)) {
      throw new TypeError("Expected: " + msgOrURI, { cause: input });
    }
    return input as any;
  }
  construct(wrap);
  wrap.msg = msgOrURI;
  if (predicate) {
    wrap.predicate = predicate;
    wrap.is = predicate;
  }
  return wrap as INewtype<any, CarrierOf<any>>;
}

export function guard<URI extends Newtypes.TypeURIS, T>(
  URI: Newtypes.Guard<URI, T>["URI"],
  guard: Newtypes.Guard<URI, T>["guard"],
): <S extends Newtypes.Kind<URI, T>>() => IGuardNewType<URI, S, CarrierOf<S>> {
  return F.unsafeCoerce(() => newtype(guard, URI + ""));
}

/**
 * @since 0.2.0
 */
export type Concat<
  N1 extends Newtype<object, any>,
  N2 extends Newtype<object, CarrierOf<N1>>,
> = Newtype<URIOf<N1> & URIOf<N2>, CarrierOf<N1>>;

/**
 * @since 0.2.0
 */
export type Extends<N extends AnyNewtype, Tags extends object> = Newtype<
  Tags & URIOf<N>,
  CarrierOf<N>
>;

// /**
//  * @since 0.2.0
//  */
// export function prism<S extends AnyNewtype>(
//   predicate: Predicate<CarrierOf<S>>,
// ): Prism<CarrierOf<S>, S> {
//   return new Prism((s) => (predicate(s) ? some(s) : none), identity);
// }

// interface Base extends Newtype<{ readonly Base: unique symbol }, number> {}
// interface Extends1
//   extends Extends<Base, { readonly Extends1: unique symbol }> {}
// interface Extends2
//   extends Extends<Base, { readonly Extends2: unique symbol }> {}

// declare const methodOnExtends1: (a: Extends1) => void;
// const Extends1 = newtype<Extends1>();

// declare const extends2: Extends2;
// methodOnExtends1(extends2); // does not fail while it should

// // things that as working as expected:
// declare const methodOnBase: (a: Base) => void;
// declare const base: Base;
// methodOnExtends1(base); // fails, as expected
// methodOnBase(extends2); // does not fail, as expected
