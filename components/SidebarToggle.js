import SidebarMenuLink from "./Utils/SidebarMenuLink";
export default function SidebarToggle({ navigation }) {
  return (
    <div className="mt-5 flex-1 h-0 overflow-y-auto">
      <nav className="px-2 space-y-1">
        {navigation.map((item) => (
          <SidebarMenuLink
            key={item.name}
            name={item.name}
            href={item.href}
            Icon={item.icon}
            current={item.current}
          />
        ))}
      </nav>
    </div>
  );
}
