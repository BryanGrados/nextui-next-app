"use client";

import { Link } from "@nextui-org/link";
import { NavbarItem } from "@nextui-org/navbar";
import { extendVariants } from "@nextui-org/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
	{
		name: "Inicio",
		url: "/",
	},
	{
		name: "Ordenes",
		url: "/orders",
	},
	{
		name: "Tiendas",
		url: "/projects",
	},
	{
		name: "Soporte",
		url: "/contact",
	},
];

const NavLink = extendVariants(Link, {
	variants: {
		color: {
			active:
				"font-semibold text-black bg-default-500/20 dark:bg-default-700/20 dark:text-white rounded-xl",
			inactive:
				"font-medium text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-gray-100 rounded-xl",
		},
	},
});

const NavigationLinks = () => {
	const pathname = usePathname();

	return (
		<>
			{navLinks.map(({ name, url }, index) => {
				return (
					<NavbarItem key={`${name}-${index}`}>
						<NavLink
							color={pathname === url ? "active" : "inactive"}
							isBlock
							href={url}
							as={NextLink}
							className="transition-colors duration-200 ease-soft-spring"
						>
							{name}
						</NavLink>
					</NavbarItem>
				);
			})}
		</>
	);
};

export default NavigationLinks;
