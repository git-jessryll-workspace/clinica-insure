import { useContext, useEffect } from "react";
import AgentPeopleTbody from "./AgentPeopleTbody";
import AgentThead from "./AgentThead";
import Head from "next/head";
import { GlobalContext } from "../../context/state";
import Link from "next/link";

const TeamLeadAgentPage = () => {
  const global = useContext(GlobalContext);
  useEffect(() => {
    global.updateActiveMenuLink("agent");
    return () => {
      global.updateActiveMenuLink("");
    };
  }, []);
  return (
    <>
      <Head>
        <title>Agent list</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="py-16">
        <div className="min-h-full max-w-auto">
          <table className="w-auto">
            <AgentThead />
            <AgentPeopleTbody />
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
};

export default TeamLeadAgentPage;
