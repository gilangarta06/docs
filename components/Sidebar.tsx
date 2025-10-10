'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface SubItem {
  title: string;
  slug: string; // id section
}

interface MenuItem {
  title: string;
  basePath?: string; // halaman utama (misalnya "/github")
  items?: SubItem[]; // opsional
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
    basePath: '/', // halaman home
  },
{
  title: 'Github',
  basePath: '/github',
  items: [
    { title: 'Upload Project Pertama', slug: 'upload-project' },
    { title: 'Push Setelah Update', slug: 'push-update' },
    { title: 'Rollback ke Commit Sebelumnya', slug: 'rollback' },
    { title: 'Restore & Backup', slug: 'restore' },
    { title: 'Branching Strategy', slug: 'branching' },
    { title: 'Best Practices', slug: 'git-best-practices' },
  ],
},
    
{
  title: 'Next.js',
  basePath: '/nextjs',
  items: [
    { title: 'Setup & Installation', slug: 'nextjs-setup' },
    { title: 'Struktur Folder', slug: 'folder-structure' },
    { title: 'Pages & Routing', slug: 'pages-routing' },
    { title: 'API Routes', slug: 'api-routes' },
    { title: 'Deployment', slug: 'deployment' },
  ],
},

{
  title: "Shadcn UI",
  basePath: "/shadcn",
  items: [
    { title: "Overview", slug: "index" },
    { title: "Installation", slug: "install" },
    { title: "Configuration", slug: "config" },
    { title: "Usage", slug: "usage" },
    { title: "Dialog", slug: "dialog" },
    { title: "Button & Input", slug: "buttons-inputs" },
    { title: "Navbar & Sidebar", slug: "navbar-sidebar" },
  ],
},

{
  title: 'Productivity / Tools',
  basePath: '/tools',
  items: [
    { title: 'VSCode Tips', slug: 'vscode-tips' },
    { title: 'Git Workflow', slug: 'git-workflow' },
    { title: 'Terminal Shortcuts', slug: 'terminal-shortcuts' },
  ],
},

  {
    title: 'Projects',
    basePath: '/projects',
    items: [
      { title: 'Overview', slug: '' },
      { title: 'Next.js + TypeScript', slug: 'nextjs-typescript' },
    ],
  },
{
  title: 'Notes / Snippets',
  basePath: '/notes',
  items: [
    { title: 'Code Snippets', slug: 'code-snippets' },
    { title: 'Reusable Components', slug: 'reusable-components' },
    { title: 'Commands & Scripts', slug: 'commands-scripts' },
  ],
},
];

export default function Sidebar({ searchQuery, isOpen, onClose }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [filteredMenu, setFilteredMenu] = useState<MenuItem[]>(menuData);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredMenu(menuData);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = menuData
      .map((section) => ({
        ...section,
        items: section.items?.filter(
          (item) =>
            item.title.toLowerCase().includes(query) ||
            section.title.toLowerCase().includes(query)
        ),
      }))
      .filter((section) => {
        if (section.items) {
          return section.items.length > 0;
        }
        return section.title.toLowerCase().includes(query);
      });

    setFilteredMenu(filtered);

    const expanded: Record<string, boolean> = {};
    filtered.forEach((section) => {
      if (section.items && section.items.length > 0) {
        expanded[section.title] = true;
      }
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
                  {/* Section tanpa items → Link */}
                  {!section.items ? (
                    <Link
                      href={section.basePath ?? '/'}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => {
                        if (window.innerWidth < 768) {
                          onClose();
                        }
                      }}
                    >
                      {section.title}
                    </Link>
                  ) : (
                    <>
                      {/* Section dengan items → Expandable */}
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
                            <Link
                              key={item.slug}
                              href={`${section.basePath ?? ''}#${item.slug}`}
                              className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                              onClick={() => {
                                if (window.innerWidth < 768) {
                                  onClose();
                                }
                              }}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
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
