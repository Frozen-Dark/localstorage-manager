import React, { useState } from "react";
import { LocalStorageItem } from "../../hooks/useLocalStorage";
import "./LocalStorageEditor.css";

interface Props {
	items: LocalStorageItem[];
	onUpdate: (key: string, value: string) => void;
}

const LocalStorageEditor: React.FC<Props> = ({ items, onUpdate }) => {
	const [selectedKey, setSelectedKey] = useState<string | null>(null);
	const [value, setValue] = useState("");

	const handleSelect = (key: string) => {
		const selectedItem = items.find((item) => item.key === key);
		if (selectedItem) {
			setSelectedKey(selectedItem.key);
			setValue(selectedItem.value);
		}
	};

	const handleUpdate = () => {
		if (selectedKey) {
			onUpdate(selectedKey, value);
		}
	};

	return (
		<div className="edit-form">
			<select onChange={(e) => handleSelect(e.target.value)}>
				<option value="">Select Key</option>
				{items.map((item) => (
					<option key={item.key} value={item.key}>{item.key}</option>
				))}
			</select>
			<input
				placeholder="New Value"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button onClick={handleUpdate}>Update</button>
		</div>
	);
};

export default LocalStorageEditor;
