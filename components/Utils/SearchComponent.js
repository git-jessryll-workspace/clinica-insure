import { SearchIcon } from "@heroicons/react/solid";
export const SearchThead = ({onChange}) => {
  return (
    <div className="relative w-full text-gray-100 focus-within:text-gray-100">
      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none ml-3">
        <SearchIcon className="h-8 w-8" aria-hidden="true" />
      </div>
      <input
        id="search-field"
        className="block w-full h-full pl-12 pr-5 py-4 border-transparent text-gray-100 placeholder-gray-100 focus:outline-none focus:placeholder-gray-100 focus:ring-0 focus:border-transparent sm:text-sm md:text-md lg:text-xl xl:text-2xl bg-blue-800 rounded-xl"
        placeholder="Search"
        type="search"
        name="search"
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};
