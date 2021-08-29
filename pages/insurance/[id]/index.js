import Head from "next/head";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import InsuranceTbody from "../../../components/TeamLeadInsurance/InsuranceTbody";
import InsuranceThead from "../../../components/TeamLeadInsurance/InsuranceThead";
import { GlobalContext } from "../../../context/state";
import Link from "next/link";

export default function InsuranceProviderDetail() {
  const global = useContext(GlobalContext);
  const route = useRouter();

  useEffect(() => {
    global.updateActiveMenuLink("insurance");
  }, []);

  return (
    <>
      <Head>
        <title>{route.query.id}</title>
      </Head>
      <div className="py-10 px-10">
        <div className="my-5">
          <h1 className="text-blue-700 text-2xl font-normal">
            {route.query.id}
          </h1>
        </div>
        <div className="min-h-full min-w-full max-w-auto">
          <InsuranceThead />
          <InsuranceTbody />
        </div>
        <div className="grid grid-cols-1 sm:float-left md:float-right mt-6 text-sm">
          <div>
            <Link href="#">
              <button className="bg-red-600 text-white px-4 py-1 font-bold">
                Remove New Agent
              </button>
            </Link>
            <Link href={`/agent/create`}>
              <button className="bg-blue-600 text-white px-4 py-1 ml-2 font-bold">
                Add New Agent
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
