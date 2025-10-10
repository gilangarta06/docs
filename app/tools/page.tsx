'use client';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Copy } from "lucide-react";

export default function ToolsDocs() {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Productivity / Tools</h1>
        <p className="text-lg text-muted-foreground">
          Kumpulan tips, tools, dan workflow untuk meningkatkan produktivitas saat
          pengembangan proyek di tahun 2025. Fokus pada efisiensi, konsistensi, dan otomatisasi.
        </p>
      </section>

      <Separator />

      {/* VSCode Tips */}
      <section id="vscode-tips" className="space-y-4">
        <h2 className="text-2xl font-bold">VSCode Productivity Tips</h2>
        <p className="text-muted-foreground">
          Optimalkan VSCode dengan extensions dan shortcut penting untuk mempercepat proses coding.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Rekomendasi Extensions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <ul className="list-disc pl-5 space-y-1">
              <li><b>Prettier</b> — auto-format code sesuai standar proyek.</li>
              <li><b>ESLint</b> — deteksi & perbaiki kesalahan sintaks atau style otomatis.</li>
              <li><b>Tailwind CSS IntelliSense</b> — auto-suggest class Tailwind.</li>
              <li><b>Iconify IntelliSense</b> — preview ikon langsung dari kode.</li>
              <li><b>GitLens</b> — lihat history commit langsung di editor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shortcut Penting</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="list-disc pl-5 space-y-1">
              <li><code>Ctrl + D</code> → multi-cursor (pilih kata serupa).</li>
              <li><code>Alt + ↑ / ↓</code> → pindahkan baris kode.</li>
              <li><code>Ctrl + P</code> → cepat buka file manapun.</li>
              <li><code>Ctrl + Shift + L</code> → ubah semua occurrence sekaligus.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Git Workflow */}
      <section id="git-workflow" className="space-y-4">
        <h2 className="text-2xl font-bold">Git Workflow</h2>
        <p className="text-muted-foreground">
          Alur kerja Git standar yang efisien dan aman untuk kolaborasi tim di GitHub.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Branch Workflow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`git checkout -b feature/nama-fitur
git commit -m "Tambah fitur X"
git push origin feature/nama-fitur`}
              </pre>
              <Button
                size="sm"
                variant="outline"
                className="absolute top-2 right-2"
                onClick={() =>
                  handleCopy(
                    `git checkout -b feature/nama-fitur\ngit commit -m "Tambah fitur X"\ngit push origin feature/nama-fitur`
                  )
                }
              >
                <Copy className="w-4 h-4 mr-1" /> Salin
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Commit Convention</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li><code>feat:</code> untuk fitur baru.</li>
              <li><code>fix:</code> untuk perbaikan bug.</li>
              <li><code>refactor:</code> untuk penyempurnaan tanpa ubah fungsi.</li>
              <li><code>docs:</code> untuk update dokumentasi.</li>
              <li><code>style:</code> untuk perbaikan tampilan, formatting, dsb.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Terminal Shortcuts */}
      <section id="terminal-shortcuts" className="space-y-4">
        <h2 className="text-2xl font-bold">Terminal Shortcuts & Commands</h2>
        <p className="text-muted-foreground">
          Gunakan perintah dan shortcut berikut untuk mempercepat navigasi terminal.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Shortcut Penting</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><code>cd -</code> → kembali ke direktori sebelumnya.</li>
              <li><code>!!</code> → jalankan perintah terakhir.</li>
              <li><code>Ctrl + R</code> → cari command lama di history.</li>
              <li><code>clear</code> → bersihkan layar terminal.</li>
              <li><code>Ctrl + C</code> → hentikan proses yang sedang berjalan.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Command Produktif</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`alias gs="git status"
alias gp="git push"
alias gc="git commit -m"
alias dcu="docker-compose up -d"
alias dcd="docker-compose down"`}
              </pre>
              <Button
                size="sm"
                variant="outline"
                className="absolute top-2 right-2"
                onClick={() =>
                  handleCopy(
                    `alias gs="git status"\nalias gp="git push"\nalias gc="git commit -m"\nalias dcu="docker-compose up -d"\nalias dcd="docker-compose down"`
                  )
                }
              >
                <Copy className="w-4 h-4 mr-1" /> Salin
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
