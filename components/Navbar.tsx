'use client';

import { Search, Menu, Moon, Sun } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';

interface NavbarProps {
  onSearchChange: (value: string) => void;
  onMenuToggle: () => void;
}

export default function Navbar({ onSearchChange, onMenuToggle }: NavbarProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-gray-700 dark:bg-gray-900/95">
      <div className="container flex h-16 items-center px-4">
        {/* Menu Toggle untuk Mobile */}
        <button
          onClick={onMenuToggle}
          className="mr-4 md:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        <div className="flex items-center gap-2 mr-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <span className="hidden font-bold sm:inline-block">
            Docs
          </span>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4">
          {/* Search */}
          <div className="w-full max-w-sm relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search docs..."
              className="pl-9 w-full"
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="flex h-8 w-8 items-center justify-center rounded-lg border bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
