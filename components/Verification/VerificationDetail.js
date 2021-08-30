

export default function VerificationDetail() {
    return (
      <>
        <div className="my-3 mx-8 grid grid-cols-1">
          <div className="bg-white p-8 grid grid-cols-1 md:grid-cols-2">
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <img
                  className="h-14 w-14 rounded-full"
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div>
                <div className="float-left">
                  <h5 className="sm:text-sm md:text-lg font-bold text-blue-700">
                    Dr. Anna Capri
                  </h5>
                  <h2 className="sm:text-sm md:text-xl text-blue-700">
                    ACA Health Benefits Fund (ACA)
                  </h2>
                  <h1 className="text-blue-700 sm:text-sm md:text-2xl font-normal">
                    (319) 555-0115
                  </h1>
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-full flex items-center mt-5 md:mt-0 md:items-end md:flex-col-reverse">
                <span className="bg-green-600 py-3 px-14 text-white font-bold uppercase">
                  Verified
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 mt-6">
            <div className="my-5 sm:w-full md:w-96">
              <h1 className="sm:text-lg md:text-xl font-semibold text-blue-700">
                Patient : Catrina Amber (Female)
              </h1>
              <div className="sm:text-sm md:text-lg">
                <span className="font-normal text-blue-700">Birthday : </span>{" "}
                <span className="text-gray-500">
                  23 years old - October 26, 1997
                </span>
              </div>
              <div className="sm:text-xs md:text-lg">
                <span className="text-blue-700">Contact Details : </span>{" "}
                <span className="text-gray-500">00 61 2 9876 5432</span>
              </div>
              <div className="sm:text-sm md:text-lg">
                <span className="text-blue-700 font-normal">Location : </span>
                <span className="text-gray-500">
                  Unit 1, Petre Court, Office Village, Petre Clayton-le-Moors,
                  Accrington BB5 5HY
                </span>
              </div>
            </div>
            <hr />
            <div className="my-6">
              <h1 className="text-blue-700 sm:text-lg md:text-xl font-semibold">
                Insurance Provider
              </h1>
              <h2 className="text-gray-500 sm:text-sm md:text-lg">
                ACA Health Benefits Fund (ACA)
              </h2>
              <h2 className="text-gray-500 text-lg">Gold Private Hospital</h2>
            </div>
            <div className="my-6">
              <h1 className="text-blue-700 sm:text-lg md:text-xl font-semibold">
                Medical Treatment Request
              </h1>
              <h2 className="text-gray-500 sm:text-sm md:text-lg">
                Assisted Reproductive Service
              </h2>
            </div>
            <div className="sm:w-full md:w-1/2">
              <h5 className="text-blue-700 sm:text-sm md:text-lg">MBS 13200</h5>
              <h2 className="text-gray-500 sm:text-sm md:text-lg">
                Scoliosis Or Kyphosis, In A Child, Manipulation Od Deformity And
                Application Of A Localiser Cast, Under General Anaesthesia, In A
                Hospital (H) (Anaes.) (Assist.)
              </h2>
            </div>
            <div className="bg-gray-200 p-4 mt-8 text-gray-500 sm:text-sm md:text-lg h-44 rounded-sm">
              Catrina Amber is Qualified in Assisted Reproductive Service MBS
              13200
            </div>
          </div>
        </div>
      </>
    );
}