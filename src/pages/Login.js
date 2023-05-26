import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
function Login() {
  return (
    <main className="h-screen bg-slate-200  p-12 md:h-screen xl:h-full">
      <div className="flex h-full items-center justify-center">
        <div className="mx-auto  drop-shadow-lg xl:my-10 xl:rounded-2xl xl:bg-slate-100 xl:p-28">
          <section className="flex flex-col items-center justify-center gap-6 text-xl">
            <h2 className="font-medium">Login</h2>
            <button className="flex w-80 items-center justify-center gap-3 rounded-lg bg-white p-4  drop-shadow-lg duration-300 hover:bg-gray-100">
              <FcGoogle></FcGoogle>
              Sign In With Google
            </button>
            <button className="flex w-80 items-center justify-center gap-3 rounded-lg bg-white p-4  drop-shadow-lg duration-300 hover:bg-gray-100">
              <BsGithub></BsGithub>
              Sign in With GitHub
            </button>
            <p className="text-xs text-gray-500">For preview purposes only</p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Login;
