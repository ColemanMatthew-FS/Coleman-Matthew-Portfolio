/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false // checks if i'm deploying with github actions
let assetPrefix = '/Coleman-Matthew-Portfolio'
let basePath = '/Coleman-Matthew-Portfolio'
// if i'm deploying with github actions, then I change the routes to the static assets
if(isGithubActions){
    const repo = "Coleman-Matthew-Portfolio"
    assetPrefix = `/${repo}/`
    basePath = `/${repo}`
}
const nextConfig = {
    assetPrefix: assetPrefix,
    basePath: basePath,
    output: "export",  // <=== enables static exports
    // images: { unoptimized: true }, // <=== output export disabled image optimization, so I have to set this
    reactStrictMode: true,
    images: {
        unoptimized: true,
        loader: 'imgix',
        path: 'https://frenchtoast.imgix.net',
    },
};

export default nextConfig;
