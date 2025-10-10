import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/CodeBlock"; // pastikan path sesuai

export default function NextjsPage() {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Next.js Documentation</h1>
        <p className="text-lg text-muted-foreground">
          Panduan penggunaan Next.js tanpa folder <code>src/</code>, mulai dari setup project, sistem routing,
          pembuatan API routes, hingga proses deployment ke Vercel.
        </p>
      </section>

      {/* Setup & Installation */}
      <section id="nextjs-setup" className="space-y-4 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Setup & Installation</h2>
        <Card>
          <CardHeader>
            <CardTitle>Langkah Setup</CardTitle>
            <CardDescription>
              Membuat project Next.js dengan TypeScript dan TailwindCSS langsung di root (tanpa folder <code>src</code>)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CodeBlock code="npx create-next-app@latest my-app --typescript --tailwind" />
            <CodeBlock code="cd my-app" />
            <CodeBlock code="npm run dev" />
            <p className="text-sm text-muted-foreground">
              ⚙️ Secara default, Next.js versi 14+ sudah menempatkan folder <code>app/</code> di root.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Folder Structure */}
      <section id="folder-structure" className="space-y-4 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Struktur Folder</h2>
        <Card>
          <CardHeader>
            <CardTitle>Struktur Tanpa Folder src</CardTitle>
            <CardDescription>Struktur minimal project Next.js modern (Oktober 2025)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CodeBlock
              code={`my-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── api/
│       └── hello/route.ts
├── components/
│   ├── ui/
│   └── CodeBlock.tsx
├── public/
│   └── favicon.ico
├── styles/
│   └── globals.css
├── package.json
└── tailwind.config.ts`}
            />
          </CardContent>
        </Card>
      </section>

      {/* Pages & Routing */}
      <section id="pages-routing" className="space-y-4 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Pages & Routing</h2>
        <Card>
          <CardHeader>
            <CardTitle>File-based Routing</CardTitle>
            <CardDescription>
              Sistem routing otomatis berdasarkan struktur folder di dalam <code>app/</code>
            </CardDescription>
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
            <CardDescription>
              Gunakan folder <code>app/api/</code> untuk membuat endpoint API di Next.js 14+
            </CardDescription>
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
            <CardDescription>Deploy ke Vercel atau platform lain seperti Netlify, Render, atau Node server</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CodeBlock code="npm run build" />
            <CodeBlock code="npm start" />
            <CodeBlock code="vercel deploy" />
            <p className="text-sm text-muted-foreground">
              🚀 Vercel adalah platform resmi untuk hosting Next.js — tinggal konek akun GitHub kamu dan klik "Deploy".
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
