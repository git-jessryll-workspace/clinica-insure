import { useContext, useEffect } from "react";
import {
  AuthContext,
} from "../context";
import AuthLayout from "./AuthLayout";

export default function Layout({ children }) {
 const auth = useContext(AuthContext);
 useEffect(() => {
    console.log(auth);
 }, [])
  return (
    <>
    {
      !auth.user !== null ? <AuthLayout children={children}/> : <>
        {children}
      </>
    }
    </>
  );
}
