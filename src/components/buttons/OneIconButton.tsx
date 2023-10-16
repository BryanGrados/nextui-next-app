import { Button } from "@nextui-org/button";
import type { ButtonProps } from "@nextui-org/react";

const OneIconButton = (props: ButtonProps) => {
	return (
		<Button isIconOnly {...props}>
			{props.children}
		</Button>
	);
};

export default OneIconButton;
