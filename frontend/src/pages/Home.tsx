import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col space-y-20 items-center justify-center mt-10">
      <h1 className="font-bold text-2xl text-primary-900">GO TO LOGIN PAGE</h1>
      <button
        className="btn btn--primary w-full"
        onClick={() => navigate("/auth")}
      >
        LOGIN
      </button>
    </div>
  );
};

export default Home;
