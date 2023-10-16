import {
	CloudMoon,
	CloudSun,
	User,
} from "@phosphor-icons/react/dist/ssr/index";

export const OneSunIcon = () => {
	return <CloudSun size={20} weight="duotone" className="fill-default-500" />;
};

export const OneMoonIcon = () => {
	return <CloudMoon size={20} weight="duotone" className="fill-default-600" />;
};

export const OneUserIcon = () => {
	return (
		<User
			size={20}
			weight="light"
			className="dark:fill-default-600 fill-default-500"
		/>
	);
};
