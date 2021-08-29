import { classNames } from "../../Utils/index";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function VerificationRow({ ...props }) {
  const {
    verification_process,
    request_number,
    insurance_provider,
    status,
    agentId,
  } = props;
  return (
    <div className="bg-white grid sm:grid-cols-1 md:grid-cols-5 my-1 pt-4 pb-3 px-5 md:px-4 rounded-xl gap-6">
      <div className="whitespace-nowrap grid grid-cols-2">
        <div className="flex items-center">
          <div>
            <div className="text-sm font-medium text-gray-900">
              {request_number}
            </div>
            <div className="text-xs text-gray-500">
              <span className="text-gray-400">Request Number</span>
            </div>
          </div>
        </div>
        <div className="visible md:invisible">
          <Link href={`/agent/${agentId}/verification/${request_number}`}>
            <a>
              <ChevronRightIcon
                className={classNames("h-10 w-10 float-right text-gray-400")}
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="whitespace-nowrap">
        <div className="text-sm text-gray-900">{insurance_provider}</div>
        <div className="text-xs text-gray-500">
          <span className="text-gray-400">Insurance Provider</span>
        </div>
      </div>
      <div className="whitespace-nowrap">
        <div className="text-sm text-gray-600">{verification_process}</div>
        <div className="text-xs text-gray-500">
          <span className="text-gray-400">Verification Process</span>
        </div>
      </div>
      <div className="whitespace-nowrap text-sm text-gray-500">
        <div
          className={classNames(
            status === "PENDING" ? "text-red-500" : "text-green-500",
            "text-sm uppercase"
          )}
        >
          {status}
        </div>
        <div className="text-xs text-gray-500">
          <span className="text-gray-400">Status</span>
        </div>
      </div>
      <div className="whitespace-nowrap text-center invisible md:visible">
        <Link href={`/agent/${agentId}/verification/${request_number}`}>
          <a>
            <ChevronRightIcon
              className={classNames("h-10 w-10 float-right text-gray-400")}
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
