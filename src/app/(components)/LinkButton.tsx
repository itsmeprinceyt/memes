"use client";
import Link from "next/link";
import { GradientLinkButtonProps } from "../../type/LinkButton.type";

export default function LinkButton({ href, children }: GradientLinkButtonProps) {
    return (
        <Link
            href={href}
            className="relative inline-block p-2 px-4 rounded-lg shadow-md shadow-black/10 border border-teal-400/50 overflow-hidden group"
        >
            {/* Initial gradient */}
            <span className="absolute inset-0 bg-gradient-to-r from-teal-100 to-teal-200 transition-opacity duration-500 opacity-100 group-hover:opacity-0" />

            {/* Hover gradient */}
            <span className="absolute inset-0 bg-gradient-to-r from-teal-200 to-teal-100 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

            {/* Button content */}
            <span className="relative z-10 text-black">{children}</span>
        </Link>
    );
}
