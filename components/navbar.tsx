"use client";
import Link from "next/link"
import { useState } from "react";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-background border-b border-border px-4 py-3 shadow-sm">
            <div className="flex items-center justify-between max-w-screen-xl mx-auto relative">
                {/* Left: Logo */}
                <div className="font-extrabold text-2xl tracking-tight text-primary">
                    <Link href="/" className="hover:underline underline-offset-4">Vaibhavcommerce</Link>
                </div>
                {/* Center: Nav Links */}
                <div className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
                    <Link
                        href="/"
                        className="text-foreground font-medium px-2 py-1 rounded hover:text-primary transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="/product"
                        className="text-foreground font-medium px-2 py-1 rounded hover:text-primary transition-colors"
                    >
                        All Products
                    </Link>
                    <Link
                        href="/checkout"
                        className="text-foreground font-medium px-2 py-1 rounded hover:text-primary transition-colors"
                    >
                        Checkout
                    </Link>
                </div>
                {/* Right: Auth Buttons */}
                <div className="hidden md:flex items-center gap-2">
                    <Link
                        href="/login"
                        className="text-foreground font-medium px-3 py-1 rounded hover:bg-muted transition-colors"
                    >
                        Login
                    </Link>
                    <Link
                        href="/register"
                        className="px-3 py-1 rounded text-primary font-medium transition-colors"
                    >
                        Register
                    </Link>
                </div>
                {/* Hamburger for mobile */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded hover:bg-muted transition"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span className="block w-6 h-0.5 bg-foreground mb-1"></span>
                    <span className="block w-6 h-0.5 bg-foreground mb-1"></span>
                    <span className="block w-6 h-0.5 bg-foreground"></span>
                </button>
            </div>
            {/* Mobile menu */}
            {menuOpen && (
                <div className="flex flex-col gap-2 mt-3 md:hidden animate-in fade-in-0 slide-in-from-top-2">
                    <Link
                        href="/"
                        className="text-foreground font-medium px-2 py-2 rounded hover:text-primary transition-colors"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/product"
                        className="text-foreground font-medium px-2 py-2 rounded hover:text-primary transition-colors"
                        onClick={() => setMenuOpen(false)}
                    >
                        All Products
                    </Link>
                    <Link
                        href="/checkout"
                        className="text-foreground font-medium px-2 py-2 rounded hover:text-primary transition-colors"
                        onClick={() => setMenuOpen(false)}
                    >
                        Checkout
                    </Link>
                    <Link
                        href="/login"
                        className="text-foreground font-medium px-3 py-2 rounded hover:bg-muted transition-colors"
                        onClick={() => setMenuOpen(false)}
                    >
                        Login
                    </Link>
                    <Link
                        href="/register"
                        className="px-3 py-2 rounded text-primary font-medium transition-colors"
                        onClick={() => setMenuOpen(false)}
                    >
                        Register
                    </Link>
                </div>
            )}
        </nav>
    );
}