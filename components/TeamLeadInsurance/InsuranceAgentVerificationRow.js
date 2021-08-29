import { classNames } from "../../Utils/index";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function InsuranceAgentVerificationRow({ ...props }) {
  const { verification } = props;
  return (
    <div className="bg-white grid sm:grid-cols-1 md:grid-cols-5 my-1 pt-4 pb-3 px-5 md:px-4 rounded-xl gap-6">
      <div className="whitespace-nowrap text-sm font-medium text-gray-900">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src={verification.image}
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {verification.name}
            </div>
          </div>
        </div>
      </div>
      <div className="whitespace-nowrap text-sm text-gray-400 flex items-center">
        {verification.date}
      </div>
      <div className="whitespace-nowrap text-sm text-gray-400 flex items-center">
        {verification.time}
      </div>
      <div className="whitespace-nowrap text-sm text-red-600 flex items-center">
        {verification.total_unverified} Unverified Calls
      </div>
      <div className="whitespace-nowrap text-sm text-green-600 flex items-center">
        {verification.total_verified} Verified Calls
      </div>
    </div>
  );
}
