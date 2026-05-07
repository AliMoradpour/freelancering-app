import type { ReactNode } from "react";
import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-4">
      <ul className="flex flex-col gap-y-4">
        <CustomNavLink link="/owner/dashboard">
          <HiHome className="" />
          <span>داشبورد</span>
        </CustomNavLink>
        
        <CustomNavLink link="/owner/projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavLink>
      </ul>
    </aside>
  );
}

export default Sidebar;

type navProps = {
  link: string;
  children: ReactNode;
};

const CustomNavLink = ({ link, children }: navProps) => {
  const navLinkClass =
    "flex items-center gap-x-2  px-2 py-1.5 rounded-lg transition-all duration-300";

  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive
            ? `${navLinkClass} bg-primary-100/50 text-primary-900`
            : `${navLinkClass} hover:bg-primary-100/50 hover:text-primary-900 text-secondary-600`
        }
      >
        {children}
      </NavLink>
    </li>
  );
};
