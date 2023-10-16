"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<NextUIProvider>
			<NextThemeProvider attribute="class" defaultTheme="light">
				{children}
			</NextThemeProvider>
		</NextUIProvider>
	);
};

export default RootProvider;
