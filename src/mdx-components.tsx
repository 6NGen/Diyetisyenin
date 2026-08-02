import type { MDXComponents } from "mdx/types";

/**
 * Yazı gövdesinin tipografisi. Sarmalayıcı `.metin` sınıfı çoğu stili verdiği
 * için burada yalnızca gövdeye özel birkaç bileşen geçersiz kılınır.
 */
const components: MDXComponents = {
  h2: ({ children, ...rest }) => (
    <h2 className="font-display font-medium" {...rest}>
      {children}
    </h2>
  ),
  h3: ({ children, ...rest }) => (
    <h3 className="font-display font-medium" {...rest}>
      {children}
    </h3>
  ),
  table: ({ children, ...rest }) => (
    <div className="my-8 overflow-x-auto border border-line">
      <table className="w-full border-collapse text-left" {...rest}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...rest }) => (
    <th
      className="border-b border-line bg-sea-50 px-4 py-3 font-mono text-label tracking-[0.18em] text-sea-700 uppercase"
      {...rest}
    >
      {children}
    </th>
  ),
  td: ({ children, ...rest }) => (
    <td className="border-b border-line px-4 py-3 text-small" {...rest}>
      {children}
    </td>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
