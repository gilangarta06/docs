import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function NotesDocs() {
  return (
    <div className="space-y-10">
      <section id="code-snippets">
        <h2 className="text-2xl font-bold">Code Snippets</h2>
        <Card>
          <CardContent>
            <pre className="bg-muted p-3 rounded-md text-sm">
{`// Debounce function
function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}`}
            </pre>
          </CardContent>
        </Card>
      </section>

      <section id="reusable-components">
        <h2 className="text-2xl font-bold">Reusable Components</h2>
        <p className="text-muted-foreground">
          Simpan komponen umum seperti <code>Button</code>, <code>Card</code>, dan <code>Modal</code> di folder <code>components/</code>.
        </p>
      </section>

      <section id="commands-scripts">
        <h2 className="text-2xl font-bold">Commands & Scripts</h2>
        <Card>
          <CardContent>
            <pre className="bg-muted p-3 rounded-md text-sm">
{`"scripts": {
  "dev": "next dev",
  "build": "next build",
  "lint": "next lint"
}`}
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
