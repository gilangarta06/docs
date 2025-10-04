import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Boxes, Code2, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Introduction Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to Docs Template</h1>
        <p className="text-lg text-muted-foreground">
          Base template project Next.js dengan TypeScript, TailwindCSS, dan Shadcn/ui untuk membuat dokumentasi modern & mudah digunakan.
        </p>
      </section>

      {/* Documentations Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Documentations</h2>
        <p className="text-muted-foreground">
          Pilih salah satu dokumentasi di bawah ini untuk melihat detail setup dan panduan.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Github Docs */}
          <Link href="/github">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github className="h-5 w-5" /> Github
                </CardTitle>
                <CardDescription>Dokumentasi penggunaan Github untuk project kamu.</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Version Control</Badge>
              </CardContent>
            </Card>
          </Link>

          {/* Next.js Docs */}
          <Link href="/nextjs">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="h-5 w-5" /> Next.js
                </CardTitle>
                <CardDescription>Panduan lengkap Next.js dari setup hingga deployment.</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Framework</Badge>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
}
