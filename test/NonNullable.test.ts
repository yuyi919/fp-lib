import { unsafeCoerce } from "fp-ts/function";
import { describe, expect, it } from "vitest";
import { Asserts } from "../src/NonNullable";

describe("NonNullable", () => {
  it("Asserts", () => {
    const foo: undefined | 2 = unsafeCoerce(2);
    Asserts.assert(foo);
    expect(foo).toBe(foo);

    expect(() => {
      const bar: undefined | 2 = unsafeCoerce(undefined);
      Asserts.assert(bar);
      const foobar = foo + bar;
    }).toThrowErrorMatchingInlineSnapshot(
      '"Wrong assertion encountered: \\"NonNullable\\""',
    );
  });
});
