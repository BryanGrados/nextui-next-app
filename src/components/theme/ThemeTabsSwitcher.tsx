"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { OneMoonIcon, OneSunIcon } from "../icons/OneIcons";

const ThemeTabsSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	const handleThemeSwitch = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div className="flex flex-col w-full">
			<Tabs
				aria-label="Toggle theme"
				variant="solid"
				selectedKey={theme}
				onSelectionChange={() => handleThemeSwitch()}
			>
				<Tab
					key="light"
					title={
						<div className="flex items-center space-x-3">
							<OneSunIcon />
							<span>Claro</span>
						</div>
					}
				/>
				<Tab
					key="dark"
					title={
						<div className="flex items-center space-x-3">
							<OneMoonIcon />
							<span>Oscuro</span>
						</div>
					}
				/>
			</Tabs>
		</div>
	);
};

export default ThemeTabsSwitcher;
