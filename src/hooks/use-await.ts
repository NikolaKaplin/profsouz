"use client";
/**  */
import { useEffect, useState } from "react";

export function useAwait<F extends (...args: unknown[]) => Promise<unknown>>(
  fun: F,
  ...args: Parameters<F>
) {
  type FReturnType = Awaited<ReturnType<F>>;
  const [data, setData] = useState<FReturnType>();

  const argsjson = JSON.stringify(args);

  useEffect(() => {
    fun(...args)
      .then((d) => setData(d as FReturnType))
      .catch(() => setData(undefined));
  }, [fun, argsjson]); // eslint-disable-line

  return data;
}
