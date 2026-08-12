"use client";

import { motion } from "framer-motion";

/**
 * Nền aurora: các quầng màu ấm + lime trôi nhẹ phía sau nội dung, tạo chiều sâu.
 * Đặt fixed ở -z-10 nên nằm sau mọi section (hiện qua các section nền trong suốt,
 * bị che ở section nền tối). Pointer-events none, tông màu giữ đúng palette.
 */
export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -left-[10%] top-[8%] h-[42vw] w-[42vw] rounded-full bg-[radial-gradient(circle,rgba(255,255,35,0.28),transparent_65%)] blur-3xl"
        animate={{ x: [0, 60, -20, 0], y: [0, 40, 80, 0], scale: [1, 1.12, 0.96, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-8%] top-[35%] h-[38vw] w-[38vw] rounded-full bg-[radial-gradient(circle,rgba(211,205,182,0.55),transparent_60%)] blur-3xl"
        animate={{ x: [0, -50, 20, 0], y: [0, -30, 40, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[6%] left-[30%] h-[34vw] w-[34vw] rounded-full bg-[radial-gradient(circle,rgba(255,255,168,0.35),transparent_62%)] blur-3xl"
        animate={{ x: [0, 40, -30, 0], y: [0, -50, -10, 0], scale: [1, 1.08, 0.94, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
