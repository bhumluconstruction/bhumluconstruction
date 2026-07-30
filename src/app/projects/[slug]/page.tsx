import { notFound } from "next/navigation";
import Link from "next/link";
import Banner from "@/components/Banner";
import { projectsData } from "@/lib/constants/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Banner
        subtitle={`${project.eyebrow} · ${project.location}`}
        title={project.title}
      />

      <section style={{ background: "#F3F0E7", padding: "80px 0 110px" }}>
        <div className="wrap">
          {/* Back Navigation */}
          <Link
            href="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "IBM Plex Mono, monospace",
              fontSize: "13px",
              color: "#8A94A0",
              marginBottom: "40px",
              fontWeight: 600,
            }}
          >
            ← Back to All Projects
          </Link>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
            }}
          >
            {/* Main Details Panel */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                padding: "40px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
              }}
            >
              <h2
                style={{
                  fontFamily: "Big Shoulders Display, sans-serif",
                  fontSize: "32px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  marginBottom: "20px",
                  color: "#0E141B",
                }}
              >
                Project Overview
              </h2>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#4B5560",
                  marginBottom: "36px",
                }}
              >
                {project.scope}
              </p>

              <h3
                style={{
                  fontFamily: "Big Shoulders Display, sans-serif",
                  fontSize: "24px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  marginBottom: "16px",
                  color: "#0E141B",
                }}
              >
                Key deliverables
              </h3>

              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {project.details?.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                      fontSize: "14.5px",
                      color: "#4B5560",
                      lineHeight: "1.5",
                    }}
                  >
                    <span style={{ color: "#E85D04", fontWeight: "bold" }}>
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar Specifications */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <div
                style={{
                  background: "#FFFFFF",
                  borderRadius: "20px",
                  padding: "32px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "IBM Plex Mono, monospace",
                    fontSize: "12px",
                    letterSpacing: "0.15em",
                    color: "#8A94A0",
                    textTransform: "uppercase",
                    marginBottom: "24px",
                  }}
                >
                  Technical Specifications
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "11px",
                        fontFamily: "IBM Plex Mono",
                        color: "#8A94A0",
                        textTransform: "uppercase",
                      }}
                    >
                      Status
                    </span>
                    <span
                      style={{
                        display: "inline-block",
                        marginTop: "4px",
                        background: project.status === "Complete" ? "#ECFDF5" : project.status === "Planning" ? "#F3F4F6" : "#EBF3FE",
                        color: project.status === "Complete" ? "#065F46" : project.status === "Planning" ? "#374151" : "#1E40AF",
                        fontSize: "12px",
                        fontFamily: "IBM Plex Mono, monospace",
                        fontWeight: 600,
                        padding: "4px 10px",
                        borderRadius: "4px",
                      }}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "11px",
                        fontFamily: "IBM Plex Mono",
                        color: "#8A94A0",
                        textTransform: "uppercase",
                      }}
                    >
                      District / Location
                    </span>
                    <strong style={{ fontSize: "15px", color: "#0E141B" }}>
                      {project.location}
                    </strong>
                  </div>

                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "11px",
                        fontFamily: "IBM Plex Mono",
                        color: "#8A94A0",
                        textTransform: "uppercase",
                      }}
                    >
                      Timeline
                    </span>
                    <strong style={{ fontSize: "15px", color: "#0E141B" }}>
                      {project.timeline}
                    </strong>
                  </div>

                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "11px",
                        fontFamily: "IBM Plex Mono",
                        color: "#8A94A0",
                        textTransform: "uppercase",
                      }}
                    >
                      Outcome
                    </span>
                    <strong style={{ fontSize: "15px", color: "#0E141B" }}>
                      {project.outcome}
                    </strong>
                  </div>

                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "11px",
                        fontFamily: "IBM Plex Mono",
                        color: "#8A94A0",
                        textTransform: "uppercase",
                      }}
                    >
                      Client
                    </span>
                    <strong style={{ fontSize: "15px", color: "#0E141B" }}>
                      {project.client}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Consultation CTA */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #161E27 0%, #0E141B 100%)",
                  borderRadius: "20px",
                  padding: "32px",
                  color: "#F3F0E7",
                }}
              >
                <h4
                  style={{
                    fontFamily: "Big Shoulders Display, sans-serif",
                    fontSize: "24px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  Need a similar line surveyed?
                </h4>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "#8A94A0",
                    marginBottom: "20px",
                    lineHeight: "1.5",
                  }}
                >
                  Consult with our engineering team for terrain assessment and
                  preliminary scoping.
                </p>
                <Link
                  href="/contact"
                  className="btn btn-amber"
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: "#FF9F1C",
                    color: "#0E141B",
                    fontWeight: 700,
                    borderRadius: "8px",
                    padding: "12px",
                  }}
                >
                  Consult Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
