import { useContext, useEffect } from "react";
import AgentPeopleTbody from "./AgentPeopleTbody";
import AgentThead from "./AgentThead";
import Head from "next/head";
import { GlobalContext } from "../../context";
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
      <div className="py-16 px-8">
        <div className="min-h-full min-w-full max-w-auto">
          <AgentThead />
          <AgentPeopleTbody />
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
};

export default TeamLeadAgentPage;
