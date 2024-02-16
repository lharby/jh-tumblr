const createCustomElement = () =>
    customElements.define(
        'ui-include',
        class extends HTMLElement {
            async connectedCallback() {
                let src = this.getAttribute('src');
                this.innerHTML = await (await fetch(src)).text();
            }
        }
    );

export { createCustomElement };
