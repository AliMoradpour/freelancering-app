import { useUser } from "../features/authentication/useUser";

function Header() {
  const { isPending, data } = useUser();

  return <header className="bg-secondary-0 py-4 px-8">سلام به روی ماهت ای {data?.user.name}</header>;
}

export default Header;
