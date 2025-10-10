"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export default function ShadcnDocsPage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const CodeBlock = ({ code }: { code: string }) => (
    <div className="relative">
      <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-2 right-2"
        onClick={() => copyToClipboard(code)}
      >
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  );

  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Shadcn / UI Components</h1>
        <p className="text-lg text-muted-foreground">
          Panduan instalasi dan penggunaan Shadcn UI Components — framework berbasis TailwindCSS yang fleksibel dan sepenuhnya dapat dikustomisasi.
        </p>
      </section>

      {/* Installation */}
      <section id="install" className="space-y-4">
        <h2 className="text-2xl font-bold">Installation</h2>
        <p className="text-muted-foreground">
          Untuk menginstal Shadcn versi terbaru (Oktober 2025), jalankan perintah berikut:
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Perintah Instalasi</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock code={`npx shadcn@latest init`} />
            <p className="mt-2 text-sm text-muted-foreground">
              Setelah inisialisasi, tambahkan komponen dengan perintah:
            </p>
            <CodeBlock code={`npx shadcn@latest add button`} />
          </CardContent>
        </Card>
      </section>

      {/* Config */}
      <section id="config" className="space-y-4">
        <h2 className="text-2xl font-bold">Konfigurasi Tailwind</h2>
        <p className="text-muted-foreground">
          Pastikan konfigurasi <code>tailwind.config.js</code> sudah mencakup direktori app dan komponen Shadcn.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>tailwind.config.js</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: { extend: {} },
  plugins: [require("tailwindcss-animate")],
};`}
            />
          </CardContent>
        </Card>
      </section>

      {/* Usage */}
      <section id="usage" className="space-y-4">
        <h2 className="text-2xl font-bold">Penggunaan Komponen</h2>
        <p className="text-muted-foreground">
          Contoh penggunaan komponen <code>Button</code> yang telah diinstall dari Shadcn:
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Contoh Button</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`import { Button } from "@/components/ui/button";

export default function Example() {
  return (
    <div className="space-x-2">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}`}
            />
          </CardContent>
        </Card>
      </section>

      {/* Dialog */}
      <section id="dialog" className="space-y-4">
        <h2 className="text-2xl font-bold">Contoh Dialog</h2>
        <p className="text-muted-foreground">
          Gunakan dialog untuk menampilkan konfirmasi atau interaksi tambahan dengan pengguna.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Dialog Example</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Buka Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Konfirmasi</DialogTitle>
        </DialogHeader>
        <p>Apakah kamu yakin ingin melanjutkan?</p>
      </DialogContent>
    </Dialog>
  );
}`}
            />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
