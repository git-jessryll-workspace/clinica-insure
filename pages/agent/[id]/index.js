import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import AgentVerificationTbody from "../../../components/TeamLeadAgent/AgentVerificationTbody";
import AgentVerificationThead from "../../../components/TeamLeadAgent/AgentVerificationThead";
import { GlobalContext } from "../../../context/state";

const AgentDetail = () => {
  const route = useRouter();
  const global = useContext(GlobalContext);
  
  useEffect(() => {
    global.updateActiveMenuLink("agent");
  }, []);

  return (
    <>
      <Head>
        {/* replace actual name not ID */}
        <title>{route.query.id}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="py-16 mx-6">
        <div className="flex">
          <div className="mr-4 flex-shrink-0">
            <img
              className="h-14 w-14 rounded-full"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="mb-10">
            <h4 className="text-2xl mt-3 font-normal text-blue-700 cursor-pointer">
              Chinmay Sarasvati
            </h4>
          </div>
        </div>
        <div className="my-5 text-blue-600">Date: April 10, 2021</div>
        <div className="my-6">
          <span className="mr-4 text-blue-600">Total Verification: 20</span>
          <span className="mr-4 text-green-600">Verified: 18</span>
          <span className="text-red-600">Not Verified: 2</span>
        </div>
        <div className="-mx-6">
          <table className="w-full">
            <AgentVerificationThead />
          </table>
          <table className="w-full">
            <AgentVerificationTbody agentId={route.query.id} />
          </table>
        </div>
      </div>
    </>
  );
};

export default AgentDetail;
