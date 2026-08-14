"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Target, Rocket, PenTool, BarChart3 } from "lucide-react";
import { profile, metrics } from "@/lib/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { gsap, SplitText } from "@/lib/gsap";

const traits = [
  { icon: Sparkles, label: "AI-first" },
  { icon: Target, label: "Agents" },
  { icon: Rocket, label: "Automation" },
  { icon: PenTool, label: "AI Web Design" },
  { icon: BarChart3, label: "Data" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const wordmarkY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  useEffect(() => {
    if (!headlineRef.current) return;
    const split = SplitText.create(headlineRef.current, {
      type: "lines",
      mask: "lines",
      linesClass: "split-line",
    });
    const ctx = gsap.context(() => {
      gsap.set(split.lines, { yPercent: 115, rotate: 4, opacity: 0, transformOrigin: "left bottom" });
      gsap.to(split.lines, {
        yPercent: 0,
        rotate: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        delay: 0.3,
        ease: "power4.out",
      });
    });
    return () => {
      ctx.revert();
      split.revert();
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-svh flex-col overflow-hidden pt-20 sm:pt-16"
    >
      {/* Wordmark vàng khổng lồ phía sau, giống chữ NESH */}
      <motion.div
        aria-hidden
        style={{ y: wordmarkY }}
        className="pointer-events-none absolute left-1/2 top-8 z-0 w-full -translate-x-1/2 select-none text-center font-black uppercase leading-[0.8] tracking-[-0.05em] text-lime sm:top-0"
      >
        <span className="block text-[38vw] sm:text-[28vw]">KIET</span>
      </motion.div>

      {/* Badge nổi trái + panel tag phải (chỉ desktop) */}
      <div className="pointer-events-none absolute inset-x-0 top-[16%] z-20 hidden lg:block">
        <div className="mx-auto flex max-w-6xl items-start justify-between px-8">
          <div className="flex flex-col gap-4">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl bg-ink/75 px-5 py-3 text-cream shadow-lg backdrop-blur-md"
            >
              <div className="text-2xl font-black leading-none text-lime">8</div>
              <div className="mt-1 text-xs font-semibold">AI tools in daily use</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="rounded-2xl bg-ink/75 px-5 py-3 text-cream shadow-lg backdrop-blur-md"
            >
              <div className="text-2xl font-black leading-none text-lime">3</div>
              <div className="mt-1 text-xs font-semibold">AI agent platforms</div>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="flex flex-col gap-2.5 rounded-2xl bg-ink/60 px-6 py-5 shadow-lg backdrop-blur-md"
          >
            {traits.map((trait) => (
              <div key={trait.label} className="flex items-center gap-3">
                <trait.icon size={16} className="text-lime" strokeWidth={2.6} />
                <span className="text-sm font-bold text-cream">{trait.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Ảnh chân dung cutout đè giữa wordmark */}
      <motion.div
        style={{ y: photoY }}
        className="relative z-10 mx-auto -mt-2 w-[74vw] max-w-[430px] sm:-mt-8 sm:w-[32vw]"
      >
        <Image
          src="/images/portrait-cutout.png"
          alt={profile.name}
          width={1024}
          height={832}
          priority
          className="h-auto w-full drop-shadow-[0_24px_48px_rgba(0,0,0,0.28)] [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
        />
      </motion.div>

      {/* Headline đè lên phần dưới ảnh, màu ink như bản gốc dùng trên nền sáng */}
      <div className="relative z-20 -mt-4 sm:-mt-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h1
            ref={headlineRef}
            className="text-center text-5xl font-black leading-[1.04] tracking-tight text-ink sm:text-left sm:text-6xl lg:text-7xl"
          >
            Digital Marketing,
            <br />
            powered by AI.
            <br />
            Built end to end.
          </h1>
        </div>
      </div>

      {/* Hàng dưới: caption trái — CTA giữa — mô tả phải */}
      <div className="relative z-20 mx-auto mt-8 grid w-full max-w-6xl items-end gap-8 px-5 pb-10 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
        <Reveal delay={0.5}>
          <p className="hidden text-sm leading-relaxed text-ink-soft lg:block">
            Digital Marketing student.
            <br />
            That&apos;s Kiet.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="#contact" variant="primary">
              Get in touch
            </Button>
            <Button href="#skills" variant="primary">
              See my AI stack
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.7}>
          <p className="text-center text-sm leading-relaxed text-ink-soft lg:text-right">
            {profile.heroDescription}
          </p>
        </Reveal>
      </div>

      {/* Metric strip */}
      <div className="relative z-20 mx-auto w-full max-w-6xl px-5 pb-14 sm:px-8">
        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border-2 border-ink bg-ink sm:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white px-6 py-6">
                <div className="text-3xl font-black leading-none">
                  {m.value}
                  <span className="text-lime brightness-[0.6] saturate-200">{m.suffix}</span>
                </div>
                <div className="mt-2 text-xs font-bold uppercase tracking-wide text-ink">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
