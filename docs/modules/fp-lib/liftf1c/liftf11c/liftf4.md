---
layout: default
title: liftF4
navigation_source: api_nav
improve_this_button: false
parent: liftf11c
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](../../../index.md) &gt; [@yuyi919/fp-lib](../../../fp-lib.md) &gt; [liftF1C](../../liftf1c.md) &gt; [liftF11C](../liftf11c.md) &gt; [liftF4](./liftf4.md)

## liftF1C.liftF11C.liftF4() method

**Signature:**

```typescript
liftF4<A extends T, B extends T, C extends T, D extends T, E extends T>(f: (a: A, b: B, c: C, d: D) => E): (...args: MSeq<URI, [a: A, b: B, c: C, d: D]>) => HKT.Kind<URI, E>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  f | (a: A, b: B, c: C, d: D) =&gt; E |  |

**Returns:**

(...args: [MSeq](../../liftmap/mseq.md)<!-- -->&lt;URI, \[a: A, b: B, c: C, d: D\]&gt;) =&gt; HKT.Kind&lt;URI, E&gt;

