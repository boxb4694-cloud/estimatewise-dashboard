import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Estimato — Project Estimation Dashboard" },
      { name: "description", content: "Beautiful SaaS-style project estimation tool. Calculate hours, cost, and timeline instantly." },
    ],
  }),
});

// The full app is a single-file vanilla HTML/Tailwind/JS bundle in /public/estimator.html.
// We render it full-screen via an iframe so the deployed preview shows the dashboard.
function Index() {
  return (
    <iframe
      src="/estimator.html"
      title="Estimato"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  );
}
