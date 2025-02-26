"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import styles from "../styles/layout.module.css";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.dashboardLayout}>
      <Sidebar />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}
