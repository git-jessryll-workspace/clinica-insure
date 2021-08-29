import { useContext } from "react";
import {
  AuthContext,
} from "../context/state";
import AuthLayout from "./AuthLayout";

export default function Layout({ children }) {
  const auth = useContext(AuthContext);
  return (
    <>
    {
      !auth.authenticate ? <AuthLayout children={children}/> : <>
        {children}
      </>
    }
    </>
  );
}
