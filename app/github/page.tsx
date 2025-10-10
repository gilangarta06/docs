import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/CodeBlock"; // pastikan path sesuai

export default function GithubPage() {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Github Documentation</h1>
        <p className="text-lg text-muted-foreground">
          Panduan penggunaan GitHub untuk manajemen project, mulai dari upload project pertama,
          push update setelah bekerja, rollback commit, hingga best practices pengelolaan repository.
        </p>
      </section>

      {/* Upload Project Pertama */}
      <section id="upload-project" className="space-y-4 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Upload Project Pertama</h2>
        <Card>
          <CardHeader>
            <CardTitle>Langkah Awal Upload ke GitHub</CardTitle>
            <CardDescription>Push project lokal pertama kali ke repository baru</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CodeBlock code="git init" />
            <CodeBlock code="git remote add origin https://github.com/username/nama-repo.git" />
            <CodeBlock code="git add ." />
            <CodeBlock code={`git commit -m "first commit"`} />
            <CodeBlock code="git branch -M main" />
            <CodeBlock code="git push -u origin main" />
          </CardContent>
        </Card>
      </section>

      {/* Push Setelah Update */}
      <section id="push-update" className="space-y-4 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Push Setelah Update</h2>
        <Card>
          <CardHeader>
            <CardTitle>Langkah Push Setelah Perubahan</CardTitle>
            <CardDescription>
              Gunakan perintah ini setiap kali kamu menyelesaikan pekerjaan atau fitur baru.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CodeBlock code="git add ." />
            <CodeBlock code={`git commit -m "feat: update fitur dashboard"`} />
            <CodeBlock code="git pull origin main" />
            <CodeBlock code="git push origin main" />
          </CardContent>
        </Card>
      </section>

      {/* Rollback Commit */}
      <section id="rollback" className="space-y-4 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Rollback ke Commit Sebelumnya</h2>
        <Card>
          <CardHeader>
            <CardTitle>Cara Revert atau Reset Commit</CardTitle>
            <CardDescription>
              Gunakan untuk mengembalikan project ke commit sebelumnya (berhati-hati, karena bisa menghapus perubahan).
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CodeBlock code="git log --oneline" />
            <CodeBlock code="git checkout <commit_id>" />
            <CodeBlock code="git revert <commit_id>" />
            <CodeBlock code="git reset --hard <commit_id>" />
            <p className="text-sm text-muted-foreground">
              💡 <b>Tips:</b> Gunakan <code>revert</code> untuk membuat commit pembatalan (aman),
              dan <code>reset --hard</code> hanya bila kamu yakin ingin menghapus perubahan permanen.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Restore & Backup */}
      <section id="restore" className="space-y-4 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Restore & Backup</h2>
        <Card>
          <CardHeader>
            <CardTitle>Cloning & Backup</CardTitle>
            <CardDescription>Menduplikasi repository dari GitHub</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CodeBlock code="git clone https://github.com/username/nama-repo.git" />
            <CodeBlock code="cd nama-repo" />
            <CodeBlock code="npm install" />
          </CardContent>
        </Card>
      </section>

      {/* Branching Strategy */}
      <section id="branching" className="space-y-4 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Branching Strategy</h2>
        <Card>
          <CardHeader>
            <CardTitle>Contoh Workflow</CardTitle>
            <CardDescription>Gunakan branching untuk kolaborasi lebih rapi</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CodeBlock code="main → branch production" />
            <CodeBlock code="develop → branch untuk integrasi fitur" />
            <CodeBlock code="feature/* → branch untuk fitur baru" />
            <CodeBlock code="hotfix/* → branch untuk perbaikan bug di production" />
          </CardContent>
        </Card>
      </section>

      {/* Best Practices */}
      <section id="git-best-practices" className="space-y-4 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Best Practices</h2>
        <Card>
          <CardHeader>
            <CardTitle>Panduan</CardTitle>
            <CardDescription>Tips menjaga repository tetap bersih & mudah di-maintain</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CodeBlock code="Gunakan commit message yang jelas (conventional commits)" />
            <CodeBlock code="Selalu buat pull request untuk review code" />
            <CodeBlock code="Jangan commit file environment atau build (gunakan .gitignore)" />
            <CodeBlock code="Update branch lokal sebelum push untuk menghindari conflict" />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
