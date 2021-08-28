import NormalSelectItem from "../Utils/NormalSelectItem";
import { useContext } from 'react';
import { CommonContext } from '../../context/state';
import { MonthPicker } from "../Utils/MonthPicker";
import { SearchThead } from "../Utils/SearchComponent";

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
            className="px-8 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-80"
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
            <SearchThead/>
          </th>
        </tr>
      </thead>
    </>
  );
}
