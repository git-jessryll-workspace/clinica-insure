import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function AgentPersonRow({ ...props }) {
  const { person } = props;
  return (
    <tr key={person.name}>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {person.name}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
        {person.date}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
        {person.time}
      </td>
      <td className="whitespace-nowrap text-sm font-medium" colSpan="2">
        <Link href={`/agent/${person.name}`}>
          <a>
            <ChevronRightIcon className="text-gray-400 cursor-pointer h-10 w-10 float-center mx-8" />
          </a>
        </Link>
      </td>
    </tr>
  );
}
