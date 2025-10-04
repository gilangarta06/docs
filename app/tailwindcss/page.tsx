import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function TailwindDocs() {
  return (
    <div className="space-y-10">
      <section id="tailwind-setup">
        <h2 className="text-2xl font-bold">Setup & Config</h2>
        <Card>
          <CardContent>
            <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
            </pre>
            <p className="mt-2 text-sm text-muted-foreground">
              Konfigurasi file `tailwind.config.js` untuk menambahkan path ke file `tsx`.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="layout-system">
        <h2 className="text-2xl font-bold">Layout System</h2>
        <p className="text-muted-foreground">
          Tailwind menyediakan grid & flex utilities untuk membangun layout responsif.
        </p>
      </section>

      <section id="responsiveness">
        <h2 className="text-2xl font-bold">Responsiveness</h2>
        <p className="text-muted-foreground">
          Gunakan breakpoint seperti `sm:`, `md:`, `lg:`, `xl:` untuk style berbeda di tiap ukuran layar.
        </p>
      </section>

      <section id="custom-classes">
        <h2 className="text-2xl font-bold">Custom Classes</h2>
        <p className="text-muted-foreground">
          Tambahkan class kustom di `globals.css` atau extend `tailwind.config.js`.
        </p>
      </section>
    </div>
  );
}
