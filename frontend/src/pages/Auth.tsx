import AuthContainer from "../features/authentication/AuthContainer";

function Auth() {
  return (
    <div className="flex justify-center pt-20">
      <div className="max-w-sm">
        <AuthContainer />
      </div>
    </div>
  );
}

export default Auth;
