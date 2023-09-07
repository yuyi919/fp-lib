export * from "./newtype";

declare module "fp-ts/HKT" {
  interface URItoKind<A> extends Newtypes.Types<A> {}
  interface URItoKind2<E, A> extends Newtypes.Types<A> {
    [Newtypes.URI]: E;
  }
}
