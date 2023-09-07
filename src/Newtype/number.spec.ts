import { number } from "fp-ts";
import { describe, expect, it } from "vitest";
import * as Newtype from ".";
import { Integer, integer, positive } from "./number";

describe("Newtype", () => {
  describe("integer", () => {
    it("throw", ({ expect }) => {
      expect(integer(1)).toEqual(integer.unsafe(1));
      // @ts-expect-error NewtypeError
      expect(() => integer(1.5)).toThrowError("Expected: Integer");
      expect(integer(1.5, true)).toBe(integer.unsafe(1.5));
      expect(integer.unwrap(integer(0))).toBe(0);
    });

    it("Lift", () => {
      const field = Newtype.getField<Integer>(number.Field);
      expect(field.add(integer(10), integer(20))).toEqual(integer(30));
      expect(field.sub(integer(10), integer(20))).toEqual(integer.unsafe(-10));
      expect(field.zero).toEqual(integer.unsafe(0));
      expect(integer.lift(integer(10), (a) => a + 1)).toEqual(integer(11));

      expect(integer.liftF2((a, b) => a + b)(integer(1), integer(2))).toBe(
        integer(3),
      );
    });
  });

  describe("positive", () => {
    it("throw", ({ expect }) => {
      expect(positive(1)).toEqual(positive.unsafe(1));
      // @ts-expect-error NewtypeError
      expect(() => positive(-2)).toThrowError("Expected: Positive");
      // @ts-expect-error NewtypeError
      expect(() => positive(0)).toThrowError("Expected: Positive");
      expect(positive(1.5, true)).toBe(positive.unsafe(1.5));
    });
  });
});
