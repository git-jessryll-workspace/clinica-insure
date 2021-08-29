import Link from "next/link";
import { classNames } from "../../Utils/index";
const SidebarMenuLink = ({ href, name, Icon, current }) => {
  return (
    <Link href={href}>
      <a
        className={classNames(
          current
            ? "bg-gray-100 text-blue-500 font-semibold"
            : "text-gray-600 hover:bg-gray-50 hover:text-blue-500",
          "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
        )}
      >
        <Icon
          className={classNames(
            current
              ? "text-blue-500 font-semibold"
              : "text-gray-400 group-hover:text-blue-500",
            "mr-3 flex-shrink-0 h-6 w-6"
          )}
          aria-hidden="true"
        />
        {name}
      </a>
    </Link>
  );
};

export default SidebarMenuLink;
