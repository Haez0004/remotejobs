"use client";

import { toggleSaved, useSavedIds } from "@/lib/saved";

export default function SaveButton({ id }: { id: number }) {
  const saved = useSavedIds().includes(id);

  return (
    <button
      type="button"
      aria-pressed={saved}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleSaved(id);
      }}
      className={
        saved
          ? "rounded-lg border border-cyan-400 bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900"
          : "rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-cyan-400"
      }
    >
      {saved ? "Saved" : "Save"}
    </button>
  );
}
