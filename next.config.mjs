/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    missingSuspenseWithCSRBailout: true,
    optimizeCss: true,
    webpackBuildWorker: false,
    optimizePackageImports: [
      "dayjs",
      "lodash",
    ],
  },
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 30, // 1 month
    unoptimized: true,
    loader: 'default',
    contentDispositionType: 'inline',
  },
}

export default nextConfig
