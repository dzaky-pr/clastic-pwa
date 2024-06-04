/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextConfig = {
  //   content: ['./pages/**/*.{ts,tsx}', './public/**/*.html'],
  content: ['./pages/**/*.{ts,tsx}'],
  theme: {},
};

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
});

module.exports = withPWA(nextConfig);
