"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false, // rAF do gsap.ticker chạy, xem bên dưới
      duration: 1.1,
      // Mặc định Lenis CHẶN link neo (#about...). Không bật cờ này thì sau khi
      // bấm nav, cuộn native của trình duyệt đánh nhau với vòng lặp của Lenis
      // -> lăn chuột không ăn.
      anchors: true,
      // Cho phép vùng con có thanh cuộn riêng tự cuộn thay vì Lenis nuốt sự kiện.
      allowNestedScroll: true,
      // Bấm link nội bộ thì dừng quán tính đang trôi, tránh trôi ngược lại.
      stopInertiaOnNavigate: true,
    });
    lenis.on("scroll", ScrollTrigger.update);

    function raf(time: number) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
