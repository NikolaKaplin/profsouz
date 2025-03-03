"use client";

import { User } from "payload-types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getMe } from "~/server/payload";

const MeContext = createContext<User | undefined>(undefined);

export function MeProvider({ children }: { children: ReactNode }) {
  const [me, setMe] = useState<User>();

  useEffect(() => {
    getMe().then((v) => setMe(v ?? undefined));
  }, []);

  return <MeContext.Provider value={me}>{children}</MeContext.Provider>;
}

export function useMe() {
  const me = useContext(MeContext);

  return me;
}
