import {
  SearchIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import NormalSelectItem from "../Utils/NormalSelectItem";
import { useContext } from "react";
import { CommonContext } from "../../context/state";
import { MonthPicker } from "../Utils/MonthPicker";

export default function VerificationThead() {
  const common = useContext(CommonContext);

  return (
    <>
      <thead>
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-900 tracking-wider w-auto"
          >
            <NormalSelectItem
              label="Selecting Item Types"
              selection={common.selectionTypes}
            />
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-medium text-gray-500 text-left tracking-wider w-auto"
          >
            <NormalSelectItem selection={common.insuranceProviders} />
          </th>
          <th
            scope="col"
            className="px-3 text-center text-xs tracking-wider w-72"
          >
            <MonthPicker onChange={(e) => console.log(e)} />
          </th>
          <th
            scope="col"
            className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
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
          <th scope="col" className="relative px-6 py-6 w-auto float-right">
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div className="absolute inset-y-0 left-0 items-center pointer-events-none flex">
                <SearchIcon className="h-8 w-8" aria-hidden="true" />
              </div>
              <input
                id="search-field"
                className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm md:text-lg lg:text-lg xl:text-2xl"
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
