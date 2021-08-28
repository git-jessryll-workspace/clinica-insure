import { classNames } from "../../Utils/index";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function AgentVerificationRow({ ...props }) {
  const { verification_process, request_number, insurance_provider, status, agentId } =
    props;
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-3 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-2">
            <div className="text-lg font-medium text-gray-900">
              {request_number}
            </div>
            <div className="text-sm text-gray-500">
              <span className="text-gray-400">Request Number</span>
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-900">{insurance_provider}</div>
        <div className="text-sm text-gray-500">
          <span className="text-gray-400">Insurance Provider</span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-600">{verification_process}</div>
        <div className="text-sm text-gray-500">
          <span className="text-gray-400">Verification Process</span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div
          className={classNames(
            status === "PENDING" ? "text-red-500" : "text-green-500",
            "text-lg uppercase"
          )}
        >
          {status}
        </div>
        <div className="text-sm text-gray-500">
          <span className="text-gray-400">Status</span>
        </div>
      </td>
      <td className="px-3 py-4 whitespace-nowrap text-center">
          <Link href={`/agent/${agentId}/verification/${request_number}`}>
          <a>
        <ChevronRightIcon
          className={classNames(
            status === "PENDING"
              ? "text-gray-500 cursor-pointer"
              : "text-gray-300 cursor-not-allowed",
            "h-10 w-10 float-center"
          )}
        />
          </a>
          </Link>
      </td>
    </tr>
  );
}
