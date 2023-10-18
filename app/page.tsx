import ThemeTabsSwitcher from "@/src/components/theme/ThemeTabsSwitcher";
import { Button } from "@nextui-org/button";

export default function Home() {
	return (
		<main>
			<div className="h-screen bg-red-500/50">
				<ThemeTabsSwitcher />
			</div>
			<div className="h-screen bg-blue-500/50">2</div>
		</main>
	);
}
