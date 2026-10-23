import { useSyncExternalStore } from "react";

const KEY = "remotejobs:saved";
const EMPTY: number[] = [];

let cache: number[] = EMPTY;
let cacheRaw: string | null = null;
const listeners = new Set<() => void>();

function readRaw(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function getSnapshot(): number[] {
  const raw = readRaw();
  if (raw === cacheRaw) return cache;
  cacheRaw = raw;
  try {
    const parsed = raw ? JSON.parse(raw) : [];
    cache = Array.isArray(parsed)
      ? parsed.filter((n) => typeof n === "number")
      : EMPTY;
  } catch {
    cache = EMPTY;
  }
  return cache;
}

function getServerSnapshot(): number[] {
  return EMPTY;
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

export function toggleSaved(id: number) {
  const current = getSnapshot();
  const next = current.includes(id)
    ? current.filter((n) => n !== id)
    : [...current, id];
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // storage blocked or full: ignore
  }
  listeners.forEach((l) => l());
}

export function useSavedIds(): number[] {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
