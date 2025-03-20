const fs = require("fs");
const path = require("path");

const domain = "https://www.cleanjeong.com"; // 🔹 본인 도메인 입력

// 🔹 실제 사이트에서 사용되는 라우트 경로
const pages = [
  "/",
  "/intro", // 회사소개
  "/houseclean", // 입주 · 거주 청소
  "/completion", // 준공 청소
  "/special", // 특수 청소
  "/shop", // 상가 청소
  "/help", // 고객센터
];

// 🔹 sitemap.xml 내용 생성
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map((page) => `<url><loc>${domain}${page}</loc></url>`).join("\n  ")}
</urlset>`;

// 🔹 sitemap.xml 파일을 `public/` 폴더에 저장
const targetPath = path.join(__dirname, "public", "sitemap.xml");
fs.writeFileSync(targetPath, sitemapContent, "utf8");

console.log("✅ Sitemap 생성 완료! public/sitemap.xml");
