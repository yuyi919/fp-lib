---
layout: page
navigation_source: api_nav
improve_this_button: false
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@yuyi919/fp-lib](./fp-lib.md) &gt; [LiftMap](./fp-lib.liftmap.md) &gt; [MSeq](./fp-lib.liftmap.mseq.md)

## LiftMap.MSeq type

**Signature:**

```typescript
export type MSeq<MF extends URIS, Args extends any[]> = {
    [Index in keyof Args]: Kind<MF, Args[Index]>;
};
```