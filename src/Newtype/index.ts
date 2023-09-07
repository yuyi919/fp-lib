export * from "./newtype";

declare module "fp-ts/HKT" {
  type URItoKind<A> = Newtypes.Types<A>;
  interface URItoKind2<E, A> extends Newtypes.Types<A> {
    [Newtypes.URI]: E;
  }
}
