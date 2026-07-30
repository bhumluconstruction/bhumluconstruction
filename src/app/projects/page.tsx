import Link from "next/link";
import Banner from "@/components/Banner";
import { projectsData } from "@/lib/constants/data";

export default function ProjectsPage() {
  return (
    <>
      <Banner
        subtitle="Selected Work"
        title="Featured Projects."
      />

      <section style={{ background: "#F3F0E7", padding: "80px 0 110px" }}>
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
            }}
          >
            {projectsData.map((project) => (
              <div
                key={project.slug}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "20px",
                  padding: "36px 32px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "340px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "IBM Plex Mono, monospace",
                      fontSize: "12px",
                      letterSpacing: "0.15em",
                      color: "#E85D04",
                      fontWeight: 600,
                      marginBottom: "16px",
                    }}
                  >
                    {project.eyebrow}
                  </div>

                  <h3
                    style={{
                      fontFamily: "Big Shoulders Display, sans-serif",
                      fontSize: "28px",
                      fontWeight: 800,
                      color: "#0E141B",
                      marginBottom: "10px",
                    }}
                  >
                    {project.title}
                  </h3>

                  <div
                    style={{
                      fontSize: "14px",
                      color: "#8A94A0",
                      marginBottom: "16px",
                      fontWeight: 500,
                    }}
                  >
                    {project.location}
                  </div>

                  <p
                    style={{
                      fontSize: "14.5px",
                      lineHeight: "1.6",
                      color: "#4B5560",
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "32px",
                    paddingTop: "20px",
                  }}
                >
                  <span
                    style={{
                      background: project.status === "Complete" ? "#ECFDF5" : project.status === "Planning" ? "#F3F4F6" : "#EBF3FE",
                      color: project.status === "Complete" ? "#065F46" : project.status === "Planning" ? "#374151" : "#1E40AF",
                      fontSize: "12px",
                      fontFamily: "IBM Plex Mono, monospace",
                      fontWeight: 600,
                      padding: "6px 14px",
                      borderRadius: "6px",
                    }}
                  >
                    {project.status}
                  </span>

                  <Link
                    href={project.href ?? `/projects/${project.slug}`}
                    style={{
                      background: "#FF9F1C",
                      color: "#0E141B",
                      fontWeight: 700,
                      borderRadius: "8px",
                      padding: "10px 20px",
                      fontSize: "13px",
                      textDecoration: "none",
                    }}
                  >
                    View project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
