/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module "@vitejs/plugin-react-swc" {
  import { Plugin } from "vite";
  const plugin: (options?: Record<string, any>) => Plugin;
  export default plugin;
}

declare module "@radix-ui/react-*";
