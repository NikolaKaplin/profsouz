import { MeProvider } from "~/hooks/use-me";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <MeProvider>{children}</MeProvider>;
};
