// Framework

import { PhoneNumberDirective } from "./directives/phone-number.directive";
import { CreditCardDirective } from "./directives/credit-card.directive";

const directives = [PhoneNumberDirective, CreditCardDirective];

directives.forEach((directive) => {
	const elements = document.querySelectorAll<HTMLElement>(directive.selector);

	elements.forEach((e) => {
		if (e) {
			const directiveInstance = new directive(e);
			directiveInstance.init();
		}
	});
});
