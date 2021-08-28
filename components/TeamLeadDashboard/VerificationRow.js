import { classNames } from "../../Utils/index";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function VerificationRow({ ...props }) {
  const { verification_process, request_number, insurance_provider, status, toggleTransferModal } =
    props;
  return (
    <tr className="hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap">
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
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <button
          type="button"
          className={classNames(
            status === "PENDING"
              ? "bg-green-700"
              : "bg-green-300 cursor-not-allowed",
            "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          )}
          onClick={() => toggleTransferModal()}
          disabled={status !== "PENDING"}
        >
          Transfer
        </button>
        <ChevronRightIcon
          className={classNames(
            status === "PENDING"
              ? "text-gray-500 cursor-pointer"
              : "text-gray-300 cursor-not-allowed",
            "h-10 w-10 float-right"
          )}
        />
      </td>
    </tr>
  );
}
