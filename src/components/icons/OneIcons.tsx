import type { IconProps } from "@phosphor-icons/react";
import { GearSix, Moon, Palette, SignOut, Sun, User } from "@phosphor-icons/react/dist/ssr/index";

interface OneIconProps {
	Icon: React.FC<IconProps>;
}

const defaultSize = 24;
const defaultWeight = "light";
const defaultStyle = "dark:fill-default-600 fill-default-500";

const OneIcon: React.FC<OneIconProps> = ({ Icon }) => (
	<Icon size={defaultSize} weight={defaultWeight} className={defaultStyle} />
);

export const OneSunIcon = () => <OneIcon Icon={Sun} />;
export const OneMoonIcon = () => <OneIcon Icon={Moon} />;
export const OneUserIcon = () => <OneIcon Icon={User} />;
export const OneConfigIcon = () => <OneIcon Icon={GearSix} />;
export const OneLogoutIcon = () => <OneIcon Icon={SignOut} />;
export const OneThemeIcon = () => <OneIcon Icon={Palette} />;
