import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../context/state";
import VerificationDetail from '../../../../components/Verification/VerificationDetail';

export default function VerificationDetailRoute() {
  const global = useContext(GlobalContext);
  const route = useRouter();
  useEffect(() => {
    global.updateActiveMenuLink("agent");
  }, []);
  return (
    <>
      <Head>
        <title>{route.query.vid}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="py-10 overflow-hidden">
        <div className="grid grid-cols-1">
          <div className="w-full mt-10 mx-8">
            <h1 className="text-xl text-blue-700">
              Agent Verifier : Chimnay Saravati
            </h1>
            <h1 className="text-xl text-blue-700 my-2">
              Date : April 20, 2021 Time : 10PM
            </h1>
          </div>
        </div>
        <VerificationDetail/>
      </div>
    </>
  );
}
