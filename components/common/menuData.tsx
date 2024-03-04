import { Button, Menu } from "@mantine/core";
import { Setting2 } from "iconsax-react";
import React from "react";
import { useTheme } from "next-themes";
import { Themes } from "./Themes";

export const MenuData = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();
  return (
    <Menu
      styles={{
        dropdown: {
          borderRadius: "10px",
          backgroundColor: theme == "light" ? "" : "#161C27",
          border: theme == "light" ? "" : "1px solid #C1C2C6",
        },
        item: {
          "&[data-hovered]": {
            backgroundColor: "transparent",
          },
        },
      }}
    >
      <Menu.Target>
        <button className="flex items-center justify-center">
          <Setting2
            size="22"
            color={theme === "light" ? "#121212" : "#ffffff"}
          />
        </button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>
          <div className="flex gap-[10px] items-center dark:bg-[#232A37]">
            <Themes />
          </div>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
