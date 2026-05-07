import AuthContainer from "../features/authentication/AuthContainer";

function Auth() {
  return (
    <section className="container xl:max-w-xl mx-auto">
      <div className="flex justify-center pt-20">
        <div className="max-w-sm">
          <AuthContainer />
        </div>
      </div>
    </section>
  );
}

export default Auth;
