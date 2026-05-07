import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="container xl:max-w-xl mx-auto">
      <div className="w-full flex flex-col space-y-20 items-center justify-center pt-10">
        <h1 className="font-bold text-2xl text-primary-900">
          GO TO LOGIN PAGE
        </h1>
        <button
          className="btn btn--primary w-full"
          onClick={() => navigate("/auth")}
        >
          LOGIN
        </button>
      </div>
    </section>
  );
};

export default Home;
