import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Code2,
  Layers,
  Terminal,
  Lightbulb,
  BookText,
  FolderKanban,
} from "lucide-react";

export default function Home() {
  const sections = [
    {
      title: "Github",
      href: "/github",
      desc: "Panduan lengkap Git & GitHub untuk workflow kolaboratif, branching, hingga rollback.",
      icon: <Github className="h-5 w-5" />,
      tag: "Version Control",
    },
    {
      title: "Next.js",
      href: "/nextjs",
      desc: "Setup, struktur folder, routing, dan API Routes dengan Next.js + TypeScript.",
      icon: <Code2 className="h-5 w-5" />,
      tag: "Framework",
    },
    {
      title: "Shadcn UI",
      href: "/shadcn",
      desc: "Gunakan komponen siap pakai berbasis TailwindCSS untuk mempercepat pembuatan UI.",
      icon: <Layers className="h-5 w-5" />,
      tag: "UI Library",
    },
    {
      title: "Productivity / Tools",
      href: "/tools",
      desc: "Tips & trik produktivitas seperti VSCode setup, Git workflow, dan terminal shortcuts.",
      icon: <Terminal className="h-5 w-5" />,
      tag: "Tools",
    },
    {
      title: "Projects",
      href: "/projects",
      desc: "Kumpulan proyek nyata berbasis Next.js, TypeScript, dan Shadcn UI.",
      icon: <FolderKanban className="h-5 w-5" />,
      tag: "Examples",
    },
    {
      title: "Notes / Snippets",
      href: "/notes",
      desc: "Kumpulan potongan kode dan komponen reusable untuk mempercepat development.",
      icon: <BookText className="h-5 w-5" />,
      tag: "Snippets",
    },
  ];

  const projects = [
    {
      name: "Content Planning",
      desc: "Sistem perencanaan konten berbasis Next.js + TypeScript untuk membantu tim kreatif mengelola ide dan workflow konten.",
      tech: ["Next.js", "TypeScript", "TailwindCSS"],
      link: "https://github.com/gilangarta06/content-planning",
    },
    {
      name: "Gastore",
      desc: "Dashboard e-commerce modern berbasis Next.js, Shadcn UI, dan Recharts untuk visualisasi data penjualan.",
      tech: ["Next.js", "Shadcn UI", "Recharts"],
      link: "https://github.com/gilangarta06/gastore",
    },
  ];

  return (
    <div className="space-y-14">
      {/* Hero / Intro */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Documentation Portal</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Koleksi dokumentasi, panduan setup, snippet kode, dan proyek nyata
          yang dibangun menggunakan Next.js, TypeScript, dan Shadcn UI.
        </p>
      </section>

      {/* All Documentations Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Documentations</h2>
        <p className="text-muted-foreground">
          Pilih salah satu kategori di bawah ini untuk mempelajari detail panduan.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((sec) => (
            <Link key={sec.title} href={sec.href}>
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {sec.icon} {sec.title}
                  </CardTitle>
                  <CardDescription>{sec.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{sec.tag}</Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Example Projects</h2>
        <p className="text-muted-foreground">
          Beberapa project nyata yang telah dikembangkan sebagai referensi pengembangan aplikasi modern.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((proj) => (
            <Card
              key={proj.name}
              className="hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <FolderKanban className="h-5 w-5 text-primary" />
                    {proj.name}
                  </span>
                  <Link href={proj.link} target="_blank">
                    <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                  </Link>
                </CardTitle>
                <CardDescription>{proj.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
