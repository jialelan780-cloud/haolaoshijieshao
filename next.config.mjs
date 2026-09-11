/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 生产检查使用独立目录，保持正在浏览的开发预览可用。
  distDir: process.env.HLS_BUILD_DIR || ".next",
  // 让 /zsb-query 干净地访问到 public/zsb-query/index.html（静态查询系统）
  async rewrites() {
    return [
      { source: "/zsb-query", destination: "/zsb-query/index.html" },
    ];
  },
};

export default nextConfig;
