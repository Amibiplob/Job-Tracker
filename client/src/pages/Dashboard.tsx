import {
  BriefcaseBusiness,
  CalendarDays,
  CircleCheckBig,
  Clock3,
  Plus,
  Search,
  TrendingUp,
  XCircle,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Applications",
      value: 48,
      icon: BriefcaseBusiness,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Interviews",
      value: 8,
      icon: CalendarDays,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Offers",
      value: 3,
      icon: CircleCheckBig,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Rejected",
      value: 12,
      icon: XCircle,
      color: "bg-red-100 text-red-600",
    },
  ];

  const jobs = [
    {
      company: "Google",
      role: "Frontend Developer",
      status: "Interview",
      date: "July 30",
    },
    {
      company: "Microsoft",
      role: "React Developer",
      status: "Applied",
      date: "July 28",
    },
    {
      company: "Amazon",
      role: "Full Stack Developer",
      status: "Offer",
      date: "July 25",
    },
    {
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

            <p className="mt-1 text-slate-500">
              Welcome back! Here's your job search overview.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">
            <Plus size={18} />
            Add Application
          </button>
        </div>

        {/* Stats */}

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-500">{item.title}</p>

                    <h2 className="mt-2 text-4xl font-bold">{item.value}</h2>
                  </div>

                  <div className={`rounded-xl p-4 ${item.color}`}>
                    <Icon size={28} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Grid */}

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Recent Applications */}

          <div className="rounded-2xl bg-white p-6 shadow lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold">Recent Applications</h2>

              <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-slate-100">
                <Search size={16} />
                Search
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left">
                    <th className="pb-3">Company</th>
                    <th className="pb-3">Position</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Date</th>
                  </tr>
                </thead>

                <tbody>
                  {jobs.map((job) => (
                    <tr
                      key={job.company}
                      className="border-b hover:bg-slate-50"
                    >
                      <td className="py-4 font-medium">{job.company}</td>

                      <td>{job.role}</td>

                      <td>
                        <span
                          className={`rounded-full px-3 py-1 text-sm ${
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Sidebar */}

          <div className="space-y-6">
            {/* Upcoming Interviews */}

            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="text-xl font-bold">Upcoming Interviews</h2>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl bg-yellow-50 p-4">
                  <p className="font-semibold">Google</p>

                  <p className="text-sm text-slate-500">Frontend Developer</p>

                  <div className="mt-2 flex items-center gap-2 text-sm text-yellow-700">
                    <Clock3 size={16} />
                    Tomorrow • 10:00 AM
                  </div>
                </div>

                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="font-semibold">Microsoft</p>

                  <p className="text-sm text-slate-500">React Developer</p>

                  <div className="mt-2 flex items-center gap-2 text-sm text-blue-700">
                    <Clock3 size={16} />
                    Friday • 2:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Status */}

            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="text-xl font-bold mb-6">Application Status</h2>

              <div className="space-y-5">
                <div>
                  <div className="mb-2 flex justify-between">
                    <span>Applied</span>
                    <span>60%</span>
                  </div>

                  <div className="h-2 rounded bg-slate-200">
                    <div className="h-2 w-3/5 rounded bg-blue-600"></div>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between">
                    <span>Interview</span>
                    <span>20%</span>
                  </div>

                  <div className="h-2 rounded bg-slate-200">
                    <div className="h-2 w-1/5 rounded bg-yellow-500"></div>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between">
                    <span>Offer</span>
                    <span>10%</span>
                  </div>

                  <div className="h-2 rounded bg-slate-200">
                    <div className="h-2 w-[10%] rounded bg-green-500"></div>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between">
                    <span>Rejected</span>
                    <span>10%</span>
                  </div>

                  <div className="h-2 rounded bg-slate-200">
                    <div className="h-2 w-[10%] rounded bg-red-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity */}

        <div className="mt-8 rounded-2xl bg-white p-8 shadow">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-blue-600" />
            <h2 className="text-2xl font-bold">Weekly Activity</h2>
          </div>

          <div className="mt-8 flex h-64 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50">
            <div className="text-center">
              <TrendingUp size={50} className="mx-auto text-slate-400" />

              <p className="mt-3 text-slate-500">Chart Placeholder</p>

              <p className="text-sm text-slate-400">
                Recharts / Chart.js can be added here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
