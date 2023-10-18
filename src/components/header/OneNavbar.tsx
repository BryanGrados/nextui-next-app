import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Atom } from "@phosphor-icons/react/dist/ssr/index";
import OneAccountButton from "../buttons/OneAccountButton";
import NavigationLinks from "./navLinks";

const OneNavbar = () => {
	return (
		<Navbar shouldHideOnScroll isBordered isBlurred={false}>
			<NavbarContent>
				<NavbarMenuToggle className="sm:hidden" />
				<NavbarBrand>
					<Atom size={40} weight="light" />
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden gap-4 sm:flex" justify="center">
				<NavigationLinks />
			</NavbarContent>

			<NavbarContent justify="end">
				<NavbarItem>
					<OneAccountButton />
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu>
				<NavbarMenuItem>Inicio</NavbarMenuItem>
			</NavbarMenu>
		</Navbar>
	);
};

export default OneNavbar;
