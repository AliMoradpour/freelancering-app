import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type navProps = {
  link: string;
  children: ReactNode;
};

export default function CustomNavLink({ link, children }: navProps) {
  const navLinkClass = "flex items-center gap-x-2  px-2 py-1.5 rounded-lg transition-all duration-300";

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
}
