import CheckOTPForm from "../features/authentication/CheckOTPForm";
import SendOTPForm from "../features/authentication/SendOTPForm";

type Props = {};

function Auth({}: Props) {
  return (
    <div className="flex justify-center pt-20">
      <div className="sm:max-w-sm">
        <SendOTPForm />
        <CheckOTPForm />
      </div>
    </div>
  );
}

export default Auth;
