import type { Metadata } from "next";
import "./globals.css";
import "./promo.css";

export const metadata: Metadata = {
  title: "好老师升学帮 · 浙江专升本",
  description:
    "了解好老师升学帮浙江滨江校区的师资、AI智能学习、课程安排、集训住宿和状元班服务。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
