import { Link } from "react-router";
import { BriefcaseBusiness, Lock, Mail } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-12">
          <BriefcaseBusiness size={50} />
          <h1 className="text-4xl font-bold mt-6">Welcome Back!</h1>

          <p className="mt-4 text-blue-100 leading-7">
            Track every job application in one place. Stay organized, monitor
            interviews, and land your dream job faster.
          </p>

          <div className="mt-10 space-y-3">
            <div>✓ Track Applications</div>
            <div>✓ Interview Schedule</div>
            <div>✓ Application Status</div>
            <div>✓ Personal Dashboard</div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12 flex items-center">
          <div className="w-full">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-800">Login</h2>

              <p className="text-slate-500 mt-2">
                Sign in to continue managing your applications.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              <div>
                <label className="font-medium text-sm mb-2 block">Email</label>

                <div className="flex items-center border rounded-lg px-4">
                  <Mail className="text-slate-400" size={18} />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-3 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-medium text-sm mb-2 block">
                  Password
                </label>

                <div className="flex items-center border rounded-lg px-4">
                  <Lock className="text-slate-400" size={18} />
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full px-3 py-3 outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button type="button" className="text-blue-600 hover:underline">
                  Forgot Password?
                </button>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg py-3 font-semibold">
                Login
              </button>
            </form>

            <p className="text-center mt-6 text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-600 font-semibold">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
