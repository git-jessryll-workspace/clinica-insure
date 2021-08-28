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
import { SearchThead } from "../Utils/SearchComponent";

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
            <SearchThead />
          </th>
        </tr>
      </thead>
    </>
  );
}
