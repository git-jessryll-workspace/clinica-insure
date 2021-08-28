import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/state";

export default function CreateAgentForm() {
  const global = useContext(GlobalContext);
  useEffect(() => {
    global.updateActiveMenuLink("agent");
  }, []);
  return (
    <>
      <div className="py-16 mx-24">
        <h1 className="font-bold text-xl text-gray-600">Agent Information</h1>
        <p className="text-base text-gray-400 mb-8">
          Use a Permanent address where they can receive mail.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
            <label
              htmlFor="first_name"
              className="block font-medium text-gray-500"
            >
              First Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor="last_name"
              className="block font-medium text-gray-500"
            >
              Last Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="w-full my-8">
          <div className="sm:w-full md:w-3/4 lg:w-1/2">
            <label htmlFor="email" className="block font-medium text-gray-500">
              Email Address
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="sm:w-full md:w-1/2">
          <div>
            <label
              htmlFor="contact_details"
              className="block font-medium text-gray-500"
            >
              Contact Details
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="contact_details"
                id="contact_details"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="w-full my-8">
          <div>
            <label
              htmlFor="street_address"
              className="block font-medium text-gray-500"
            >
              Street Address
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="street_address"
                id="street_address"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div>
            <label
              htmlFor="city"
              className="block font-medium text-gray-500"
            >
              City
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="city"
                id="city"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="state"
              className="block font-medium text-gray-500"
            >
              State/Province
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="state"
                id="state"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="my-16">
            <button className="text-white bg-blue-800 py-2 px-8 font-bold sm:float-left md:float-right">Create Account</button>
        </div>
      </div>
    </>
  );
}
