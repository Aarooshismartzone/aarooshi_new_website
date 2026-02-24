"use client";

import { useState } from "react";
import { clearCacheAction } from "../actions/clearCache";
import { useRouter } from "next/navigation";

export default function ClearCachePage() {

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleClear() {
        setLoading(true);

        await clearCacheAction();

        // Clear browser cache (optional)
        localStorage.clear();
        sessionStorage.clear();

        router.refresh(); // clears router cache

        setLoading(false);
        alert("Cache Cleared!");
    }

    return (
        <div className="p-10 max-w-xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-6">
                Clear Application Cache
            </h1>

            <button
                onClick={handleClear}
                className="bg-red-600 text-white px-6 py-3 rounded-lg"
            >
                {loading ? "Clearing..." : "Clear Cache"}
            </button>
        </div>
    );
}