import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ProjectsDocs() {
  return (
    <div className="space-y-10">
      <section id="example-nextjs">
        <h2 className="text-2xl font-bold">Contoh Project Next.js</h2>
        <Card>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Project Next.js dengan Tailwind dan Shadcn untuk dokumentasi pribadi.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="example-tsx">
        <h2 className="text-2xl font-bold">Project dengan TSX</h2>
        <Card>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Contoh implementasi React dengan TypeScript (.tsx) untuk membuat UI lebih terstruktur.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
