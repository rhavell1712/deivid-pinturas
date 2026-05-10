"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AosInit() {

    useEffect(() => {

        if (typeof window === "undefined") return;

        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });

        // garante atualização após render
        setTimeout(() => {
            AOS.refresh();
        }, 100);

    }, []);

    return null;
}