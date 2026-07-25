import { Link } from "react-router";
import { BriefcaseBusiness, Lock, Mail, User } from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2">
        {/* Left */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-indigo-700 to-blue-600 text-white p-12">
          <BriefcaseBusiness size={50} />

          <h1 className="text-4xl font-bold mt-6">Join Job Tracker</h1>

          <p className="mt-4 text-blue-100 leading-7">
            Create your free account and organize every job application with an
            easy-to-use dashboard.
          </p>

          <div className="mt-10 space-y-3">
            <div>✓ Unlimited Applications</div>
            <div>✓ Personal Dashboard</div>
            <div>✓ Interview Tracking</div>
            <div>✓ Application Analytics</div>
          </div>
        </div>

        {/* Right */}
        <div className="p-8 md:p-12 flex items-center">
          <div className="w-full">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Create Account</h2>

              <p className="text-slate-500 mt-2">
                Start tracking your job applications today.
              </p>
            </div>

            <form className="space-y-5 mt-8">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Full Name
                </label>

                <div className="flex items-center border rounded-lg px-4">
                  <User size={18} className="text-slate-400" />

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-3 py-3 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>

                <div className="flex items-center border rounded-lg px-4">
                  <Mail size={18} className="text-slate-400" />

                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full px-3 py-3 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Password
                </label>

                <div className="flex items-center border rounded-lg px-4">
                  <Lock size={18} className="text-slate-400" />

                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-3 py-3 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Confirm Password
                </label>

                <div className="flex items-center border rounded-lg px-4">
                  <Lock size={18} className="text-slate-400" />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full px-3 py-3 outline-none"
                  />
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white py-3 font-semibold">
                Create Account
              </button>
            </form>

            <p className="text-center mt-6 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
