'use client';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clipboard } from "lucide-react";

export default function NotesDocs() {
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="space-y-10">
      {/* SECTION 1: Code Snippets */}
      <section id="code-snippets">
        <h2 className="text-2xl font-bold mb-4">Code Snippets</h2>
        <Card>
          <CardHeader>
            <CardTitle>Fetch API (async/await)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`async function fetchData() {
  try {
    const res = await fetch('/api/data');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error('Fetch error:', err);
  }
}`}
              </pre>
              <Button
                variant="outline"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() =>
                  handleCopy(`async function fetchData() {
  try {
    const res = await fetch('/api/data');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error('Fetch error:', err);
  }
}`)
                }
              >
                <Clipboard className="h-4 w-4 mr-1" /> Copy
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* SECTION 2: Reusable Components */}
      <section id="reusable-components">
        <h2 className="text-2xl font-bold mb-4">Reusable Components</h2>
        <Card>
          <CardHeader>
            <CardTitle>Button Primary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`import { Button } from "@/components/ui/button";

export function PrimaryButton({ label, onClick }) {
  return (
    <Button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
    >
      {label}
    </Button>
  );
}`}
              </pre>
              <Button
                variant="outline"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() =>
                  handleCopy(`import { Button } from "@/components/ui/button";

export function PrimaryButton({ label, onClick }) {
  return (
    <Button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
    >
      {label}
    </Button>
  );
}`)
                }
              >
                <Clipboard className="h-4 w-4 mr-1" /> Copy
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* SECTION 3: Commands & Scripts */}
      <section id="commands-scripts">
        <h2 className="text-2xl font-bold mb-4">Commands & Scripts</h2>
        <Card>
          <CardHeader>
            <CardTitle>Project Setup</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`# Install dependencies
npm install

# Run dev server
npm run dev

# Format code
npm run format`}
              </pre>
              <Button
                variant="outline"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() =>
                  handleCopy(`# Install dependencies
npm install

# Run dev server
npm run dev

# Format code
npm run format`)
                }
              >
                <Clipboard className="h-4 w-4 mr-1" /> Copy
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
