namespace TypeUtil {
  export type ReverseBool<T> = T extends true
    ? false
    : T extends false
    ? true
    : never;
  export type Extend<A, B, T = true, F = false> = A extends B ? T : F;
  /**
   * A utility type that transforms a union type `T` into an intersection type.
   *
   * @since 1.0.0
   * @category types
   */
  export type UnionToIntersection<T> = (
    T extends any ? (x: T) => any : never
  ) extends (x: infer R) => any
    ? R
    : never;
}
