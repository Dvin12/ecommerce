import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
function Login() {
  return (
    <div className="bg-slate-200  p-12 h-screen">
      <div className="flex justify-center items-center">
        <div className="bg-slate-100 p-28 w-fit rounded-2xl drop-shadow-lg my-16 ">
          <section className="flex flex-col items-center justify-center gap-6 text-xl">
            <h2 className="font-medium">Login</h2>
            <button className="bg-white p-4 w-80 rounded-lg flex items-center justify-center gap-3  drop-shadow-lg hover:bg-gray-100 duration-300">
              <FcGoogle></FcGoogle>
              Sign In With Google
            </button>
            <button className="bg-white p-4 w-80 rounded-lg flex items-center justify-center gap-3  drop-shadow-lg hover:bg-gray-100 duration-300">
              <BsGithub></BsGithub>
              Sign in With GitHub
            </button>
            <p className="text-xs text-gray-500">For preview purposes only</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Login;
