---
layout: default
title: Concat
navigation_source: api_nav
improve_this_button: false
parent: newtype
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](../../index.md) &gt; [@yuyi919/fp-lib](../../fp-lib.md) &gt; [Newtype](../newtype.md) &gt; [Concat](./concat.md)

## Newtype.Concat type

**Signature:**

```typescript
export type Concat<N1 extends INewtype<object, any>, N2 extends INewtype<object, CarrierOf<N1>>> = INewtype<URIOf<N1> & URIOf<N2>, CarrierOf<N1>>;
```
**References:** [INewtype](./inewtype.md)<!-- -->, [CarrierOf](./carrierof.md)<!-- -->, [URIOf](./uriof.md)
