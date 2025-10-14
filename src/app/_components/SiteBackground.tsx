"use client";

import { useEffect, useState } from "react";

export default function SiteBackground() {

  const [pos, setPos] = useState({ x: 50, y: 40 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute inset-0 bg-[#070708]" />
      <div className="absolute inset-0 bg-[radial-gradient(80rem_40rem_at_15%_15%,rgba(16,185,129,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(70rem_42rem_at_85%_85%,rgba(168,85,247,0.08),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(55rem_30rem_at_60%_20%,rgba(59,130,246,0.06),transparent_70%)]" />


      <div
        className="absolute -top-40 -left-40 h-[38rem] w-[38rem] rounded-full blur-3xl bg-emerald-500/14
                   will-change-transform"
        style={{ transform: "translate3d(0,0,0)" }}
      />
      <div
        className="absolute top-[55%] -right-44 h-[34rem] w-[34rem] rounded-full blur-3xl bg-fuchsia-500/12
                   will-change-transform"
        style={{ transform: "translate3d(0,0,0)" }}
      />


      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(420px 300px at ${pos.x}% ${pos.y}%, rgba(16,185,129,0.08), transparent 60%)`,
        }}
      />


      <div className="absolute inset-0 mix-blend-overlay opacity-[0.04] bg-[url('/noise.png')]" />


      <div className="absolute inset-0 bg-[radial-gradient(130%_90%_at_50%_60%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}
