/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "",
    output: "export",  // <=== enables static exports
    images: { unoptimized: true }, // <=== output export disabled image optimization, so I have to set this
    reactStrictMode: true,
};

export default nextConfig;
