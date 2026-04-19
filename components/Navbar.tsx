'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, Palette, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PALETTES: ReadonlyArray<Record<string, string>> = [
  {
    '--background': 'oklch(0.16 0.02 250)',
    '--foreground': 'oklch(0.95 0.01 95)',
    '--card': 'oklch(0.2 0.028 250)',
    '--card-foreground': 'oklch(0.95 0.01 95)',
    '--popover': 'oklch(0.2 0.028 250)',
    '--popover-foreground': 'oklch(0.95 0.01 95)',
    '--primary': 'oklch(0.78 0.16 95)',
    '--primary-foreground': 'oklch(0.15 0.02 250)',
    '--secondary': 'oklch(0.68 0.14 165)',
    '--secondary-foreground': 'oklch(0.14 0.018 250)',
    '--muted': 'oklch(0.24 0.03 250)',
    '--muted-foreground': 'oklch(0.8 0.02 95)',
    '--accent': 'oklch(0.72 0.17 25)',
    '--accent-foreground': 'oklch(0.14 0.018 250)',
    '--destructive': 'oklch(0.62 0.22 25)',
    '--destructive-foreground': 'oklch(0.95 0.01 95)',
    '--border': 'oklch(0.3 0.03 250)',
    '--input': 'oklch(0.22 0.03 250)',
    '--ring': 'oklch(0.78 0.16 95)',
  },
  {
    '--background': 'oklch(0.14 0.025 300)',
    '--foreground': 'oklch(0.95 0.01 210)',
    '--card': 'oklch(0.18 0.03 300)',
    '--card-foreground': 'oklch(0.95 0.01 210)',
    '--popover': 'oklch(0.18 0.03 300)',
    '--popover-foreground': 'oklch(0.95 0.01 210)',
    '--primary': 'oklch(0.74 0.2 330)',
    '--primary-foreground': 'oklch(0.14 0.025 300)',
    '--secondary': 'oklch(0.69 0.16 220)',
    '--secondary-foreground': 'oklch(0.13 0.02 300)',
    '--muted': 'oklch(0.22 0.03 300)',
    '--muted-foreground': 'oklch(0.78 0.02 210)',
    '--accent': 'oklch(0.72 0.17 160)',
    '--accent-foreground': 'oklch(0.13 0.02 300)',
    '--destructive': 'oklch(0.62 0.22 18)',
    '--destructive-foreground': 'oklch(0.95 0.01 210)',
    '--border': 'oklch(0.28 0.03 300)',
    '--input': 'oklch(0.2 0.03 300)',
    '--ring': 'oklch(0.74 0.2 330)',
  },
  {
    '--background': 'oklch(0.15 0.02 210)',
    '--foreground': 'oklch(0.95 0.008 280)',
    '--card': 'oklch(0.2 0.025 210)',
    '--card-foreground': 'oklch(0.95 0.008 280)',
    '--popover': 'oklch(0.2 0.025 210)',
    '--popover-foreground': 'oklch(0.95 0.008 280)',
    '--primary': 'oklch(0.76 0.17 205)',
    '--primary-foreground': 'oklch(0.12 0.018 210)',
    '--secondary': 'oklch(0.68 0.18 285)',
    '--secondary-foreground': 'oklch(0.12 0.018 210)',
    '--muted': 'oklch(0.24 0.03 210)',
    '--muted-foreground': 'oklch(0.8 0.02 280)',
    '--accent': 'oklch(0.73 0.16 120)',
    '--accent-foreground': 'oklch(0.12 0.018 210)',
    '--destructive': 'oklch(0.62 0.21 15)',
    '--destructive-foreground': 'oklch(0.95 0.008 280)',
    '--border': 'oklch(0.3 0.03 210)',
    '--input': 'oklch(0.22 0.03 210)',
    '--ring': 'oklch(0.76 0.17 205)',
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRandomPaletteEnabled, setIsRandomPaletteEnabled] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    setIsRandomPaletteEnabled(document.documentElement.dataset.paletteMode === 'random');
  }, []);

  const clearPalette = () => {
    if (typeof document === 'undefined') {
      return;
    }

    const root = document.documentElement;
    const paletteIndex = root.dataset.paletteIndex ? Number(root.dataset.paletteIndex) : NaN;
    const currentPalette = Number.isInteger(paletteIndex) && paletteIndex >= 0 && paletteIndex < PALETTES.length
      ? PALETTES[paletteIndex]
      : undefined;
    const variableNames = currentPalette ? Object.keys(currentPalette) : Object.keys(PALETTES[0]);

    for (const variableName of variableNames) {
      root.style.removeProperty(variableName);
    }

    delete root.dataset.paletteMode;
    delete root.dataset.paletteIndex;
  };

  const applyPalette = (palette: Record<string, string>, paletteIndex: number) => {
    if (typeof document === 'undefined') {
      return;
    }

    const root = document.documentElement;

    for (const [variableName, value] of Object.entries(palette)) {
      root.style.setProperty(variableName, value);
    }

    root.dataset.paletteMode = 'random';
    root.dataset.paletteIndex = String(paletteIndex);
  };

  const togglePalette = () => {
    if (typeof document === 'undefined') {
      return;
    }

    if (isRandomPaletteEnabled) {
      clearPalette();
      setIsRandomPaletteEnabled(false);
      return;
    }

    const paletteIndex = Math.floor(Math.random() * PALETTES.length);
    applyPalette(PALETTES[paletteIndex], paletteIndex);
    setIsRandomPaletteEnabled(true);
  };

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Success Stories' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 border-b border-border backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
              SS
            </div>
            <span className="text-lg font-semibold text-foreground">Servestack</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              className="sm:hidden"
              onClick={togglePalette}
              aria-label={isRandomPaletteEnabled ? 'Switch to original theme' : 'Switch to random palette'}
            >
              <Palette className="size-4" />
            </Button>

            <Button type="button" variant="outline" size="sm" className="hidden sm:inline-flex" onClick={togglePalette}>
              {isRandomPaletteEnabled ? 'Original Theme' : 'Random Palette'}
            </Button>

            <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Get Started Now</Link>
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Get Started Now</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
