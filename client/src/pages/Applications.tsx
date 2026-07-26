import {
  BriefcaseBusiness,
  Building2,
  Calendar,
  Eye,
  Filter,
  MapPin,
  Pencil,
  Plus,
  Search,
  Trash2,
} from "lucide-react";

const Applications = () => {
  const applications = [
    {
      id: 1,
      company: "Google",
      position: "Frontend Developer",
      location: "Remote",
      salary: "$120k",
      appliedDate: "Jul 20, 2026",
      status: "Interview",
    },
    {
      id: 2,
      company: "Microsoft",
      position: "React Developer",
      location: "Seattle, USA",
      salary: "$115k",
      appliedDate: "Jul 18, 2026",
      status: "Applied",
    },
    {
      id: 3,
      company: "Amazon",
      position: "Full Stack Developer",
      location: "Remote",
      salary: "$130k",
      appliedDate: "Jul 15, 2026",
      status: "Offer",
    },
    {
      id: 4,
      company: "Netflix",
      position: "Software Engineer",
      location: "California",
      salary: "$140k",
      appliedDate: "Jul 10, 2026",
      status: "Rejected",
    },
    {
      id: 5,
      company: "Meta",
      position: "Frontend Engineer",
      location: "Remote",
      salary: "$125k",
      appliedDate: "Jul 08, 2026",
      status: "Interview",
    },
  ];

  const statusStyle = (status: string) => {
    switch (status) {
      case "Applied":
        return "bg-blue-100 text-blue-700";
      case "Interview":
        return "bg-yellow-100 text-yellow-700";
      case "Offer":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl p-6">
        {/* Header */}

        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Applications</h1>

            <p className="mt-2 text-slate-500">
              Manage and track all your job applications.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700">
            <Plus size={18} />
            Add Application
          </button>
        </div>

        {/* Search & Filter */}

        <div className="mt-8 rounded-2xl bg-white p-5 shadow">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search company or position..."
                className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none focus:border-blue-500"
              />
            </div>

            <select className="rounded-xl border px-4 py-3 outline-none">
              <option>All Status</option>
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>

            <button className="flex items-center justify-center gap-2 rounded-xl border px-5 py-3 hover:bg-slate-100">
              <Filter size={18} />
              Filter
            </button>
          </div>
        </div>

        {/* Table */}

        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr className="text-left text-slate-600">
                  <th className="px-6 py-4">Company</th>
                  <th className="px-6 py-4">Position</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Salary</th>
                  <th className="px-6 py-4">Applied</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {applications.map((job) => (
                  <tr key={job.id} className="border-t hover:bg-slate-50">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                          <Building2 size={20} />
                        </div>

                        <div>
                          <h3 className="font-semibold">{job.company}</h3>

                          <p className="text-sm text-slate-500">Company</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 font-medium">{job.position}</td>

                    <td className="px-6">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {job.location}
                      </div>
                    </td>

                    <td className="px-6">{job.salary}</td>

                    <td className="px-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {job.appliedDate}
                      </div>
                    </td>

                    <td className="px-6">
                      <span
                        className={`rounded-full px-4 py-2 text-sm font-medium ${statusStyle(
                          job.status,
                        )}`}
                      >
                        {job.status}
                      </span>
                    </td>

                    <td className="px-6">
                      <div className="flex justify-center gap-2">
                        <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-100">
                          <Eye size={18} />
                        </button>

                        <button className="rounded-lg p-2 text-green-600 hover:bg-green-100">
                          <Pencil size={18} />
                        </button>

                        <button className="rounded-lg p-2 text-red-600 hover:bg-red-100">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State Example */}

        <div className="mt-10 rounded-2xl border-2 border-dashed border-slate-300 bg-white p-10 text-center">
          <BriefcaseBusiness size={60} className="mx-auto text-slate-400" />

          <h2 className="mt-4 text-2xl font-bold text-slate-700">
            Looking for your next opportunity?
          </h2>

          <p className="mt-2 text-slate-500">
            Add your first application and start tracking your interview
            journey.
          </p>

          <button className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
            Add New Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default Applications;
