import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../context";
import VerificationDetailPage from './../../../../components/Verification/VerificationDetailPage';

export default function VerificationDetailRoute() {
  const global = useContext(GlobalContext);
  const route = useRouter();
  useEffect(() => {
    global.updateActiveMenuLink("agent");
  }, []);
  return (
    <>
      <VerificationDetailPage/>
    </>
  );
}
