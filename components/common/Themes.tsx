import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun1 } from "iconsax-react";
import Image from "next/image";

export const Themes = () => {
  const { systemTheme, resolvedTheme, theme, setTheme } = useTheme();
  // const { theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   return null;
  // }
  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  // useEffect(() => {
  //   setTheme(systemTheme === "light" ? "light" : "dark");
  // }, []);

  return (
    <div
      className="rounded-[8px] p-[5px] bg-[#F5F5F6] border-[1px] border-solid  border-[#DADADD] dark:bg-[#252D3D] dark:border-none"
      onClick={() => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? (
        <Sun1 size="20" color="#3851DD" />
      ) : (
        <Moon size="20" color="#FFffff" />
        // <Image src={"/images/moon.png"} alt={""} width={20} height={20} />
      )}
    </div>

    // <button
    //   className="dark:bg-[#232A37]"
    //   onClick={toggleTheme}
    //   style={{
    //     padding: "8px 12px",
    //     cursor: "pointer",
    //     backgroundColor: "transparent",
    //     border: "1px solid #ddd",
    //     borderRadius: "4px",
    //     fontSize: "14px",
    //     fontWeight: "bold",
    //     color: theme === "light" ? "#333" : "#fff",
    //     background: theme === "light" ? "#fff" : "#232A37",
    //   }}
    // >
    //   {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    // </button>
  );
};
