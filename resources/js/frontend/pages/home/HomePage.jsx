import React, { useState } from 'react';

const themes = ['forest', 'dark', 'light'];

const services = [
    { name: 'Web Development', detail: 'Custom business websites and portals' },
    { name: 'Mobile App Teams', detail: 'Cross-platform product delivery partners' },
    { name: 'AI Automation', detail: 'Vendors for chatbots, workflow and support AI' },
    { name: 'Marketing Agencies', detail: 'SEO, paid ads and growth specialists' },
    { name: 'Design Studios', detail: 'Brand, UI/UX and product design experts' },
    { name: 'Cloud Consulting', detail: 'AWS, GCP and infrastructure migration firms' },
];

const companies = [
    { name: 'Northlane Digital', tag: 'Web + AI', score: '94%' },
    { name: 'CloudArc Studio', tag: 'Cloud Infra', score: '91%' },
    { name: 'PixelMint Agency', tag: 'Brand + UX', score: '89%' },
];

function HomePage() {
    const [theme, setTheme] = useState('forest');

    return (
        <main data-theme={theme} className="min-h-screen bg-base-100 text-base-content">
            <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_15%_20%,rgba(34,197,94,.35)_0%,transparent_30%),radial-gradient(circle_at_85%_15%,rgba(59,130,246,.22)_0%,transparent_35%)]" />

            <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
                <header className="navbar rounded-2xl border border-base-300/60 bg-base-100/60 shadow-sm backdrop-blur">
                    <div className="navbar-start">
                        <a className="btn btn-ghost text-lg font-semibold">Rimel Services</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-sm">
                            <li><a>Home</a></li>
                            <li><a>Services</a></li>
                            <li><a>How It Works</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-2">
                        {themes.map((item) => (
                            <button
                                key={item}
                                type="button"
                                className={`btn btn-sm ${theme === item ? 'btn-success' : 'btn-ghost'}`}
                                onClick={() => setTheme(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </header>

                <section className="mt-12 grid items-start gap-8 lg:grid-cols-2">
                    <div>
                        <div className="badge badge-outline mb-4 p-4 text-xs">AI-driven company matching platform</div>
                        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                            Find the right <span className="text-success">service company</span> in minutes
                        </h1>
                        <p className="mt-4 max-w-xl text-base-content/75">
                            Clients describe what they need. AI analyzes the request and returns the best-fit company list with relevance scores.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <button className="btn btn-success">Start Search</button>
                            <button className="btn btn-outline">View Services</button>
                        </div>

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-xl border border-base-300 bg-base-100/70 p-4">
                                <p className="text-xs text-base-content/60">Services</p>
                                <p className="text-2xl font-bold">25+</p>
                            </div>
                            <div className="rounded-xl border border-base-300 bg-base-100/70 p-4">
                                <p className="text-xs text-base-content/60">Companies</p>
                                <p className="text-2xl font-bold">500+</p>
                            </div>
                            <div className="rounded-xl border border-base-300 bg-base-100/70 p-4">
                                <p className="text-xs text-base-content/60">Avg match score</p>
                                <p className="text-2xl font-bold">92%</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-base-300 bg-base-100/80 p-6 shadow-xl">
                        <p className="mb-2 text-sm font-semibold">Ask AI</p>
                        <textarea
                            className="textarea textarea-bordered h-32 w-full"
                            placeholder="Example: I need a Laravel + React agency in Bangladesh with strong API and dashboard delivery."
                            readOnly
                        />
                        <div className="mt-4 flex gap-3">
                            <button className="btn btn-success">Generate Companies</button>
                            <button className="btn btn-ghost">Clear</button>
                        </div>
                        <div className="mt-6 space-y-3">
                            {companies.map((company) => (
                                <div key={company.name} className="flex items-center justify-between rounded-lg border border-base-300 p-3">
                                    <div>
                                        <p className="font-medium">{company.name}</p>
                                        <p className="text-xs text-base-content/60">{company.tag}</p>
                                    </div>
                                    <div className="badge badge-success badge-outline">{company.score}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mt-14">
                    <h2 className="text-2xl font-semibold">Services Clients Search For</h2>
                    <p className="mt-2 text-base-content/70">UI blocks for your service categories. Replace with real data later.</p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <article key={service.name} className="card border border-base-300 bg-base-100/70 shadow">
                                <div className="card-body">
                                    <h3 className="card-title text-lg">{service.name}</h3>
                                    <p className="text-sm text-base-content/70">{service.detail}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-sm btn-outline">Explore</button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}

export default HomePage;
