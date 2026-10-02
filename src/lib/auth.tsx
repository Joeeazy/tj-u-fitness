"use client";
// Front-end mock auth: accounts live in this browser's localStorage only.
// Replace with a real backend (and real M-Pesa STK push) before launch.
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Member = {
  name: string; phone: string; email: string; password: string;
  planId: string; payRef: string; startedAt: string;
};

type Ctx = {
  user: Member | null;
  ready: boolean;
  register: (m: Member) => void;
  login: (id: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<Ctx | null>(null);
const USERS = "tju-users";
const SESSION = "tju-session";
const norm = (s: string) => s.replace(/\s/g, "").toLowerCase();

function readUsers(): Member[] {
  try { return JSON.parse(localStorage.getItem(USERS) || "[]"); } catch { return []; }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Member | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const phone = localStorage.getItem(SESSION);
    if (phone) setUser(readUsers().find(u => norm(u.phone) === phone) || null);
    setReady(true);
  }, []);

  const register = (m: Member) => {
    const users = readUsers().filter(u => norm(u.phone) !== norm(m.phone));
    localStorage.setItem(USERS, JSON.stringify([...users, m]));
    localStorage.setItem(SESSION, norm(m.phone));
    setUser(m);
  };

  const login = (id: string, password: string) => {
    const u = readUsers().find(x => (norm(x.phone) === norm(id) || norm(x.email) === norm(id)) && x.password === password);
    if (!u) return false;
    localStorage.setItem(SESSION, norm(u.phone));
    setUser(u);
    return true;
  };

  const logout = () => { localStorage.removeItem(SESSION); setUser(null); };

  return <AuthContext.Provider value={{ user, ready, register, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const c = useContext(AuthContext);
  if (!c) throw new Error("useAuth must be used inside AuthProvider");
  return c;
}
