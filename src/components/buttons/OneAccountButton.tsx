"use client";

import { Avatar } from "@nextui-org/avatar";
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	DropdownSection,
} from "@nextui-org/dropdown";
import { OneUserIcon } from "../icons/OneIcons";
import {
	At,
	GearSix,
	SignIn,
	SignOut,
} from "@phosphor-icons/react/dist/ssr/index";

const OneAccountButton = () => {
	return (
		<Dropdown
			backdrop="blur"
			showArrow
			classNames={{
				base: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
				arrow: "bg-default-200",
			}}
		>
			<DropdownTrigger>
				<Avatar
					showFallback
					fallback={<OneUserIcon />}
					as="button"
					className="transition-transform"
					size="md"
					src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
				/>
			</DropdownTrigger>
			<DropdownMenu aria-label="Profile Actions" variant="flat">
				<DropdownItem
					key="profile"
					textValue="User Menu"
					startContent={<At size={20} />}
				>
					<p>user@gmail.com</p>
				</DropdownItem>

				<DropdownSection title="Información">
					<DropdownItem key="config" startContent={<OneUserIcon />}>
						Tu cuenta
					</DropdownItem>
				</DropdownSection>

				<DropdownSection title="Herramientas">
					<DropdownItem key="config" startContent={<GearSix size={20} />}>
						Configuración
					</DropdownItem>
				</DropdownSection>

				<DropdownSection title="Autenticación">
					<DropdownItem
						key="logout"
						color="danger"
						className="text-danger"
						startContent={<SignIn size={20} />}
					>
						Cerrar sesión
					</DropdownItem>
				</DropdownSection>
			</DropdownMenu>
		</Dropdown>
	);
};

export default OneAccountButton;
