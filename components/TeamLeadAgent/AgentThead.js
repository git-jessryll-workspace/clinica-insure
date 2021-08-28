import { SearchIcon, ChevronDownIcon } from "@heroicons/react/solid";
import NormalSelectItem from "../Utils/NormalSelectItem";
import { useContext } from 'react';
import { CommonContext } from '../../context/state';
import { MonthPicker } from "../Utils/MonthPicker";


export default function AgentThead() {
  const common = useContext(CommonContext);
  return (
    <>
      <thead>
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-900 tracking-wider"
          >
            <NormalSelectItem
              label="Selecting Item Types"
              selection={common.selectionTypes}
            />
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            <NormalSelectItem selection={common.insuranceProviders} />
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            <MonthPicker onChange={(e) => console.log(e)} />
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            <NormalSelectItem
              selection={[{
                id:'1',
                name: "Latest"
              },
              {
                id:'2',
                name: "Oldest"
              }
            ]}
            />
          </th>
          <th scope="col" className="relative px-6 py-3 text-right w-1/4">
            <div className="relative w-full text-gray-400 focus-within:text-gray-600  bg-blue-700">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <SearchIcon className="h-8 w-8" aria-hidden="true" />
              </div>
              <input
                id="search-field"
                className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm md:text-md lg:text-xl xl:text-2xl"
                placeholder="Search"
                type="search"
                name="search"
              />
            </div>
          </th>
        </tr>
      </thead>
    </>
  );
}
