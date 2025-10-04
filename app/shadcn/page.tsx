import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ShadcnDocsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Shadcn / UI Components</h1>
        <p className="text-lg text-muted-foreground">
          Panduan menggunakan Shadcn UI components untuk membangun antarmuka modern,
          konsisten, dan mudah dikustomisasi.
        </p>
      </section>

      {/* Installation */}
      <section id="shadcn-install" className="space-y-4">
        <h2 className="text-2xl font-bold">Installation</h2>
        <p className="text-muted-foreground">
          Untuk menginstal Shadcn, jalankan perintah berikut:
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Perintah Instalasi</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto">
              <code>{`npx shadcn-ui@latest init`}</code>
            </pre>
            <p className="mt-2 text-sm text-muted-foreground">
              Setelah instalasi, tambahkan komponen dengan:
            </p>
            <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto mt-2">
              <code>{`npx shadcn-ui@latest add button`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Navbar & Sidebar */}
      <section id="navbar-sidebar" className="space-y-4">
        <h2 className="text-2xl font-bold">Navbar & Sidebar</h2>
        <p className="text-muted-foreground">
          Gunakan komponen Shadcn untuk membuat navigasi yang konsisten di seluruh aplikasi.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Contoh Navbar</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto">
{`import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="flex justify-between p-4 border-b">
      <h1 className="font-bold">My App</h1>
      <div className="space-x-2">
        <Button variant="outline">Login</Button>
        <Button>Register</Button>
      </div>
    </nav>
  );
}`}
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Buttons & Inputs */}
      <section id="buttons-inputs" className="space-y-4">
        <h2 className="text-2xl font-bold">Buttons & Inputs</h2>
        <p className="text-muted-foreground">
          Shadcn menyediakan berbagai varian button dan input form yang siap pakai.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Contoh</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto">
{`import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FormExample() {
  return (
    <form className="space-y-4">
      <Input placeholder="Masukkan email" type="email" />
      <Button type="submit">Submit</Button>
    </form>
  );
}`}
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Modals & Dialogs */}
      <section id="modals" className="space-y-4">
        <h2 className="text-2xl font-bold">Modals & Dialogs</h2>
        <p className="text-muted-foreground">
          Gunakan dialog untuk interaksi penting, seperti konfirmasi atau form tambahan.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Contoh Dialog</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto">
{`import { Button } from "@/components/ui/button";
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
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
