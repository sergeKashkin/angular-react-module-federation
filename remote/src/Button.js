// remote/src/Button.js
import React from "react";
import ReactDOM from "react-dom/client";

export const Button = (props) => <button>Hello {props.title}!</button>;

export function renderComponent(HTMLElement, props) {
    ReactDOM.createRoot(HTMLElement).render(<Button {...props}></Button>);
}
export default Button;