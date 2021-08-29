import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function AgentPersonRow({ ...props }) {
  const { person } = props;
  return (
    <div className="bg-white grid sm:grid-cols-1 md:grid-cols-4 my-1 pt-4 pb-3 px-5 md:px-4 rounded-xl gap-6">
      <div className="whitespace-nowrap text-sm font-medium text-gray-900">
        <div className="grid grid-cols-2">
          <div>
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  className="h-10 w-10 rounded-full"
                  src={person.image}
                  alt=""
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  {person.name}
                </div>
              </div>
            </div>
          </div>
          <div className="visible md:invisible">
            <Link href={`/agent/${person.name}`}>
              <a>
                <ChevronRightIcon className="text-gray-400 cursor-pointer h-10 w-10 float-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="whitespace-nowrap text-sm text-gray-400 text-center flex items-center">
        {person.date}
      </div>
      <div className="whitespace-nowrap text-sm text-gray-400 text-center flex items-center">
        {person.time}
      </div>
      <div className="whitespace-nowrap text-sm font-medium invisible md:visible">
        <Link href={`/agent/${person.name}`}>
          <a>
            <ChevronRightIcon className="text-gray-400 cursor-pointer h-10 w-10 float-right" />
          </a>
        </Link>
      </div>
    </div>
  );
}
