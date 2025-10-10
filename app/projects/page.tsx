'use client';

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function ExampleProjectsPage() {
  const projects = [
    {
      name: "Content Planning",
      repo: "https://github.com/gilangarta06/content-planning",
      description:
        "Sistem perencanaan konten untuk mengatur ide, jadwal, dan publikasi konten dengan alur kerja yang efisien.",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn/UI"],
    },
    {
      name: "Gastore",
      repo: "https://github.com/gilangarta06/gastore",
      description:
        "Platform e-commerce berbasis Next.js untuk penjualan digital dan integrasi pembayaran modern.",
      tech: ["Next.js", "TypeScript", "Shadcn/UI", "Recharts"],
    },
  ];

  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-bold">Example Projects</h1>
        <p className="text-muted-foreground mt-2">
          Kumpulan proyek pribadi dan eksperimen yang dibuat dengan Next.js, TypeScript, dan Shadcn UI.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="text-xs bg-muted px-2 py-1 rounded-md border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" asChild>
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}
