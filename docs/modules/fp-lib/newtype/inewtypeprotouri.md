---
layout: default
title: INewtypeProtoURI
navigation_source: api_nav
improve_this_button: false
parent: newtype
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](../../index.md) &gt; [@yuyi919/fp-lib](../../fp-lib.md) &gt; [Newtype](../newtype.md) &gt; [INewtypeProtoURI](./inewtypeprotouri.md)

## Newtype.INewtypeProtoURI interface

**Signature:**

```typescript
export interface INewtypeProtoURI<URI extends Newtypes.TypeURIS, S extends AnyNewtype, T extends CarrierOf<S>> extends INewtypeProto<S, T> 
```
**Extends:** [INewtypeProto](./inewtypeproto.md)<!-- -->&lt;S, T&gt;

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [lift](./inewtypeprotouri/lift.md) |  | Functor.Functor1&lt;URI&gt;\["map"\] |  |
|  [liftF1](./inewtypeprotouri/liftf1.md) |  | [liftF1C.liftF11C](../liftf1c/liftf11c.md)<!-- -->&lt;URI, T&gt;\["liftF1"\] |  |
|  [liftF2](./inewtypeprotouri/liftf2.md) |  | [liftF1C.liftF11C](../liftf1c/liftf11c.md)<!-- -->&lt;URI, T&gt;\["liftF2"\] |  |
|  [liftF3](./inewtypeprotouri/liftf3.md) |  | [liftF1C.liftF11C](../liftf1c/liftf11c.md)<!-- -->&lt;URI, T&gt;\["liftF3"\] |  |
|  [Monad](./inewtypeprotouri/monad.md) |  | Monad.Monad1&lt;URI&gt; |  |

