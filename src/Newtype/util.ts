namespace TypeUtil {
  export type ReverseBool<T> = T extends true
    ? false
    : T extends false
    ? true
    : never;
  export type Extend<A, B, T = true, F = false> = A extends B ? T : F;
}
