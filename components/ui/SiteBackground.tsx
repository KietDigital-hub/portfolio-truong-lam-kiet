import Image from "next/image";

/**
 * Nền toàn trang: ảnh nen.png cố định, phủ lớp gradient navy đậm để chữ luôn đọc được.
 * Đặt fixed ở -z-30 nên nằm sau cả AuroraBackground và mọi section.
 */
export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-30 overflow-hidden">
      <Image
        src="/images/nen.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover object-center opacity-45 blur-[6px]"
      />
      {/* Lớp phủ: giữ ánh sáng xanh của ảnh nhưng làm mờ chi tiết để chữ luôn đọc được */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_15%,rgba(6,13,30,0.72),rgba(6,13,30,0.94)_60%,rgba(3,8,20,0.99))]" />
      <div className="absolute inset-0 bg-oat/45" />
    </div>
  );
}
