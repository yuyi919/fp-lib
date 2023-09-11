---
layout: default
title: AssertsT2C
navigation_source: api_nav
improve_this_button: false
parent: assertst
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](../../index.md) &gt; [@yuyi919/fp-lib](../../fp-lib.md) &gt; [AssertsT](../assertst.md) &gt; [AssertsT2C](./assertst2c.md)

## AssertsT.AssertsT2C type

**Signature:**

```typescript
export type AssertsT2C<URI extends URIS2, T, T2> = {
    assert<A extends T, B extends T2>(a: unknown, msg?: string): asserts a is Kind2<URI, A, B>;
    expect<A extends T, B extends T2>(value: unknown, isMatched: boolean, msg?: string): asserts value is Kind2<URI, A, B>;
};
```