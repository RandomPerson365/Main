'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, Palette, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PALETTE_VARIABLE_NAMES = [
  '--background',
  '--foreground',
  '--card',
  '--card-foreground',
  '--popover',
  '--popover-foreground',
  '--primary',
  '--primary-foreground',
  '--secondary',
  '--secondary-foreground',
  '--muted',
  '--muted-foreground',
  '--accent',
  '--accent-foreground',
  '--destructive',
  '--destructive-foreground',
  '--border',
  '--input',
  '--ring',
] as const;

const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;

const wrapHue = (hue: number) => ((hue % 360) + 360) % 360;

const oklch = (l: number, c: number, h: number) => `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${wrapHue(h).toFixed(1)})`;

const createRandomPalette = () => {
  const baseHue = randomBetween(0, 360);
  const secondaryHue = baseHue + randomBetween(50, 160);
  const accentHue = baseHue + randomBetween(170, 290);
  const destructiveHue = baseHue + randomBetween(300, 350);

  return {
    '--background': oklch(randomBetween(0.13, 0.18), randomBetween(0.018, 0.035), baseHue + randomBetween(-20, 20)),
    '--foreground': oklch(randomBetween(0.92, 0.97), randomBetween(0.006, 0.018), baseHue + randomBetween(120, 250)),
    '--card': oklch(randomBetween(0.17, 0.22), randomBetween(0.022, 0.04), baseHue + randomBetween(-15, 15)),
    '--card-foreground': oklch(randomBetween(0.92, 0.97), randomBetween(0.006, 0.018), baseHue + randomBetween(120, 250)),
    '--popover': oklch(randomBetween(0.17, 0.22), randomBetween(0.022, 0.04), baseHue + randomBetween(-15, 15)),
    '--popover-foreground': oklch(randomBetween(0.92, 0.97), randomBetween(0.006, 0.018), baseHue + randomBetween(120, 250)),
    '--primary': oklch(randomBetween(0.7, 0.8), randomBetween(0.13, 0.23), baseHue),
    '--primary-foreground': oklch(randomBetween(0.11, 0.17), randomBetween(0.01, 0.03), baseHue + randomBetween(-30, 30)),
    '--secondary': oklch(randomBetween(0.64, 0.76), randomBetween(0.12, 0.22), secondaryHue),
    '--secondary-foreground': oklch(randomBetween(0.11, 0.16), randomBetween(0.01, 0.03), secondaryHue + randomBetween(-25, 25)),
    '--muted': oklch(randomBetween(0.2, 0.28), randomBetween(0.02, 0.05), baseHue + randomBetween(-30, 30)),
    '--muted-foreground': oklch(randomBetween(0.74, 0.84), randomBetween(0.012, 0.03), secondaryHue + randomBetween(-20, 20)),
    '--accent': oklch(randomBetween(0.68, 0.78), randomBetween(0.12, 0.23), accentHue),
    '--accent-foreground': oklch(randomBetween(0.11, 0.17), randomBetween(0.01, 0.03), accentHue + randomBetween(-30, 30)),
    '--destructive': oklch(randomBetween(0.58, 0.67), randomBetween(0.18, 0.25), destructiveHue),
    '--destructive-foreground': oklch(randomBetween(0.92, 0.97), randomBetween(0.006, 0.018), destructiveHue + randomBetween(120, 220)),
    '--border': oklch(randomBetween(0.26, 0.34), randomBetween(0.02, 0.05), baseHue + randomBetween(-25, 25)),
    '--input': oklch(randomBetween(0.2, 0.26), randomBetween(0.02, 0.05), baseHue + randomBetween(-25, 25)),
    '--ring': oklch(randomBetween(0.68, 0.8), randomBetween(0.13, 0.24), baseHue + randomBetween(-20, 20)),
  } satisfies Record<string, string>;
};

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
    for (const variableName of PALETTE_VARIABLE_NAMES) {
      root.style.removeProperty(variableName);
    }

    delete root.dataset.paletteMode;
  };

  const applyPalette = (palette: Record<string, string>) => {
    if (typeof document === 'undefined') {
      return;
    }

    const root = document.documentElement;

    for (const [variableName, value] of Object.entries(palette)) {
      root.style.setProperty(variableName, value);
    }

    root.dataset.paletteMode = 'random';
  };

  const setPaletteMode = (mode: 'original' | 'random') => {
    if (typeof document === 'undefined') {
      return;
    }

    if (mode === 'original') {
      clearPalette();
      setIsRandomPaletteEnabled(false);
      return;
    }

    applyPalette(createRandomPalette());
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
              onClick={() => setPaletteMode(isRandomPaletteEnabled ? 'original' : 'random')}
              aria-label={isRandomPaletteEnabled ? 'Switch to original theme' : 'Switch to random palette'}
            >
              <Palette className="size-4" />
            </Button>

            <div
              className="hidden sm:inline-flex rounded-md border border-border overflow-hidden"
              role="group"
              aria-label="Theme mode toggle"
            >
              <Button
                type="button"
                variant={isRandomPaletteEnabled ? 'ghost' : 'secondary'}
                size="sm"
                className="rounded-none border-0"
                onClick={() => setPaletteMode('original')}
              >
                Original
              </Button>
              <Button
                type="button"
                variant={isRandomPaletteEnabled ? 'secondary' : 'ghost'}
                size="sm"
                className="rounded-none border-0"
                onClick={() => setPaletteMode('random')}
              >
                Random
              </Button>
            </div>

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
