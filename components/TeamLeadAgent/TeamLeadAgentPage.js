import { useState, useContext, useEffect } from "react";
import AgentPeopleTbody from "./AgentPeopleTbody";
import AgentThead from "./AgentThead";
import Head from "next/head";
import { GlobalContext } from "../../context/state";

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
          <table className="min-w-full">
            <AgentThead />
          </table>
          <table className="min-w-full">
            <AgentPeopleTbody />
          </table>
        </div>
      </div>
    </>
  );
};

export default TeamLeadAgentPage;
