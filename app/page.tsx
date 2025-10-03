import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to Docs Template
          </h1>
          <p className="text-xl text-muted-foreground">
            Base template project Next.js dengan TypeScript, TailwindCSS, dan Shadcn/ui
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Next.js 13</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">TailwindCSS</Badge>
          <Badge variant="secondary">Shadcn/ui</Badge>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="tujuan-docs" className="space-y-4 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Tujuan Dokumentasi</h2>
        <Card>
          <CardHeader>
            <CardTitle>Mengapa Template Ini?</CardTitle>
            <CardDescription>
              Template ini dirancang untuk mempercepat development project Anda
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Template ini menyediakan struktur project yang clean, modular, dan siap pakai untuk berbagai keperluan:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Dokumentasi project yang mudah di-maintain</li>
              <li>Dashboard aplikasi dengan navigasi yang intuitif</li>
              <li>Landing page dengan komponen reusable</li>
              <li>Admin panel atau CMS sederhana</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Cara Menggunakan Section */}
      <section id="cara-pakai-docs" className="space-y-4 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Cara Menggunakan</h2>
        <Card>
          <CardHeader>
            <CardTitle>Quick Start</CardTitle>
            <CardDescription>
              Ikuti langkah-langkah berikut untuk memulai
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="rounded-lg bg-muted p-4">
                <p className="font-mono text-sm">npm install</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Install semua dependencies yang diperlukan
              </p>
            </div>
            <div className="space-y-3">
              <div className="rounded-lg bg-muted p-4">
                <p className="font-mono text-sm">npm run dev</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Jalankan development server di http://localhost:3000
              </p>
            </div>
            <div className="space-y-3">
              <div className="rounded-lg bg-muted p-4">
                <p className="font-mono text-sm">npm run build</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Build production-ready application
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Features Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Fitur Utama</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Responsive Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Sidebar collapsible di mobile dengan overlay, search bar yang responsive, dan layout yang adaptif di semua device.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Nested Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Struktur menu nested dengan expand/collapse, perfect untuk dokumentasi atau dashboard kompleks.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Search Functionality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Real-time search yang memfilter judul dan subjudul di sidebar, dengan auto-expand hasil search.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Shadcn/ui Components</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Pre-installed dengan semua komponen Shadcn/ui, siap pakai dan mudah di-customize.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Struktur Project Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Struktur Project</h2>
        <Card>
          <CardContent className="pt-6">
            <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
{`project/
├── app/
│   ├── layout.tsx          # Root layout dengan metadata
│   ├── page.tsx            # Homepage / Dashboard
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── Navbar.tsx          # Navbar dengan search
│   ├── Sidebar.tsx         # Sidebar dengan nested menu
│   ├── LayoutClient.tsx    # Client-side layout wrapper
│   └── ui/                 # Shadcn/ui components
├── lib/
│   └── utils.ts            # Utility functions
├── hooks/
│   └── use-toast.ts        # Custom hooks
├── public/                 # Static assets
└── package.json            # Dependencies`}
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Customization Tips */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Tips Customization</h2>
        <div className="space-y-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Mengubah Menu Sidebar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Edit array <code className="bg-muted px-1.5 py-0.5 rounded">menuData</code> di{' '}
                <code className="bg-muted px-1.5 py-0.5 rounded">components/Sidebar.tsx</code> untuk menambah/mengurangi menu items.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Mengubah Theme</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Edit CSS variables di{' '}
                <code className="bg-muted px-1.5 py-0.5 rounded">app/globals.css</code> untuk customize warna theme sesuai brand Anda.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Menambah Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Buat file baru di folder{' '}
                <code className="bg-muted px-1.5 py-0.5 rounded">app/</code> untuk menambah pages. Next.js menggunakan file-system based routing.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
