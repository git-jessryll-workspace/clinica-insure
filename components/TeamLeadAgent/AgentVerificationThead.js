import NormalSelectItem from "../Utils/NormalSelectItem";
import { useContext } from "react";
import { CommonContext } from "../../context/state";
import { MonthPicker } from "../Utils/MonthPicker";
import { SearchThead } from "../Utils/SearchComponent";

export default function AgentVerificationThead() {
  const common = useContext(CommonContext);

  return (
    <>
      <div className="my-6 mx-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          <div className="text-left text-xs font-medium text-gray-900 tracking-wider">
            <NormalSelectItem
              label="Selecting Item Types"
              selection={common.selectionTypes}
            />
          </div>
          <div className="text-xs font-medium text-gray-500 tracking-wider text-center">
            <br />
            <NormalSelectItem
              selection={[
                {
                  id: "1",
                  name: "Top Verifiers",
                },
              ]}
            />
          </div>
          <div className="text-center text-xs tracking-wider">
            <br />
            <MonthPicker onChange={(e) => console.log(e)} />
          </div>
          <div className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
            <br />
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
          <div className="relative mt-3 md:mt-5">
            <SearchThead />
          </div>
        </div>
      </div>
    </>
  );
}
