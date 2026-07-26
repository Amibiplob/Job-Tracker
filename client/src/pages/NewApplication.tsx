import { useState } from "react";
import {
  BriefcaseBusiness,
  Building2,
  Calendar,
  DollarSign,
  FileText,
  Globe,
  Link as LinkIcon,
  MapPin,
  Save,
} from "lucide-react";

const NewApplication = () => {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    location: "",
    salary: "",
    jobType: "",
    status: "Applied",
    applicationDate: "",
    interviewDate: "",
    jobUrl: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Add New Application
          </h1>

          <p className="mt-2 text-slate-500">
            Save a new job application and track every step of your hiring
            journey.
          </p>
        </div>

        {/* Form */}

        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <form className="space-y-8">
            {/* Job Information */}

            <div>
              <h2 className="mb-6 text-xl font-semibold">Job Information</h2>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Company */}

                <div>
                  <label className="mb-2 block font-medium">Company Name</label>

                  <div className="flex items-center rounded-xl border px-4">
                    <Building2 className="text-slate-400" size={18} />

                    <input
                      type="text"
                      name="company"
                      placeholder="Google"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-3 outline-none"
                    />
                  </div>
                </div>

                {/* Position */}

                <div>
                  <label className="mb-2 block font-medium">Job Position</label>

                  <div className="flex items-center rounded-xl border px-4">
                    <BriefcaseBusiness className="text-slate-400" size={18} />

                    <input
                      type="text"
                      name="position"
                      placeholder="Frontend Developer"
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
                    <MapPin className="text-slate-400" size={18} />

                    <input
                      type="text"
                      name="location"
                      placeholder="Remote"
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
                    <DollarSign className="text-slate-400" size={18} />

                    <input
                      type="text"
                      name="salary"
                      placeholder="$120,000"
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
                    <option value="">Select Type</option>
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

                {/* Application Date */}

                <div>
                  <label className="mb-2 block font-medium">Applied Date</label>

                  <div className="flex items-center rounded-xl border px-4">
                    <Calendar className="text-slate-400" size={18} />

                    <input
                      type="date"
                      name="applicationDate"
                      value={formData.applicationDate}
                      onChange={handleChange}
                      className="w-full px-3 py-3 outline-none"
                    />
                  </div>
                </div>

                {/* Interview Date */}

                <div>
                  <label className="mb-2 block font-medium">
                    Interview Date
                  </label>

                  <div className="flex items-center rounded-xl border px-4">
                    <Calendar className="text-slate-400" size={18} />

                    <input
                      type="date"
                      name="interviewDate"
                      value={formData.interviewDate}
                      onChange={handleChange}
                      className="w-full px-3 py-3 outline-none"
                    />
                  </div>
                </div>

                {/* Job URL */}

                <div className="md:col-span-2">
                  <label className="mb-2 block font-medium">
                    Job Posting URL
                  </label>

                  <div className="flex items-center rounded-xl border px-4">
                    <Globe className="text-slate-400" size={18} />
                    <LinkIcon className="mr-2 text-slate-400" size={16} />

                    <input
                      type="url"
                      name="jobUrl"
                      placeholder="https://company.com/job"
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
                    <FileText className="mt-1 text-slate-400" size={18} />

                    <textarea
                      rows={5}
                      name="notes"
                      placeholder="Write interview notes, recruiter information, follow-up reminders..."
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full resize-none px-3 outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}

            <div className="flex flex-col justify-end gap-4 border-t pt-6 sm:flex-row">
              <button
                type="button"
                className="rounded-xl border px-6 py-3 font-medium hover:bg-slate-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                <Save size={18} />
                Save Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewApplication;
