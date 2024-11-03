import React from "react";
import "./ToggleAddFormButton.css";

interface Props {
	isVisible: boolean;
	onClick: () => void;
}

const ToggleAddFormButton: React.FC<Props> = ({ isVisible, onClick }) => (
	<button className="toggle-add-form" onClick={onClick}>
		{isVisible ? "Hide Add Form" : "Show Add Form"}
	</button>
);

export default ToggleAddFormButton;
