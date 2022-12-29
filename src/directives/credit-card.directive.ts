import { Formatter } from "../services/formatter";

export class CreditCardDirective {
	static selector = "[credit-card]";

	constructor(public element: HTMLElement, private formatter: Formatter) {}

	formatCreditCardNumber(element: HTMLInputElement) {
		element.value = this.formatter.formatNumber(element.value, 16, 4, true);
	}

	init() {
		this.element.style.borderColor = "blue";

		this.element.addEventListener("input", (e) => {
			this.formatCreditCardNumber(e.target as HTMLInputElement);
		});
	}
}
