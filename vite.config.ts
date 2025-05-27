import react from "@vitejs/plugin-react";
import os from "os";
import path from "path";
import { defineConfig } from "vite";

// 获取局域网 IP 地址
function getLocalIP(): string | null {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    const netInterface = interfaces[name];
    if (!netInterface) continue;
    for (const iface of netInterface) {
      if (
        iface.family === "IPv4" &&
        !iface.internal &&
        iface.address.startsWith("192.")
      ) {
        return iface.address;
      }
    }
  }
  return null;
}

// 自定义插件：启动后打印 IP
function printNetworkAddress() {
  return {
    name: "vite-plugin-print-ip",
    configureServer(server: any) {
      server.httpServer?.once("listening", () => {
        const address = getLocalIP();
        if (address) {
          const info = server.httpServer.address();
          const port = typeof info === "object" && info?.port;
          console.log(`\n➜  Network: http://${address}:${port}/`);
        }
      });
    },
  };
}

export default defineConfig({
  base: "/snappykit/",
  plugins: [react(), printNetworkAddress()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
