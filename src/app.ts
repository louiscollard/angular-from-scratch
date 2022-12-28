class PhoneNumber {
	constructor(public element: HTMLElement) {}

	formatPhoneNumber(element: HTMLInputElement) {
		const value = element.value.replace(/[^\d]/g, "").substring(0, 10);
		const groups: string[] = [];

		for (let i = 0; i < value.length; i += 2) {
			groups.push(value.substring(i, i + 2));
		}

		element.value = groups.join(" ");
	}

	init() {
		this.element.style.borderColor = "red";

		this.element.addEventListener("input", (e) => {
			this.formatPhoneNumber(e.target as HTMLInputElement);
		});
	}
}

const element = document.querySelector<HTMLElement>("#mobile-number");

if (element) {
	const directive = new PhoneNumber(element);
	directive.init();
}
