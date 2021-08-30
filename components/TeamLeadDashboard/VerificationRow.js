import { classNames } from "../../Utils/index";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function VerificationRow({ ...props }) {
  const { verification_process, request_number, insurance_provider, status, toggleTransferModal } =
    props;
  return (
    <div className="bg-white grid sm:grid-cols-1 md:grid-cols-5 my-1 pt-4 pb-3 px-5 md:px-4 rounded-xl gap-6">
      <div className="whitespace-nowrap grid grid-cols-2">
        <div className="flex items-center">
          <div className="">
            <div className="text-sm font-semibold">{request_number}</div>
            <div className="text-xs text-gray-500">
              <span className="text-gray-400">Request Number</span>
            </div>
          </div>
        </div>
        <div className="">
          <ChevronRightIcon
            className={classNames(
              status === "PENDING"
                ? "text-gray-500 cursor-pointer"
                : "text-gray-300 cursor-not-allowed",
              "h-10 w-10 float-right visible md:invisible"
            )}
          />
        </div>
      </div>
      <div className="whitespace-nowrap">
        <div className="text-sm font-semibold">{insurance_provider}</div>
        <div className="text-xs text-gray-500">
          <span className="text-gray-400">Insurance Provider</span>
        </div>
      </div>
      <div className="whitespace-nowrap text-center">
        <div className="text-sm text-gray-600">{verification_process}</div>
        <div className="text-xs text-gray-500">
          <span className="text-gray-400">Verification Process</span>
        </div>
      </div>
      <div className="whitespace-nowrap text-sm text-gray-500 text-center">
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
      <div className="text-center">
        <button
          type="button"
          className={classNames(
            status === "PENDING"
              ? "bg-green-700"
              : "bg-green-300 cursor-not-allowed",
            "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-1 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
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
            "invisible md:visible float-right h-8 w-8"
          )}
        />
      </div>
    </div>
  );
}
