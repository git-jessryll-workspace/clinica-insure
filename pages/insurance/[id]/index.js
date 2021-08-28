import Head from "next/head";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import InsuranceTbody from "../../../components/TeamLeadInsurance/InsuranceTbody";
import InsuranceThead from "../../../components/TeamLeadInsurance/InsuranceThead";
import { GlobalContext } from "../../../context/state";
import Link from "next/link"

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
      <div className="py-16 px-10">
        <h1 className="text-blue-700 text-2xl font-normal my-6">
          {route.query.id}
        </h1>
        <div className="w-full">
          <table className="w-full">
            <InsuranceThead />
            <InsuranceTbody />
          </table>
        </div>
        <div className="max-w-auto md:float-right sm:float-left sm:mx-2 md:mx-8 mt-5">
          <Link href="#">
          <a className="bg-red-600 text-white px-4 py-2 font-bold">Remove New Agent</a>
          </Link>
          <Link href={`/agent/create`}>
          <a className="bg-blue-600 text-white px-4 py-2 mr-6 ml-6 font-bold">Add New Agent</a>
          </Link>
        </div>
      </div>
    </>
  );
}
