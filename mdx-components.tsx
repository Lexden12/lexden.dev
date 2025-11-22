import type { MDXComponents } from 'mdx/types';

type VideoProps = {
  src: string;
  type?: string;
  className?: string;
  ariaLabel?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  controls?: boolean;
};

function Video({ 
  src, 
  type = "video/mp4", 
  className = "w-full h-auto block rounded-md shadow",
  ariaLabel = "Video",
  autoPlay = false,
  muted = false,
  loop = false,
  playsInline = false,
  controls = true,
}: VideoProps) {
  return (
    <video 
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      controls={controls}
      className={className} 
      aria-label={ariaLabel}
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-neutral-100 mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-neutral-100 mb-5 mt-7">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-neutral-100 mb-4 mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-neutral-200 mb-3 mt-5">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-semibold text-neutral-200 mb-3 mt-4">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-base font-semibold text-neutral-300 mb-2 mt-3">
        {children}
      </h6>
    ),
    p: ({ children }) => (
      <p className="text-xl text-neutral-300 mb-4 leading-relaxed max-w-2xl">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-neutral-300 mb-4 space-y-2">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-neutral-300">{children}</li>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-400 hover:text-blue-300 underline"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-neutral-800 text-pink-400 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-neutral-800 text-neutral-100 p-4 rounded-lg overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-neutral-600 pl-4 italic text-neutral-400 my-4">
        {children}
      </blockquote>
    ),
    Video,
    ...components,
  };
}
