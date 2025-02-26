"use client";

import { FaHome, FaChartBar, FaCog, FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import styles from "../styles/sidebar.module.css";

export default function Sidebar({ isCollapsed, setIsCollapsed }: { isCollapsed: boolean; setIsCollapsed: (val: boolean) => void }) {
  const router = useRouter();

  return (
    <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`} style={{ width: isCollapsed ? "5vw" : "20vw" }}>
      {/* Toggle Button */}
      <button className={styles.toggleButton} onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? <FaBars /> : <FaTimes />}
      </button>

      {/* Navigation */}
      <nav className={styles.nav}>
        <button className={styles.navItem} onClick={() => router.push("/")}>
          <FaHome /> {!isCollapsed && <span>Home</span>}
        </button>
        <button className={styles.navItem} onClick={() => router.push("/analytics")}>
          <FaChartBar /> {!isCollapsed && <span>Analytics</span>}
        </button>
        <button className={styles.navItem} onClick={() => router.push("/settings")}>
          <FaCog /> {!isCollapsed && <span>Settings</span>}
        </button>
      </nav>
    </aside>
  );
}
