namespace Newtypes {
  export type URI = "NEWTYPES";
  export const URI = "NEWTYPES";
  export type Left<E> = import("fp-ts/Either").Left<E>;
  export type Either<E, A> = import("fp-ts/Either").Either<E, A>;
  export type Unwrap<T> = T extends Left<infer A> ? A : T;
  export type InputGuard<URI, T> = Unwrap<TypeGuard<URI, T>>;

  export interface Types<A> {}

  export type TypeURIS = import("fp-ts/HKT").URIS;

  export type Kind<URI, A> = Extract<
    import("fp-ts/HKT").Kind<Extract<URI, TypeURIS>, A>,
    import("./newtype").Newtype<{}, A>
  >;

  export type Guard<URI extends TypeURIS, T> = {
    URI: URI;
    guard: import("fp-ts/Predicate").Predicate<T>;
  };

  export type GuardResult<
    URI extends TypeURIS,
    T,
  > = import("fp-ts/Either").Either<
    TypeGuard<URI, T> extends Left<infer E> ? E : T,
    Kind<URI, T>
  >;

  export interface TypeGuards<A> {}

  export type TypeGuardURIS = keyof TypeGuards<any>;

  export type TypeGuard<URI, A> = URI extends TypeGuardURIS
    ? TypeGuards<A>[URI] extends A
      ? A
      : Left<globalThis.TypeError & Kind<URI, unknown>>
    : A;
}
