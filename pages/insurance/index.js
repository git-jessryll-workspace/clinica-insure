import { useContext, useEffect } from "react";
import {
  CommonContext,
  GlobalContext,
  TeamLeadContext,
} from "../../context/state";
import Head from "next/head";
import Link from "next/link";

const InsuranceProvider = () => {
  const global = useContext(GlobalContext);
  const common = useContext(CommonContext);
  const tl = useContext(TeamLeadContext);
  useEffect(() => {
    global.updateActiveMenuLink("insurance");
  }, []);
  return (
    <>
      <Head>
        <title>Insurance Provider</title>
      </Head>
      <div className="py-10 mx-16">
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {common.insuranceProviders.map((provider) => (
            <li
              key={provider.id}
              className="col-span-1 bg-white rounded-lg hover:bg-gray-100 py-6"
            >
              <div className="w-full flex items-center justify-between p-6 space-x-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                      <Link href={`/insurance/${provider.name}`}>
                    <h3 className="text-gray-600 text-xl truncate cursor-pointer">
                      {provider.name}
                    </h3>
                      </Link>
                  </div>
                  <div className="mt-1 text-gray-400 text-lg">
                    {provider.description}
                  </div>
                </div>
              </div>
              <div>
                <div className="-mt-px flex mx-6">
                  {tl.agentList.map((agent) => {
                    return <img
                      className="w-10 h-10 bg-gray-300 mx-1 rounded-full flex-shrink-0"
                      src={agent.image}
                      alt=""
                    />;
                  })}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default InsuranceProvider;
