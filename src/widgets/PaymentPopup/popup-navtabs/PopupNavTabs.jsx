import React, { useState } from "react";
import styles from "./PopupNavTabs.module.css";

const tabs = [
  { id: "cash", label: "Cash", icon: "💰" },
  { id: "dd", label: "DD", icon: "📄" },
  { id: "cheque", label: "Cheque", icon: "🧾" },
  { id: "card", label: "Credit/Debit Card", icon: "💳" },
];

const PopupNavTabs = ({ onChange }) => {
  const [active, setActive] = useState("cash");

  const handleClick = (id) => {
    setActive(id);
    onChange && onChange(id);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabsContainer}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${active === tab.id ? styles.active : ""}`}
            onClick={() => handleClick(tab.id)}
          >
            <span className={styles.icon}>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopupNavTabs;
