"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex" }}>
          {/* Sidebar */}
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

          {/* Main Content */}
          <main style={{ width: isCollapsed ? "95vw" : "80vw", transition: "width 0.3s ease" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
