import {
  BriefcaseBusiness,
  CalendarDays,
  CircleCheckBig,
  Clock3,
  Eye,
  Pencil,
  Plus,
  Search,
  TrendingUp,
  XCircle,
} from "lucide-react";
import { Link } from "react-router";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Applications",
      value: 48,
      icon: BriefcaseBusiness,
      color: "bg-blue-100 text-blue-600",
      link: "/applications",
    },
    {
      title: "Interviews",
      value: 8,
      icon: CalendarDays,
      color: "bg-yellow-100 text-yellow-600",
      link: "/applications?status=Interview",
    },
    {
      title: "Offers",
      value: 3,
      icon: CircleCheckBig,
      color: "bg-green-100 text-green-600",
      link: "/applications?status=Offer",
    },
    {
      title: "Rejected",
      value: 12,
      icon: XCircle,
      color: "bg-red-100 text-red-600",
      link: "/applications?status=Rejected",
    },
  ];

  const jobs = [
    {
      id: 1,
      company: "Google",
      role: "Frontend Developer",
      status: "Interview",
      date: "July 30",
    },
    {
      id: 2,
      company: "Microsoft",
      role: "React Developer",
      status: "Applied",
      date: "July 28",
    },
    {
      id: 3,
      company: "Amazon",
      role: "Full Stack Developer",
      status: "Offer",
      date: "July 25",
    },
    {
      id: 4,
      company: "Netflix",
      role: "Software Engineer",
      status: "Rejected",
      date: "July 22",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl p-6">
        {/* Header */}

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>

            <p className="mt-2 text-slate-500">
              Welcome back! Here's an overview of your job search.
            </p>
          </div>

          <Link
            to="/applications/new"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            <Plus size={18} />
            Add Application
          </Link>
        </div>

        {/* Statistics */}

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                to={item.link}
                className="rounded-2xl bg-white p-6 shadow transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-500">{item.title}</p>

                    <h2 className="mt-2 text-4xl font-bold">{item.value}</h2>
                  </div>

                  <div className={`rounded-xl p-4 ${item.color}`}>
                    <Icon size={30} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Main Grid */}

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Recent Applications */}
          <div className="rounded-2xl bg-white p-6 shadow lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold">Recent Applications</h2>

              <div className="flex gap-3">
                <Link
                  to="/applications"
                  className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-slate-100"
                >
                  <Search size={16} />
                  View All
                </Link>

                <Link
                  to="/applications/new"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                >
                  New
                </Link>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left text-slate-500">
                    <th className="pb-4">Company</th>

                    <th className="pb-4">Position</th>

                    <th className="pb-4">Status</th>

                    <th className="pb-4">Date</th>

                    <th className="pb-4 text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {jobs.map((job) => (
                    <tr
                      key={job.id}
                      className="border-b transition hover:bg-slate-50"
                    >
                      <td className="py-5">
                        <Link
                          to={`/applications/${job.id}`}
                          className="font-semibold text-blue-600 hover:underline"
                        >
                          {job.company}
                        </Link>
                      </td>

                      <td>{job.role}</td>

                      <td>
                        <span
                          className={`rounded-full px-3 py-1 text-sm font-medium ${
                            job.status === "Applied"
                              ? "bg-blue-100 text-blue-700"
                              : job.status === "Interview"
                                ? "bg-yellow-100 text-yellow-700"
                                : job.status === "Offer"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                          }`}
                        >
                          {job.status}
                        </span>
                      </td>

                      <td>{job.date}</td>

                      <td>
                        <div className="flex justify-center gap-2">
                          <Link
                            to={`/applications/${job.id}`}
                            className="rounded-lg bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200"
                          >
                            <Eye size={18} />
                          </Link>

                          <Link
                            to={`/applications/${job.id}/edit`}
                            className="rounded-lg bg-green-100 p-2 text-green-600 transition hover:bg-green-200"
                          >
                            <Pencil size={18} />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>{" "}
          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Interviews */}

            <div className="rounded-2xl bg-white p-6 shadow">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold">Upcoming Interviews</h2>

                <Link
                  to="/applications?status=Interview"
                  className="text-sm text-blue-600 hover:underline"
                >
                  View All
                </Link>
              </div>

              <div className="space-y-4">
                <Link
                  to="/applications/1"
                  className="block rounded-xl bg-yellow-50 p-4 transition hover:bg-yellow-100"
                >
                  <p className="font-semibold">Google</p>

                  <p className="text-sm text-slate-500">Frontend Developer</p>

                  <div className="mt-2 flex items-center gap-2 text-sm text-yellow-700">
                    <Clock3 size={16} />
                    Tomorrow • 10:00 AM
                  </div>
                </Link>

                <Link
                  to="/applications/2"
                  className="block rounded-xl bg-blue-50 p-4 transition hover:bg-blue-100"
                >
                  <p className="font-semibold">Microsoft</p>

                  <p className="text-sm text-slate-500">React Developer</p>

                  <div className="mt-2 flex items-center gap-2 text-sm text-blue-700">
                    <Clock3 size={16} />
                    Friday • 2:00 PM
                  </div>
                </Link>
              </div>
            </div>

            {/* Application Status */}

            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="mb-6 text-xl font-bold">Application Status</h2>

              <div className="space-y-5">
                <Link
                  to="/applications?status=Applied"
                  className="block rounded-lg p-2 transition hover:bg-slate-50"
                >
                  <div className="mb-2 flex justify-between">
                    <span>Applied</span>
                    <span>60%</span>
                  </div>

                  <div className="h-2 rounded bg-slate-200">
                    <div className="h-2 w-3/5 rounded bg-blue-600"></div>
                  </div>
                </Link>

                <Link
                  to="/applications?status=Interview"
                  className="block rounded-lg p-2 transition hover:bg-slate-50"
                >
                  <div className="mb-2 flex justify-between">
                    <span>Interview</span>
                    <span>20%</span>
                  </div>

                  <div className="h-2 rounded bg-slate-200">
                    <div className="h-2 w-1/5 rounded bg-yellow-500"></div>
                  </div>
                </Link>

                <Link
                  to="/applications?status=Offer"
                  className="block rounded-lg p-2 transition hover:bg-slate-50"
                >
                  <div className="mb-2 flex justify-between">
                    <span>Offer</span>
                    <span>10%</span>
                  </div>

                  <div className="h-2 rounded bg-slate-200">
                    <div className="h-2 w-[10%] rounded bg-green-500"></div>
                  </div>
                </Link>

                <Link
                  to="/applications?status=Rejected"
                  className="block rounded-lg p-2 transition hover:bg-slate-50"
                >
                  <div className="mb-2 flex justify-between">
                    <span>Rejected</span>
                    <span>10%</span>
                  </div>

                  <div className="h-2 rounded bg-slate-200">
                    <div className="h-2 w-[10%] rounded bg-red-500"></div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Quick Actions */}

            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="mb-5 text-xl font-bold">Quick Actions</h2>

              <div className="space-y-3">
                <Link
                  to="/applications/new"
                  className="block rounded-xl bg-blue-600 py-3 text-center font-medium text-white hover:bg-blue-700"
                >
                  Add New Application
                </Link>

                <Link
                  to="/applications"
                  className="block rounded-xl border py-3 text-center hover:bg-slate-50"
                >
                  Manage Applications
                </Link>

                <Link
                  to="/about"
                  className="block rounded-xl border py-3 text-center hover:bg-slate-50"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Activity */}

        <div className="mt-8 rounded-2xl bg-white p-8 shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-blue-600" />

              <h2 className="text-2xl font-bold">Weekly Activity</h2>
            </div>

            <Link
              to="/applications"
              className="rounded-lg border px-4 py-2 text-sm hover:bg-slate-100"
            >
              View Report
            </Link>
          </div>

          <div className="mt-8 flex h-64 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50">
            <div className="text-center">
              <TrendingUp size={50} className="mx-auto text-slate-400" />

              <p className="mt-3 text-slate-500">Weekly Activity Chart</p>

              <p className="text-sm text-slate-400">
                Integrate Recharts or Chart.js to display application
                statistics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
