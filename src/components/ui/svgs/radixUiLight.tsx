import type { SVGProps } from "react";

const RadixUiLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    fill="#121212"
    viewBox="4 0 17 25"
  >
    <path d="M12 25a8 8 0 1 1 0-16v16zM12 0H4v8h8V0zM17 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
  </svg>
);

export { RadixUiLight };
