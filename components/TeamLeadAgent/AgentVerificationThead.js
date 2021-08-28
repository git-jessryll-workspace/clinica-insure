import NormalSelectItem from "../Utils/NormalSelectItem";
import { useContext } from "react";
import { CommonContext } from "../../context/state";
import { MonthPicker } from "../Utils/MonthPicker";
import { SearchThead } from "../Utils/SearchComponent";

export default function AgentVerificationThead() {
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
            className="px-6 py-3 text-xs font-medium text-gray-500 tracking-wider w-auto text-center"
          >
            <NormalSelectItem
              selection={[
                {
                  id: "1",
                  name: "Top Verifiers",
                },
              ]}
            />
          </th>
          <th
            scope="col"
            className="px-10 text-center text-xs tracking-wider w-80"
          >
            <MonthPicker onChange={(e) => console.log(e)} />
          </th>
          <th
            scope="col"
            className="px-10 py-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            <div className="ml-6">
              <NormalSelectItem
                selection={[
                  {
                    id: "1",
                    name: "Latest",
                  },
                  {
                    id: "2",
                    name: "Oldest",
                  },
                ]}
              />
            </div>
          </th>
          <th scope="col" className="relative px-6 py-6 w-full float-left">
            <SearchThead />
          </th>
        </tr>
      </thead>
    </>
  );
}
