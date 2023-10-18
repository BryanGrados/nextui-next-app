"use client";

import { Avatar } from "@nextui-org/avatar";
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownSection,
	DropdownTrigger,
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import { OneConfigIcon, OneLogoutIcon, OneThemeIcon, OneUserIcon } from "../icons/OneIcons";
import ThemeTabsSwitcher from "../theme/ThemeTabsSwitcher";

const options = [
	{
		key: "profile",
		textValue: "User Profile",
		showDivider: true,
		render: (
			<User
				name="Bryan Grados"
				description="@bryangrados"
				classNames={{
					name: "text-default-600",
					description: "text-default-500",
				}}
				avatarProps={{
					size: "sm",
					src: "https://avatars.githubusercontent.com/u/30373425?v=4",
				}}
			/>
		),
	},
	{
		key: "config",
		textValue: "Configuración",
		startContent: <OneConfigIcon />,
	},
	{
		key: "theme",
		textValue: "Cambiar tema",
		startContent: <OneThemeIcon />,
		render: <ThemeTabsSwitcher />,
	},
	{
		key: "logout",
		textValue: "Cerrar sesión",
		startContent: <OneLogoutIcon />,
	},
];

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
			<DropdownMenu aria-label="Profile Options" variant="flat">
				{options.map((option) => (
					<DropdownSection key={option.key} showDivider={option.showDivider}>
						<DropdownItem
							key={option.key}
							startContent={option.startContent}
							textValue={option.textValue}
						>
							{option.render ? option.render : option.textValue}
						</DropdownItem>
					</DropdownSection>
				))}
			</DropdownMenu>
		</Dropdown>
	);
};

export default OneAccountButton;
