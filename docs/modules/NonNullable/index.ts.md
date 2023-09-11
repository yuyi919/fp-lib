---
title: NonNullable/index.ts
nav_order: 11
parent: Modules
layout: default
---

## index overview

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Asserts](#asserts)
  - [predicate](#predicate)

---

# utils

## Asserts

**Signature**

```ts
export declare const Asserts: AssertsT.AssertsT<'NonNullable'>
```

## predicate

**Signature**

```ts
export declare const predicate: <T>(a: T) => a is NonNullable<T>
```
