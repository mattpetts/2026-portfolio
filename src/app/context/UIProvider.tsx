'use client';

import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';

type Theme = 'light' | 'dark';

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

function setThemeCookie(theme: Theme) {
    document.cookie = `theme=${theme}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function UIProvider({ initialTheme, children }: { initialTheme: Theme, children: React.ReactNode }) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [theme, setTheme] = useState<Theme>( initialTheme );

    const openNav = useCallback(() => setIsNavOpen(true), []);
    const closeNav = useCallback(() => setIsNavOpen(false), []);
    const toggleNav = useCallback(() => setIsNavOpen(v => !v), []);

    const toggleTheme = useCallback(() => {
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        setThemeCookie(next);
    }, [theme]);


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