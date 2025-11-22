import mdx from "@next/mdx";
import type { NextConfig } from "next";

const mdxPlugin = mdx({
  extension: /.mdx?$/,
});

const nextConfig: NextConfig = {
  // Configure page extensions to include MDX
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

export default mdxPlugin(nextConfig);
