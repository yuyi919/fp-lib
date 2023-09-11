---
layout: page
navigation_source: api_nav
improve_this_button: false
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@yuyi919/fp-lib](./fp-lib.md) &gt; [Newtype](./fp-lib.newtype.md) &gt; [URIOf](./fp-lib.newtype.uriof.md)

## Newtype.URIOf type

**Signature:**

```typescript
export type URIOf<N extends AnyNewtype> = N extends INewtype<infer URI, any> ? URI : never;
```
**References:** [AnyNewtype](./fp-lib.newtype.anynewtype.md)<!-- -->, [INewtype](./fp-lib.newtype.inewtype.md)
