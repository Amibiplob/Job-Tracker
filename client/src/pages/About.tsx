import {
  BriefcaseBusiness,
  CheckCircle2,
  Target,
  Users,
  TrendingUp,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: BriefcaseBusiness,
      title: "Track Applications",
      description:
        "Keep all your job applications organized in one place with complete details.",
    },
    {
      icon: Target,
      title: "Monitor Progress",
      description:
        "Track every stage from Applied to Interview, Offer, and Hired.",
    },
    {
      icon: TrendingUp,
      title: "Analyze Performance",
      description:
        "View insights into your applications and improve your job search strategy.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Private",
      description:
        "Your job applications are securely stored and only accessible by you.",
    },
  ];

  const stats = [
    {
      title: "Applications Managed",
      value: "2,500+",
    },
    {
      title: "Active Users",
      value: "1,200+",
    },
    {
      title: "Companies",
      value: "800+",
    },
    {
      title: "Success Rate",
      value: "95%",
    },
  ];

  return (
    <div className="bg-slate-50">
      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-24 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
            <BriefcaseBusiness size={42} />
          </div>

          <h1 className="mt-8 text-5xl font-bold">About Job Tracker</h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Job Tracker is a simple and powerful platform that helps job seekers
            organize applications, monitor interview progress, and stay focused
            throughout their career journey.
          </p>
        </div>
      </section>

      {/* Mission */}

      <section className="container mx-auto px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              Our Mission
            </span>

            <h2 className="mt-6 text-4xl font-bold">
              Simplifying Your Job Search
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Managing multiple job applications can become overwhelming. Job
              Tracker helps you organize every application, schedule interviews,
              save recruiter information, and monitor your progress—all from one
              modern dashboard.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" />
                Easy application management
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" />
                Interview tracking
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" />
                Career progress insights
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" />
                Secure personal dashboard
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl">
            <div className="space-y-6">
              <div className="rounded-xl bg-blue-50 p-5">
                <h3 className="font-semibold">Applied</h3>
                <p className="text-slate-500">24 Applications</p>
              </div>

              <div className="rounded-xl bg-yellow-50 p-5">
                <h3 className="font-semibold">Interviews</h3>
                <p className="text-slate-500">8 Scheduled</p>
              </div>

              <div className="rounded-xl bg-green-50 p-5">
                <h3 className="font-semibold">Offers</h3>
                <p className="text-slate-500">3 Job Offers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}

      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Why Choose Job Tracker?</h2>

            <p className="mt-4 text-slate-500">
              Everything you need to manage your job search efficiently.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-slate-50 p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-xl font-semibold">{feature.title}</h3>

                  <p className="mt-4 text-slate-500">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="rounded-2xl bg-white p-8 text-center shadow"
              >
                <h2 className="text-4xl font-bold text-blue-600">
                  {stat.value}
                </h2>

                <p className="mt-3 text-slate-500">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}

      <section className="bg-blue-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Rocket className="mx-auto mb-6" size={60} />

          <h2 className="text-4xl font-bold">Our Vision</h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            We believe every job seeker deserves an organized and stress-free
            experience. Our goal is to provide a clean, intuitive platform that
            helps users focus on preparing for opportunities instead of managing
            spreadsheets and notes.
          </p>
        </div>
      </section>

      {/* Team */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Users size={60} className="mx-auto text-blue-600" />

          <h2 className="mt-6 text-4xl font-bold">
            Built for Every Job Seeker
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you're applying for your first internship, searching for a
            remote developer role, or planning your next career move, Job
            Tracker helps you stay organized and confident throughout the hiring
            process.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
