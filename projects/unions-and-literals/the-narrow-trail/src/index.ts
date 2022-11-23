export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let available_resource: "food" | "water" | undefined;
	let food = 5;
	let water = 5;
	for (let day = 1; day <= 7; day++) {
		let roll = Math.floor(Math.random() * 6 + 1);
		if (roll === 1) {
			available_resource = "food";
		} else if (roll === 2) {
			available_resource = "water";
		} else {
			// resupply
			if (available_resource === undefined) {
				if (roll % 2 === 0) {
					available_resource = "food";
				} else {
					available_resource = "water";
				}
			} else {
				if (available_resource === "food") {
					food += roll;
				} else {
					water += roll;
				}
				available_resource = undefined;
			}
		}
		food--;
		water--;
		if (food === 0 || water === 0) {
			return false;
		}
	}
	return true;
}
