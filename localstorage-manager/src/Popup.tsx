import React, { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import LocalStorageList from "./components/LocalStorageList/LocalStorageList";
import LocalStorageForm from "./components/LocalStorageForm/LocalStorageForm";
import LocalStorageEditor from "./components/LocalStorageEditor/LocalStorageEditor";
import ToggleAddFormButton from "./components/ToggleAddFormButton/ToggleAddFormButton";
import "./styles/popup.css";

const Popup: React.FC = () => {
	const { items, addItem, updateItem, deleteItem } = useLocalStorage();
	// const [isAddFormVisible, setAddFormVisible] = useState(false);

	return (
		<div className="popup-container">
			<div className="viewer-container">
				<LocalStorageList items={items} onDelete={deleteItem} />
			</div>
			<div className="controls-container">
				<LocalStorageForm onAdd={addItem} />
				<LocalStorageEditor items={items} onUpdate={updateItem} />
			</div>
		</div>
		//
		// <div className="popup-container">
		// 	<LocalStorageList items={items} onDelete={deleteItem} />
		// 	<ToggleAddFormButton isVisible={isAddFormVisible} onClick={() => setAddFormVisible((prev) => !prev)} />
		// 	{isAddFormVisible && <LocalStorageForm onAdd={addItem} />}
		// 	<LocalStorageEditor items={items} onUpdate={updateItem} />
		// </div>
	);
};

export default Popup;
