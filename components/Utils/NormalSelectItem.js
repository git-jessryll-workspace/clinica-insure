import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import { classNames } from "../../Utils";

const NormalSelectItem = ({ selection, label }) => {
  const [selected, setSelected] = useState(selection[0]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          {label ? (
            <Listbox.Label className="relative font-medium text-gray-700 sm:text-xs md:text-sm lg:text-sm">
              {label}
            </Listbox.Label>
          ) : null}

          <div className="mt-1 relative">
            <Listbox.Button className="bg-white relative w-full rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:text-xl lg:text-xl">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDownIcon
                  className="text-gray-600 xs:h-4 xs:w-4 sm:h-5 sm:w-5 md:h-8 md:w-8 lg:h-10 lg:w-10"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm md:text-lg lg:text-lg">
                {selection.map((selectItem) => (
                  <Listbox.Option
                    key={selectItem.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={selectItem}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {selectItem.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};
export default NormalSelectItem;
