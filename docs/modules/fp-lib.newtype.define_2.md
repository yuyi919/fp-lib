---
layout: page
navigation_source: api_nav
improve_this_button: false
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@yuyi919/fp-lib](./fp-lib.md) &gt; [Newtype](./fp-lib.newtype.md) &gt; [define](./fp-lib.newtype.define_2.md)

## Newtype.define() function

**Signature:**

```typescript
export declare function define<S extends AnyNewtype, A extends CarrierOf<S> = CarrierOf<S>>(predicate?: Predicate.Predicate<A>): INewtypeClass<S, A>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  predicate | Predicate.Predicate&lt;A&gt; | _(Optional)_ |

**Returns:**

[INewtypeClass](./fp-lib.newtype.inewtypeclass.md)<!-- -->&lt;S, A&gt;
