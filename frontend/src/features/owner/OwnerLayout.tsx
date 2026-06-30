import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";

export default function OwnerLayout() {
  return (
    <>
      <AppLayout>
        <Sidebar>
          <CustomNavLink link="dashboard">
            <HiHome className="size-5 text-primary-900" />
            <span className="text-secondary-700">داشبورد</span>
          </CustomNavLink>

          <CustomNavLink link="projects">
            <HiCollection className="size-5 text-primary-900" />
            <span className="text-secondary-700">پروژه ها</span>
          </CustomNavLink>
        </Sidebar>
      </AppLayout>
    </>
  );
}
