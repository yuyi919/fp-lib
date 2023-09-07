import * as AssertsT from "../AssertsT";

declare module "fp-ts/HKT" {
  interface URItoKind<A> {
    NonNullable: NonNullable<A>;
  }
}

export const predicate = <T>(a: T): a is NonNullable<T> => a != null;

export const Asserts: AssertsT.AssertsT<"NonNullable"> = AssertsT.getAsserts(
  predicate,
  "NonNullable",
);
