"use client";

import { Button } from "@nextui-org/button";
import { CloudMoon, CloudSun } from "@phosphor-icons/react/dist/ssr/index";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { OneMoonIcon, OneSunIcon } from "../icons/OneIcons";

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState<boolean>(false);
	const { theme, setTheme } = useTheme();

	const handleThemeSwitch = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<Button
			variant="faded"
			color="primary"
			aria-label="Toggle theme"
			onClick={() => handleThemeSwitch()}
			isIconOnly
		>
			{theme === "light" ? <OneSunIcon /> : <OneMoonIcon />}
		</Button>
	);
};

export default ThemeSwitcher;
