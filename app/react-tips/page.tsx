import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReactTipsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">React / TSX Tips</h1>
        <p className="text-lg text-muted-foreground">
          Kumpulan tips & best practices saat menggunakan React dengan TypeScript (TSX).
        </p>
      </section>

      {/* Functional Components */}
      <section id="functional-components" className="space-y-4">
        <h2 className="text-2xl font-bold">Functional Components</h2>
        <p className="text-muted-foreground">
          Gunakan functional components untuk membuat UI yang lebih sederhana dan mudah
          dikelola. Dengan TypeScript, tambahkan typing untuk props agar lebih aman.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Contoh</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto">
              <code>
{`type ButtonProps = {
  label: string;
  onClick: () => void;
};

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}`}
              </code>
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* State & Props */}
      <section id="state-props" className="space-y-4">
        <h2 className="text-2xl font-bold">State & Props</h2>
        <p className="text-muted-foreground">
          Props digunakan untuk komunikasi antar komponen, sedangkan state menyimpan data
          internal suatu komponen.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Contoh</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto">
              <code>
{`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Nilai: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}`}
              </code>
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Hooks */}
      <section id="hooks" className="space-y-4">
        <h2 className="text-2xl font-bold">Hooks (useState, useEffect)</h2>
        <p className="text-muted-foreground">
          Hooks memberikan cara untuk menggunakan state dan lifecycle methods di
          functional components.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Contoh</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto">
              <code>
{`import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>Waktu: {time} detik</p>;
}`}
              </code>
            </pre>
          </CardContent>
        </Card>
      </section>

      {/* Context API */}
      <section id="context-api" className="space-y-4">
        <h2 className="text-2xl font-bold">Context API</h2>
        <p className="text-muted-foreground">
          Context API digunakan untuk mengelola state global agar bisa diakses oleh banyak
          komponen tanpa harus prop drilling.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Contoh</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-3 rounded-lg text-sm overflow-x-auto">
              <code>
{`import { createContext, useContext, useState } from "react";

const ThemeContext = createContext<{ theme: string; toggle: () => void } | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");
  const toggle = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemedButton() {
  const ctx = useContext(ThemeContext);
  if (!ctx) return null;

  return <button onClick={ctx.toggle}>Tema sekarang: {ctx.theme}</button>;
}`}
              </code>
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
