import { useAuth } from "@/context/auth";
import { PropsWithChildren } from "react";
import { redirect } from "react-router";

export default function Authenticate({ children }: PropsWithChildren) {
  const { auth } = useAuth();

  if (auth.isAuthenticated) {
    return <>{children}</>;
  }

  return redirect("/login");
}
