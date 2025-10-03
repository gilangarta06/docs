import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/CodeBlock"; // pastikan path sesuai

export default function GithubPage() {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Github Documentation</h1>
        <p className="text-lg text-muted-foreground">
          Panduan penggunaan Github untuk manajemen project, mulai dari upload project, restore & backup,
          branching strategy, hingga best practices.
        </p>
      </section>

      {/* Upload Project */}
      <section id="upload-project" className="space-y-4 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Upload Project</h2>
        <Card>
          <CardHeader>
            <CardTitle>Langkah Upload</CardTitle>
            <CardDescription>Push project lokal ke repository Github</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CodeBlock code="git init" />
            <CodeBlock code="git remote add origin https://github.com/username/nama-repo.git" />
            <CodeBlock code="git add ." />
            <CodeBlock code={`git commit -m "first commit"`} />
            <CodeBlock code="git push -u origin main" />
          </CardContent>
        </Card>
      </section>

      {/* Restore & Backup */}
      <section id="restore" className="space-y-4 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Restore & Backup</h2>
        <Card>
          <CardHeader>
            <CardTitle>Cloning & Backup</CardTitle>
            <CardDescription>Menduplikasi repository dari Github</CardDescription>
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
