import Head from "next/head";
import { useRouter } from "next/router";

export default function VerificationDetail() {
  const route = useRouter();
  return (
    <>
      <Head>
        <title>{route.query.vid}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="py-16 mx-6">
        <h1 className="text-xl text-blue-700">
          Agent Verifier : Chimnay Saravati
        </h1>
        <h1 className="text-xl text-blue-700 my-2">
          Date : April 20, 2021 Time : 10PM
        </h1>
        <div className="w-full my-6">
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
              <div className="bg-green-500 float-right py-4 px-16 text-white font-bold uppercase mx-24 my-6">
                Verified
              </div>
            </div>
          </div>
          <div className="my-5">
              <h1 className="text-2xl text-blue-700">Patient : Catrina Amber (Female)</h1>
          </div>
        </div>
      </div>
    </>
  );
}
