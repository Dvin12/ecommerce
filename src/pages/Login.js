import { FcGoogle } from "react-icons/fc";
function Login() {
  return (
    <div className="bg-slate-200  p-12 h-screen">
      <section className="flex items-center justify-center gap-12 text-xl">
        <button className="bg-white p-3 w-48 rounded-lg flex items-center justify-center gap-3  drop-shadow-lg">
          <FcGoogle></FcGoogle>
          Sign In
        </button>
        <button className="bg-gray-700 p-3 w-48 rounded-lg text-white drop-shadow-lg hover:bg-gray-900 duration-300">
          Sign Out
        </button>
      </section>
    </div>
  );
}

export default Login;
