import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";

export default function Logou() {
  const { isPending, logout } = useLogout();

  if (isPending) return <Loading />;
  return (
    <button onClick={() => logout()}>
      <HiArrowRightOnRectangle className="size-5 text-secondary-500 hover:text-error" />
    </button>
  );
}
