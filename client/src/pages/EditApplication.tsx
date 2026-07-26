import { useState } from "react";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Building2,
  Calendar,
  DollarSign,
  FileText,
  Globe,
  Link as LinkIcon,
  MapPin,
  Save,
  Trash2,
} from "lucide-react";
import { Link } from "react-router";

const EditApplication = () => {
  // Replace with API data
  const [formData, setFormData] = useState({
    company: "Google",
    position: "Frontend Developer",
    location: "Remote",
    salary: "$120,000",
    jobType: "Full Time",
    status: "Interview",
    applicationDate: "2026-07-20",
    interviewDate: "2026-07-30",
    jobUrl: "https://careers.google.com/jobs/frontend-developer",
    notes:
      "Prepare for React, TypeScript and System Design interview. Review performance optimization and data structures.",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO:
    // PUT /applications/:id

    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}

        <div className="mb-8 flex items-center justify-between">
          <div>
            <Link
              to="/applications/1"
              className="mb-3 inline-flex items-center gap-2 text-blue-600 hover:underline"
            >
              <ArrowLeft size={18} />
              Back to Details
            </Link>

            <h1 className="text-3xl font-bold text-slate-800">
              Edit Application
            </h1>

            <p className="mt-2 text-slate-500">
              Update your job application information.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-white hover:bg-red-700">
            <Trash2 size={18} />
            Delete
          </button>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-8 shadow-lg"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {/* Company */}

            <div>
              <label className="mb-2 block font-medium">Company Name</label>

              <div className="flex items-center rounded-xl border px-4">
                <Building2 size={18} className="text-slate-400" />

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-3 outline-none"
                />
              </div>
            </div>

            {/* Position */}

            <div>
              <label className="mb-2 block font-medium">Position</label>

              <div className="flex items-center rounded-xl border px-4">
                <BriefcaseBusiness size={18} className="text-slate-400" />

                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-3 py-3 outline-none"
                />
              </div>
            </div>

            {/* Location */}

            <div>
              <label className="mb-2 block font-medium">Location</label>

              <div className="flex items-center rounded-xl border px-4">
                <MapPin size={18} className="text-slate-400" />

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3 py-3 outline-none"
                />
              </div>
            </div>

            {/* Salary */}

            <div>
              <label className="mb-2 block font-medium">Salary</label>

              <div className="flex items-center rounded-xl border px-4">
                <DollarSign size={18} className="text-slate-400" />

                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  className="w-full px-3 py-3 outline-none"
                />
              </div>
            </div>

            {/* Job Type */}

            <div>
              <label className="mb-2 block font-medium">Job Type</label>

              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3 outline-none"
              >
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Internship</option>
                <option>Contract</option>
                <option>Remote</option>
              </select>
            </div>

            {/* Status */}

            <div>
              <label className="mb-2 block font-medium">Status</label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3 outline-none"
              >
                <option>Applied</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
              </select>
            </div>

            {/* Applied Date */}

            <div>
              <label className="mb-2 block font-medium">Applied Date</label>

              <div className="flex items-center rounded-xl border px-4">
                <Calendar size={18} className="text-slate-400" />

                <input
                  type="date"
                  name="applicationDate"
                  value={formData.applicationDate}
                  onChange={handleChange}
                  className="w-full px-3 py-3 outline-none"
                />
              </div>
            </div>

            {/* Interview */}

            <div>
              <label className="mb-2 block font-medium">Interview Date</label>

              <div className="flex items-center rounded-xl border px-4">
                <Calendar size={18} className="text-slate-400" />

                <input
                  type="date"
                  name="interviewDate"
                  value={formData.interviewDate}
                  onChange={handleChange}
                  className="w-full px-3 py-3 outline-none"
                />
              </div>
            </div>

            {/* URL */}

            <div className="md:col-span-2">
              <label className="mb-2 block font-medium">Job Posting URL</label>

              <div className="flex items-center rounded-xl border px-4">
                <Globe size={18} className="text-slate-400" />

                <LinkIcon size={16} className="mx-2 text-slate-400" />

                <input
                  type="url"
                  name="jobUrl"
                  value={formData.jobUrl}
                  onChange={handleChange}
                  className="w-full px-3 py-3 outline-none"
                />
              </div>
            </div>

            {/* Notes */}

            <div className="md:col-span-2">
              <label className="mb-2 block font-medium">Notes</label>

              <div className="flex rounded-xl border p-4">
                <FileText size={18} className="mt-1 text-slate-400" />

                <textarea
                  rows={6}
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full resize-none px-3 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Footer */}

          <div className="mt-8 flex flex-col-reverse gap-4 border-t pt-6 sm:flex-row sm:justify-end">
            <Link
              to="/applications/1"
              className="rounded-xl border px-6 py-3 text-center font-medium hover:bg-slate-100"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              <Save size={18} />
              Update Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditApplication;
