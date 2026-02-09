'use client';

import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';

type UIContextValue = {
    // Navbar / mobile menu
    isNavOpen: boolean;
    openNav: () => void;
    closeNav: () => void;
    toggleNav: () => void;

    // Theme (example)
    theme: 'light' | 'dark';
    setTheme: (t: 'light' | 'dark') => void;
    toggleTheme: () => void;
};

const UIContext = createContext<UIContextValue | null>(null);

export function UIProvider({ children }: { children: React.ReactNode }) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const openNav = useCallback(() => setIsNavOpen(true), []);
    const closeNav = useCallback(() => setIsNavOpen(false), []);
    const toggleNav = useCallback(() => setIsNavOpen(v => !v), []);

    const toggleTheme = useCallback(() => {
        setTheme(t => (t === 'light' ? 'dark' : 'light'));
    }, []);

    const value = useMemo(
        () => ({
            isNavOpen,
            openNav,
            closeNav,
            toggleNav,
            theme,
            setTheme,
            toggleTheme,
        }),
        [isNavOpen, openNav, closeNav, toggleNav, theme, setTheme, toggleTheme]
    );

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
    const ctx = useContext(UIContext);
    if (!ctx) throw new Error('useUI must be used within a UIProvider');
    return ctx;
}