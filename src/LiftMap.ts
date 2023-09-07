import * as Functor from "fp-ts/Functor";
import { Kind, Kind2, URIS, URIS2 } from "fp-ts/HKT";
import * as MIO from "fp-ts/IO";
import * as MI from "fp-ts/Identity";
import * as MR from "fp-ts/Reader";

export interface LiftMap2<URI extends URIS2> extends Functor.Functor2<URI> {
  liftMap<I, A, B, C>(
    fa: Kind2<URI, I, A>,
    fb: Kind2<URI, I, B>,
    f: (a: A, b: B) => C,
  ): Kind2<URI, I, C>;
  liftMap<I, A, B, C, D>(
    fa: Kind2<URI, I, A>,
    fb: Kind2<URI, I, B>,
    fc: Kind2<URI, I, C>,
    f: (a: A, b: B, c: C) => D,
  ): Kind2<URI, I, D>;
  liftMap<I, A, B, C, D, E>(
    fa: Kind2<URI, I, A>,
    fb: Kind2<URI, I, B>,
    fc: Kind2<URI, I, C>,
    fd: Kind2<URI, I, D>,
    f: (a: A, b: B, c: C, d: D) => E,
  ): Kind2<URI, I, E>;
  liftMap<I, A, B, C, D, E, F>(
    fa: Kind2<URI, I, A>,
    fb: Kind2<URI, I, B>,
    fc: Kind2<URI, I, C>,
    fd: Kind2<URI, I, D>,
    fe: Kind2<URI, I, E>,
    f: (a: A, b: B, c: C, d: D, e: E) => F,
  ): Kind2<URI, I, F>;
  liftMap<I, A, B, C, D, E, F, G>(
    fa: Kind2<URI, I, A>,
    fb: Kind2<URI, I, B>,
    fc: Kind2<URI, I, C>,
    fd: Kind2<URI, I, D>,
    fe: Kind2<URI, I, E>,
    ff: Kind2<URI, I, F>,
    f: (a: A, b: B, c: C, d: D, e: E, f: F) => G,
  ): Kind2<URI, I, G>;
}

export interface LiftMap1<URI extends URIS> extends Functor.Functor1<URI> {
  liftMap<A, B, C>(
    fa: Kind<URI, A>,
    fb: Kind<URI, B>,
    f: (a: A, b: B) => C,
  ): Kind<URI, C>;
  liftMap<A, B, C, D>(
    fa: Kind<URI, A>,
    fb: Kind<URI, B>,
    fc: Kind<URI, C>,
    f: (a: A, b: B, c: C) => D,
  ): Kind<URI, D>;
  liftMap<A, B, C, D, E>(
    fa: Kind<URI, A>,
    fb: Kind<URI, B>,
    fc: Kind<URI, C>,
    fd: Kind<URI, D>,
    f: (a: A, b: B, c: C, d: D) => E,
  ): Kind<URI, E>;
  liftMap<A, B, C, D, E, F>(
    fa: Kind<URI, A>,
    fb: Kind<URI, B>,
    fc: Kind<URI, C>,
    fd: Kind<URI, D>,
    fe: Kind<URI, E>,
    f: (a: A, b: B, c: C, d: D, e: E) => F,
  ): Kind<URI, F>;
  liftMap<A, B, C, D, E, F, G>(
    fa: Kind<URI, A>,
    fb: Kind<URI, B>,
    fc: Kind<URI, C>,
    fd: Kind<URI, D>,
    fe: Kind<URI, E>,
    ff: Kind<URI, F>,
    f: (a: A, b: B, c: C, d: D, e: E, f: F) => G,
  ): Kind<URI, G>;
}

export type LiftMapT21<MG extends URIS2, MF extends URIS> = {
  <I, A, B, C>(
    fa: Kind2<MG, I, Kind<MF, A>>,
    fb: Kind2<MG, I, Kind<MF, B>>,
    f: (a: A, b: B) => C,
  ): Kind2<MG, I, Kind<MF, C>>;
  <I, A, B, C, D>(
    fa: Kind2<MG, I, Kind<MF, A>>,
    fb: Kind2<MG, I, Kind<MF, B>>,
    fc: Kind2<MG, I, Kind<MF, C>>,
    f: (a: A, b: B, c: C) => D,
  ): Kind2<MG, I, Kind<MF, D>>;
  <I, A, B, C, D, E>(
    fa: Kind2<MG, I, Kind<MF, A>>,
    fb: Kind2<MG, I, Kind<MF, B>>,
    fc: Kind2<MG, I, Kind<MF, C>>,
    fd: Kind2<MG, I, Kind<MF, D>>,
    f: (a: A, b: B, c: C, d: D) => E,
  ): Kind2<MG, I, Kind<MF, E>>;
  <I, A, B, C, D, E, F>(
    fa: Kind2<MG, I, Kind<MF, A>>,
    fb: Kind2<MG, I, Kind<MF, B>>,
    fc: Kind2<MG, I, Kind<MF, C>>,
    fd: Kind2<MG, I, Kind<MF, D>>,
    fe: Kind2<MG, I, Kind<MF, E>>,
    f: (a: A, b: B, c: C, d: D, e: E) => F,
  ): Kind2<MG, I, Kind<MF, F>>;
  <I, A, B, C, D, E, F, G>(
    fa: Kind2<MG, I, Kind<MF, A>>,
    fb: Kind2<MG, I, Kind<MF, B>>,
    fc: Kind2<MG, I, Kind<MF, C>>,
    fd: Kind2<MG, I, Kind<MF, D>>,
    fe: Kind2<MG, I, Kind<MF, E>>,
    ff: Kind2<MG, I, Kind<MF, F>>,
    f: (a: A, b: B, c: C, d: D, e: E, f: F) => G,
  ): Kind2<MG, I, Kind<MF, G>>;
};

