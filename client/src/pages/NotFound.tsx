import { Home, ArrowLeft, SearchX } from "lucide-react";
import { Link, useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-slate-100 px-6">
      <div className="max-w-xl text-center">
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <SearchX size={60} />
        </div>

        <h1 className="mt-8 text-7xl font-extrabold text-slate-800">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-slate-700">
          Page Not Found
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-500">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium transition hover:bg-slate-50"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            <Home size={18} />
            Go Home
          </Link>
        </div>

        <div className="mt-12 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Looking for something?</p>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link
              to="/dashboard"
              className="rounded-lg bg-slate-100 px-4 py-2 text-sm hover:bg-slate-200"
            >
              Dashboard
            </Link>

            <Link
              to="/applications"
              className="rounded-lg bg-slate-100 px-4 py-2 text-sm hover:bg-slate-200"
            >
              Applications
            </Link>

            <Link
              to="/applications/new"
              className="rounded-lg bg-slate-100 px-4 py-2 text-sm hover:bg-slate-200"
            >
              Add Application
            </Link>

            <Link
              to="/about"
              className="rounded-lg bg-slate-100 px-4 py-2 text-sm hover:bg-slate-200"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
