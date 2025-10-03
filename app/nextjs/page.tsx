import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/CodeBlock"; // pastikan pathnya sama kayak yang di github

export default function NextjsPage() {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Next.js Documentation</h1>
        <p className="text-lg text-muted-foreground">
          Panduan penggunaan Next.js untuk setup project, sistem routing, API routes, hingga deployment.
        </p>
      </section>

      {/* Setup & Installation */}
      <section id="nextjs-setup" className="space-y-4 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Setup & Installation</h2>
        <Card>
          <CardHeader>
            <CardTitle>Langkah Setup</CardTitle>
            <CardDescription>Install Next.js dengan TypeScript & TailwindCSS</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CodeBlock code="npx create-next-app@latest my-app --typescript --tailwind" />
            <CodeBlock code="cd my-app" />
            <CodeBlock code="npm run dev" />
          </CardContent>
        </Card>
      </section>

      {/* Pages & Routing */}
      <section id="pages-routing" className="space-y-4 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Pages & Routing</h2>
        <Card>
          <CardHeader>
            <CardTitle>File-based Routing</CardTitle>
            <CardDescription>Routing otomatis berdasarkan struktur folder</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CodeBlock code="app/page.tsx → /" />
            <CodeBlock code="app/about/page.tsx → /about" />
            <CodeBlock code="app/blog/[id]/page.tsx → /blog/:id" />
          </CardContent>
        </Card>
      </section>

      {/* API Routes */}
      <section id="api-routes" className="space-y-4 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">API Routes</h2>
        <Card>
          <CardHeader>
            <CardTitle>Membuat API</CardTitle>
            <CardDescription>Gunakan folder <code>app/api/</code> untuk membuat API endpoint</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CodeBlock code="app/api/hello/route.ts → /api/hello" />
            <CodeBlock
              code={`export async function GET() {
  return Response.json({ message: "Hello World" })
}`}
            />
          </CardContent>
        </Card>
      </section>

      {/* Deployment */}
      <section id="deployment" className="space-y-4 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Deployment</h2>
        <Card>
          <CardHeader>
            <CardTitle>Build & Deploy</CardTitle>
            <CardDescription>Deploy Next.js ke Vercel atau platform lain</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CodeBlock code="npm run build" />
            <CodeBlock code="npm start" />
            <CodeBlock code="vercel deploy" />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
