import NormalSelectItem from "../Utils/NormalSelectItem";
import { useContext } from "react";
import { CommonContext } from "../../context/state";
import { MonthPicker } from "../Utils/MonthPicker";
import { SearchThead } from "../Utils/SearchComponent";

export default function VerificationThead() {
  const common = useContext(CommonContext);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-5 mb-5">
        <div className="text-left text-xs font-medium text-gray-900 tracking-wider">
          <NormalSelectItem
            label="Selecting Item Types"
            selection={common.selectionTypes}
          />
        </div>
        <div className="text-xs font-medium text-gray-500 text-left tracking-wider">
          <br />
          <NormalSelectItem selection={common.insuranceProviders} />
        </div>
        <div className="text-center text-xs tracking-wider rounded-xl">
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
        <div className="mt-3 md:mt-5">
          <SearchThead />
        </div>
      </div>
    </>
  );
}
