'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SubItem {
  title: string;
  slug: string;
}

interface MenuItem {
  title: string;
  items: SubItem[];
}

interface SidebarProps {
  searchQuery: string;
  isOpen: boolean;
  onClose: () => void;
}

// Data struktur menu sidebar
const menuData: MenuItem[] = [
  {
    title: 'Introduction',
    items: [
      { title: 'Tujuan Dokumentasi', slug: 'tujuan-docs' },
      { title: 'Cara Menggunakan', slug: 'cara-pakai-docs' },
    ],
  },
  {
    title: 'Github',
    items: [
      { title: 'Upload Project', slug: 'upload-project' },
      { title: 'Restore & Backup', slug: 'restore' },
      { title: 'Branching Strategy', slug: 'branching' },
      { title: 'Best Practices', slug: 'git-best-practices' },
    ],
  },
  {
    title: 'Next.js',
    items: [
      { title: 'Setup & Installation', slug: 'nextjs-setup' },
      { title: 'Pages & Routing', slug: 'pages-routing' },
      { title: 'API Routes', slug: 'api-routes' },
      { title: 'Deployment', slug: 'deployment' },
    ],
  },
  {
    title: 'React / TSX Tips',
    items: [
      { title: 'Functional Components', slug: 'functional-components' },
      { title: 'State & Props', slug: 'state-props' },
      { title: 'Hooks (useState, useEffect)', slug: 'hooks' },
      { title: 'Context API', slug: 'context-api' },
    ],
  },
  {
    title: 'Shadcn / UI Components',
    items: [
      { title: 'Installation', slug: 'shadcn-install' },
      { title: 'Navbar & Sidebar', slug: 'navbar-sidebar' },
      { title: 'Buttons & Inputs', slug: 'buttons-inputs' },
      { title: 'Modals & Dialogs', slug: 'modals' },
    ],
  },
  {
    title: 'TailwindCSS',
    items: [
      { title: 'Setup & Config', slug: 'tailwind-setup' },
      { title: 'Layout System', slug: 'layout-system' },
      { title: 'Responsiveness', slug: 'responsiveness' },
      { title: 'Custom Classes', slug: 'custom-classes' },
    ],
  },
  {
    title: 'Productivity / Tools',
    items: [
      { title: 'VSCode Tips', slug: 'vscode-tips' },
      { title: 'Git Workflow', slug: 'git-workflow' },
      { title: 'Terminal Shortcuts', slug: 'terminal-shortcuts' },
    ],
  },
  {
    title: 'Projects',
    items: [
      { title: 'Contoh Project Next.js', slug: 'example-nextjs' },
      { title: 'Project dengan TSX', slug: 'example-tsx' },
    ],
  },
  {
    title: 'Notes / Snippets',
    items: [
      { title: 'Code Snippets', slug: 'code-snippets' },
      { title: 'Reusable Components', slug: 'reusable-components' },
      { title: 'Commands & Scripts', slug: 'commands-scripts' },
    ],
  },
];

export default function Sidebar({ searchQuery, isOpen, onClose }: SidebarProps) {
  // State untuk menyimpan section mana yang terbuka/collapsed
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [filteredMenu, setFilteredMenu] = useState<MenuItem[]>(menuData);

  // Toggle expand/collapse untuk section
  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // Filter menu berdasarkan search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredMenu(menuData);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = menuData
      .map((section) => ({
        ...section,
        items: section.items.filter(
          (item) =>
            item.title.toLowerCase().includes(query) ||
            section.title.toLowerCase().includes(query)
        ),
      }))
      .filter((section) => section.items.length > 0);

    setFilteredMenu(filtered);

    // Auto-expand sections yang ada hasil search
    const expanded: Record<string, boolean> = {};
    filtered.forEach((section) => {
      expanded[section.title] = true;
    });
    setExpandedSections(expanded);
  }, [searchQuery]);

  return (
    <>
      {/* Overlay untuk mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-background transition-transform duration-300 ease-in-out md:sticky md:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-full flex-col">
          {/* Close button untuk mobile */}
          <div className="flex items-center justify-between p-4 md:hidden">
            <span className="font-semibold">Menu</span>
            <button onClick={onClose} aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Scrollable menu */}
          <nav className="flex-1 overflow-y-auto px-4 py-4">
            <div className="space-y-2">
              {filteredMenu.map((section) => (
                <div key={section.title} className="space-y-1">
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <span>{section.title}</span>
                    {expandedSections[section.title] ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>

                  {/* Sub Items */}
                  {expandedSections[section.title] && (
                    <div className="ml-4 space-y-1 border-l pl-3">
                      {section.items.map((item) => (
                        <a
                          key={item.slug}
                          href={`#${item.slug}`}
                          className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                          onClick={() => {
                            // Close sidebar on mobile after clicking
                            if (window.innerWidth < 768) {
                              onClose();
                            }
                          }}
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
