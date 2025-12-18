import type { NavItem } from "../../constants/siteData";

type DesktopNavProps = {
  items: NavItem[];
};

export default function DesktopNav({ items }: DesktopNavProps) {
  return (
    <nav className="hidden md:flex">
      <ul className="flex gap-3 items-center h-full">
        {items
          .filter((i) => i.href !== "#home")
          .map((item) => (
            <li key={item.href}>
              <a href={item.href} className="py-2 px-4 menu-hover">
                {item.label}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
}
