'use client';

import { useRouter } from 'next/navigation';
import { setCookie } from '../utils/cookies';
import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';
import { ThemeValues } from '@/types/Theme';

type UIContextValue = {
    // Navbar / mobile menu
    isNavOpen: boolean;
    openNav: () => void;
    closeNav: () => void;
    toggleNav: () => void;
    theme: ThemeValues;
    setTheme: (t: 'light' | 'dark') => void;
    toggleTheme: () => void;
};

const UIContext = createContext<UIContextValue | null>(null);


export function UIProvider({ initTheme, children }: { initTheme: ThemeValues, children: React.ReactNode }) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [theme, setTheme] = useState(initTheme);
    const router = useRouter();

    const openNav = useCallback(() => setIsNavOpen(true), []);
    const closeNav = useCallback(() => setIsNavOpen(false), []);
    const toggleNav = useCallback(() => setIsNavOpen(v => !v), []);

    const toggleTheme = () => {
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        setCookie('theme', next);
        router.refresh();
    };


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