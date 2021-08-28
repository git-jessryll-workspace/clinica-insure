import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../context/state";

export default function VerificationDetail() {
    
    const global = useContext(GlobalContext);
    const route = useRouter();
    useEffect(()=>{
        global.updateActiveMenuLink("agent");
    },[])
  return (
    <>
      <Head>
        <title>{route.query.vid}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="py-16 mx-6">
        <h1 className="text-2xl font-semibold text-blue-700">
          Agent Verifier : Chimnay Saravati
        </h1>
        <h1 className="text-2xl font-semibold text-blue-700 my-2">
          Date : April 20, 2021 Time : 10PM
        </h1>
        <div className="w-full my-10">
          <div className="flex">
            <div className="mr-4 flex-shrink-0">
              <img
                className="h-14 w-14 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                alt=""
              />
            </div>
            <div className="mb-10 w-full">
              <div className="float-left">
                <h5 className="text-lg font-bold text-blue-700">
                  Dr. Anna Capri
                </h5>
                <h2 className="text-xl text-blue-700">
                  ACA Health Benefits Fund (ACA)
                </h2>
                <h1 className="text-blue-700 text-2xl font-normal">
                  (319) 555-0115
                </h1>
              </div>
              <div className="bg-green-600 float-right py-4 px-16 text-white font-bold uppercase mx-24 my-6">
                Verified
              </div>
            </div>
          </div>
          <div className="my-5 sm:w-full md:w-1/4">
              <h1 className="text-2xl text-blue-700">Patient : Catrina Amber (Female)</h1>
              <div className="text-lg">
                  <span className="font-normal text-blue-700">Birthday : </span> <span className="text-gray-500">23 years old - October 26, 1997</span>
              </div>
              <div className="text-lg">
                  <span className="text-blue-700">Contact Details : </span> <span className="text-gray-500">00 61 2 9876 5432</span>
              </div>
              <div className="text-lg">
                  <span className="text-blue-700 font-normal">Location : </span><span className="text-gray-500">Unit 1, Petre Court, Office Village, Petre Clayton-le-Moors, Accrington BB5 5HY</span>
              </div>
          </div>
          <div className="my-6">
            <h1 className="text-blue-700 sm:text-lg md:text-2xl">Insurance Provider</h1>
            <h2 className="text-gray-500 text-lg">
                ACA Health Benefits Fund (ACA)
            </h2>
            <h2 className="text-gray-500 text-lg">
                Gold Private Hospital
            </h2>
          </div>
          <div className="my-6">
            <h1 className="text-blue-700 sm:text-lg md:text-2xl">Medical Treatment Request</h1>
            <h2 className="text-gray-500 text-lg">Assisted Reproductive Service</h2>
          </div>
          <div className="sm:w-full md:w-1/2">
              <h5 className="text-blue-700 text-lg">MBS 13200</h5>
              <h2 className="text-gray-500 text-lg">Scoliosis Or Kyphosis, In A Child, Manipulation Od Deformity And Application Of A Localiser Cast, Under General Anaesthesia, In A Hospital (H) (Anaes.) (Assist.)</h2>
          </div>
          <div className="bg-gray-200 p-4 mt-8 text-gray-500 text-lg h-44 rounded-sm">
              Catrina Amber is Qualified in Assisted Reproductive Service MBS 13200
          </div>
        </div>
      </div>
    </>
  );
}
