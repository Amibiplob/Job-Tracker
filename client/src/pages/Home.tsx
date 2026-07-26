import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router";

const Home = () => {
  const stats = [
    {
      title: "Applications",
      value: "2,500+",
      icon: BriefcaseBusiness,
    },
    {
      title: "Active Users",
      value: "1,200+",
      icon: Users,
    },
    {
      title: "Companies",
      value: "800+",
      icon: CheckCircle2,
    },
    {
      title: "Success Rate",
      value: "95%",
      icon: TrendingUp,
    },
  ];

  const features = [
    {
      title: "Track Applications",
      description:
        "Save company, position, location, salary and application links in one place.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Interview Schedule",
      description:
        "Never miss interviews with organized application timelines.",
      icon: CalendarDays,
    },
    {
      title: "Search & Filter",
      description:
        "Quickly find jobs using company, status or position filters.",
      icon: Search,
    },
    {
      title: "Secure Data",
      description:
        "Every user can access only their own applications securely.",
      icon: ShieldCheck,
    },
  ];

  return (
    <main className="bg-slate-50">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left */}
          <div>
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
              🚀 Organize Your Job Search
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight">
              Track Every Job
              <br />
              Application
              <span className="text-blue-200"> in One Place</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-blue-100">
              Manage job applications, monitor interview progress, organize
              company information, and stay focused on landing your dream job.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-100"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="flex items-center gap-2 rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue-700"
              >
                Login
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="mt-16 lg:mt-0">
            <div className="rounded-3xl bg-white p-6 text-slate-700 shadow-2xl">
              <h3 className="text-xl font-bold">Job Tracker Dashboard</h3>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between rounded-xl bg-green-50 p-4">
                  <div>
                    <p className="font-semibold">Frontend Developer</p>
                    <p className="text-sm text-slate-500">Google</p>
                  </div>

                  <span className="rounded-full bg-green-200 px-3 my-auto py-2 text-sm">
                    Applied
                  </span>
                </div>

                <div className="flex justify-between rounded-xl bg-yellow-50 p-4">
                  <div>
                    <p className="font-semibold">React Developer</p>
                    <p className="text-sm text-slate-500">Microsoft</p>
                  </div>

                  <span className="rounded-full bg-yellow-200 px-3 my-auto py-2 text-sm">
                    Interview
                  </span>
                </div>

                <div className="flex justify-between rounded-xl bg-blue-50 p-4">
                  <div>
                    <p className="font-semibold">Full Stack Developer</p>
                    <p className="text-sm text-slate-500">Amazon</p>
                  </div>

                  <span className="rounded-full bg-blue-200 px-3 my-auto py-2 text-sm">
                    Offer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="container mx-auto -mt-12 px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 text-center shadow-lg"
              >
                <Icon className="mx-auto mb-3 text-blue-600" size={40} />

                <h2 className="text-3xl font-bold">{item.value}</h2>

                <p className="mt-2 text-slate-500">{item.title}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Everything You Need</h2>

          <p className="mt-4 text-slate-500">
            Manage your entire job search from a single dashboard.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex rounded-xl bg-blue-100 p-4 text-blue-600">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold">{feature.title}</h3>

                <p className="mt-3 text-slate-500">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl font-bold">How It Works</h2>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Create Account",
                text: "Register in seconds and access your personal dashboard.",
              },
              {
                number: "02",
                title: "Add Applications",
                text: "Save company details, links, dates and current status.",
              },
              {
                number: "03",
                title: "Track Progress",
                text: "Monitor interviews, offers and rejected applications easily.",
              },
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                  {step.number}
                </div>

                <h3 className="mt-6 text-2xl font-semibold">{step.title}</h3>

                <p className="mt-3 text-slate-500">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-700 py-24 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold">Ready to Land Your Dream Job?</h2>

          <p className="mt-6 text-lg text-blue-100">
            Stay organized, monitor every application, and increase your chances
            of getting hired.
          </p>

          <Link
            to="/register"
            className="mt-10 inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-blue-100"
          >
            Start Tracking Today
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
