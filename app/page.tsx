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
        </div>
      </section>
    </div>
  );
}
