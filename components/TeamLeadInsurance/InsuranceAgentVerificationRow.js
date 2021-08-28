import { classNames } from "../../Utils/index";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function InsuranceAgentVerificationRow({ ...props }) {
  const {
    verification
  } = props;
  return (
    <tr key={verification.name}>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10">
          <img className="h-10 w-10 rounded-full" src={verification.image} alt="" />
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">
            {verification.name}
          </div>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 text-center">
      {verification.date}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 text-center">
      {verification.time}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 text-center">
      {verification.total_unverified} Unverified Calls
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 text-center">
      {verification.total_verified} Verified Calls
    </td>
  </tr>
  );
}
