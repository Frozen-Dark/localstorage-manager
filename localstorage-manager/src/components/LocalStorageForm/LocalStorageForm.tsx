import React, { useState } from "react";
import "./LocalStorageForm.css";

interface Props {
	onAdd: (key: string, value: string) => void;
}

const LocalStorageForm: React.FC<Props> = ({ onAdd }) => {
	const [key, setKey] = useState("");
	const [value, setValue] = useState("");

	const handleSubmit = () => {
		if (key) {
			onAdd(key, value);
			setKey("");
			setValue("");
		}
	};

	return (
		<div className="add-form">
			<input
				placeholder="Key"
				value={key}
				onChange={(e) => setKey(e.target.value)}
			/>
			<input
				placeholder="Value"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button onClick={handleSubmit}>Add</button>
		</div>
	);
};

export default LocalStorageForm;
