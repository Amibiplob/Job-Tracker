import {
  ArrowLeft,
  BriefcaseBusiness,
  Building2,
  Calendar,
  Clock3,
  DollarSign,
  ExternalLink,
  FileText,
  Globe,
  Mail,
  MapPin,
  Pencil,
  Phone,
  Trash2,
  User,
} from "lucide-react";
import { Link } from "react-router";

const ApplicationDetails = () => {
  // Replace with API data
  const application = {
    id: 1,
    company: "Google",
    position: "Frontend Developer",
    status: "Interview",
    location: "Remote",
    salary: "$120,000/year",
    jobType: "Full Time",
    appliedDate: "July 20, 2026",
    interviewDate: "July 30, 2026 • 10:00 AM",
    recruiter: "Sarah Johnson",
    recruiterEmail: "sarah@google.com",
    recruiterPhone: "+1 (555) 123-4567",
    jobUrl: "https://careers.google.com/jobs/frontend-developer",
    notes:
      "Completed the online assessment successfully. First technical interview is scheduled for next week. Need to review React performance optimization, TypeScript advanced types, and system design fundamentals before the interview.",
    timeline: [
      {
        title: "Application Submitted",
        date: "July 20, 2026",
      },
      {
        title: "Application Viewed",
        date: "July 22, 2026",
      },
      {
        title: "HR Screening",
        date: "July 25, 2026",
      },
      {
        title: "Technical Interview Scheduled",
        date: "July 27, 2026",
      },
    ],
  };

  const badgeStyle = () => {
    switch (application.status) {
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

        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Link
              to="/applications"
              className="mb-4 inline-flex items-center gap-2 text-blue-600 hover:underline"
            >
              <ArrowLeft size={18} />
              Back to Applications
            </Link>

            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
                <Building2 size={30} />
              </div>

              <div>
                <h1 className="text-3xl font-bold">{application.position}</h1>

                <p className="mt-1 text-slate-500">{application.company}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-xl border px-5 py-3 hover:bg-white">
              <Pencil size={18} />
              Edit
            </button>

            <button className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-white hover:bg-red-700">
              <Trash2 size={18} />
              Delete
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left */}

          <div className="space-y-6 lg:col-span-2">
            {/* Job Info */}

            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="mb-6 text-xl font-bold">Job Information</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <Info
                  icon={<Building2 size={18} />}
                  title="Company"
                  value={application.company}
                />

                <Info
                  icon={<BriefcaseBusiness size={18} />}
                  title="Position"
                  value={application.position}
                />

                <Info
                  icon={<MapPin size={18} />}
                  title="Location"
                  value={application.location}
                />

                <Info
                  icon={<DollarSign size={18} />}
                  title="Salary"
                  value={application.salary}
                />

                <Info
                  icon={<Calendar size={18} />}
                  title="Applied Date"
                  value={application.appliedDate}
                />

                <Info
                  icon={<Clock3 size={18} />}
                  title="Interview"
                  value={application.interviewDate}
                />

                <Info
                  icon={<BriefcaseBusiness size={18} />}
                  title="Job Type"
                  value={application.jobType}
                />

                <div>
                  <p className="mb-2 text-sm text-slate-500">Status</p>

                  <span
                    className={`rounded-full px-4 py-2 font-medium ${badgeStyle()}`}
                  >
                    {application.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Notes */}

            <div className="rounded-2xl bg-white p-6 shadow">
              <div className="mb-4 flex items-center gap-3">
                <FileText className="text-blue-600" />
                <h2 className="text-xl font-bold">Notes</h2>
              </div>

              <p className="leading-8 text-slate-600">{application.notes}</p>
            </div>

            {/* Timeline */}

            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="mb-6 text-xl font-bold">Application Timeline</h2>

              <div className="space-y-6">
                {application.timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-4 rounded-full bg-blue-600" />

                      {index !== application.timeline.length - 1 && (
                        <div className="h-16 w-1 bg-slate-200" />
                      )}
                    </div>

                    <div>
                      <h3 className="font-semibold">{item.title}</h3>

                      <p className="text-sm text-slate-500">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="space-y-6">
            {/* Recruiter */}

            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="mb-5 text-xl font-bold">Recruiter</h2>

              <div className="space-y-4">
                <Info
                  icon={<User size={18} />}
                  title="Name"
                  value={application.recruiter}
                />

                <Info
                  icon={<Mail size={18} />}
                  title="Email"
                  value={application.recruiterEmail}
                />

                <Info
                  icon={<Phone size={18} />}
                  title="Phone"
                  value={application.recruiterPhone}
                />
              </div>
            </div>

            {/* Job Link */}

            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="mb-5 text-xl font-bold">Job Posting</h2>

              <a
                href={application.jobUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 text-blue-700 transition hover:bg-blue-100"
              >
                <Globe size={20} />

                <span className="flex-1 truncate">View Original Job</span>

                <ExternalLink size={18} />
              </a>
            </div>

            {/* Quick Actions */}

            <div className="rounded-2xl bg-white p-6 shadow">
              <h2 className="mb-5 text-xl font-bold">Quick Actions</h2>

              <div className="space-y-3">
                <button className="w-full rounded-xl bg-blue-600 py-3 font-medium text-white hover:bg-blue-700">
                  Update Status
                </button>

                <button className="w-full rounded-xl border py-3 hover:bg-slate-50">
                  Schedule Interview
                </button>

                <button className="w-full rounded-xl border py-3 hover:bg-slate-50">
                  Add Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type InfoProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

const Info = ({ icon, title, value }: InfoProps) => (
  <div>
    <div className="mb-2 flex items-center gap-2 text-slate-500">
      {icon}
      <span className="text-sm">{title}</span>
    </div>

    <p className="font-semibold text-slate-800">{value}</p>
  </div>
);

export default ApplicationDetails;
