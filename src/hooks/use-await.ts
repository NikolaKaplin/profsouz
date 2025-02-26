"use client";

import { useEffect, useState } from "react";

export function useAwait<F extends (...args: any) => Promise<any>>(
  fun: F,
  ...args: Parameters<F>
) {
  const [data, setData] = useState<F>();

  useEffect(() => {
    fun().then(setData);
  }, [fun, args]);

  return data as Awaited<ReturnType<F>>;
}