export type MSeq<MF extends URIS, Args extends any[]> = {
  [Index in keyof Args]: Kind<MF, Args[Index]>;
};
export type MSeq2<MF extends URIS2, E, Args extends any[]> = {
  [Index in keyof Args]: Kind2<MF, E, Args[Index]>;
};

export type LiftMapT22<MG extends URIS2, MF extends URIS2> = {
  <I, ER, A, B, C>(
    fa: Kind2<MG, I, Kind2<MF, ER, A>>,
    fb: Kind2<MG, I, Kind2<MF, ER, B>>,
    f: (a: A, b: B) => C,
  ): Kind2<MG, I, Kind2<MF, ER, C>>;
  <I, ER, A, B, C, D>(
    fa: Kind2<MG, I, Kind2<MF, ER, A>>,
    fb: Kind2<MG, I, Kind2<MF, ER, B>>,
    fc: Kind2<MG, I, Kind2<MF, ER, C>>,
    f: (a: A, b: B, c: C) => D,
  ): Kind2<MG, I, Kind2<MF, ER, D>>;
  <I, ER, A, B, C, D, E>(
    fa: Kind2<MG, I, Kind2<MF, ER, A>>,
    fb: Kind2<MG, I, Kind2<MF, ER, B>>,
    fc: Kind2<MG, I, Kind2<MF, ER, C>>,
    fd: Kind2<MG, I, Kind2<MF, ER, D>>,
    f: (a: A, b: B, c: C, d: D) => E,
  ): Kind2<MG, I, Kind2<MF, ER, E>>;
  <I, ER, A, B, C, D, E, F>(
    fa: Kind2<MG, I, Kind2<MF, ER, A>>,
    fb: Kind2<MG, I, Kind2<MF, ER, B>>,
    fc: Kind2<MG, I, Kind2<MF, ER, C>>,
    fd: Kind2<MG, I, Kind2<MF, ER, D>>,
    fe: Kind2<MG, I, Kind2<MF, ER, E>>,
    f: (a: A, b: B, c: C, d: D, e: E) => F,
  ): Kind2<MG, I, Kind2<MF, ER, F>>;
  <I, ER, A, B, C, D, E, F, G>(
    fa: Kind2<MG, I, Kind2<MF, ER, A>>,
    fb: Kind2<MG, I, Kind2<MF, ER, B>>,
    fc: Kind2<MG, I, Kind2<MF, ER, C>>,
    fd: Kind2<MG, I, Kind2<MF, ER, D>>,
    fe: Kind2<MG, I, Kind2<MF, ER, E>>,
    ff: Kind2<MG, I, Kind2<MF, ER, F>>,
    f: (a: A, b: B, c: C, d: D, e: E, f: F) => G,
  ): Kind2<MG, I, Kind2<MF, ER, G>>;
};

export const IO: LiftMap1<MIO.URI> = {
  ...MIO.Functor,
  liftMap: <A>(...ans: any[]): MIO.IO<A> => {
    type Args = [A, A, ...A[]];
    const f = ans.pop() as (...args: Args) => A;
    const [fa, fb, fc, fd] = ans as MSeq<MIO.URI, Args>;
    switch (ans.length) {
      case 2:
        return () => f(fa(), fb());
      case 3:
        return () => f(fa(), fb(), fc());
      case 4:
        return () => f(fa(), fb(), fc(), fd());
      default:
        return () => f(...(ans.map((a) => a()) as Args));
    }
  },
};

export const Identity: LiftMap1<MI.URI> = {
  ...MI.Functor,
  liftMap: <A>(...fa: any[]): MI.Identity<A> => {
    type Args = [A, A, ...A[]];
    const f = fa.pop() as (...args: Args) => A;
    const a = fa as MSeq<MI.URI, Args>;
    switch (a.length) {
      case 2:
        return f(a[0], a[1]);
      case 3:
        return f(a[0], a[1], a[2]);
      case 4:
        return f(a[0], a[1], a[2], a[3]);
      default:
        return f(...(a as Args));
    }
  },
};

export const Reader: LiftMap2<MR.URI> = {
  ...MR.Functor,
  liftMap: <I, A>(...ans: any[]): MR.Reader<I, A> => {
    type Args = [A, A, ...A[]];
    const f = ans.pop() as (...args: Args) => A;
    const [fa, fb, fc, fd] = ans as MSeq2<MR.URI, I, Args>;
    switch (ans.length) {
      case 2:
        return (r) => f(fa(r), fb(r));
      case 3:
        return (r) => f(fa(r), fb(r), fc(r));
      case 4:
        return (r) => f(fa(r), fb(r), fc(r), fd(r));
      default:
        return (r) =>
          f(...((ans as MSeq2<MR.URI, I, Args>).map((f) => f(r)) as Args));
    }
  },
};
