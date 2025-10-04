import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ToolsDocs() {
  return (
    <div className="space-y-10">
      <section id="vscode-tips">
        <h2 className="text-2xl font-bold">VSCode Tips</h2>
        <Card>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Pakai <b>Prettier</b> untuk auto-format.</li>
              <li>Gunakan <b>ESLint</b> untuk menjaga konsistensi kode.</li>
              <li>Shortcut penting: <code>Ctrl + D</code> untuk multi-cursor.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section id="git-workflow">
        <h2 className="text-2xl font-bold">Git Workflow</h2>
        <Card>
          <CardContent>
            <pre className="bg-muted p-3 rounded-md text-sm">
{`git checkout -b feature/nama-fitur
git commit -m "Tambah fitur X"
git push origin feature/nama-fitur`}
            </pre>
          </CardContent>
        </Card>
      </section>

      <section id="terminal-shortcuts">
        <h2 className="text-2xl font-bold">Terminal Shortcuts</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><code>cd -</code> kembali ke direktori sebelumnya</li>
          <li><code>!!</code> jalankan perintah terakhir</li>
          <li><code>Ctrl + R</code> cari command lama</li>
        </ul>
      </section>
    </div>
  );
}
