"use client";

import { useEffect, useState } from "react";

export function useAwait<F extends (...args: any) => Promise<any>>(
  fun: F,
  ...args: Parameters<F>
) {
  const [data, setData] = useState<Awaited<ReturnType<F>>>();

  useEffect(() => {
    fun().then(setData);
  }, []);

  return data;
}
