import React from "react";
import { LocalStorageItem } from "../../hooks/useLocalStorage";
import "./LocalStorageList.css";

interface Props {
	items: LocalStorageItem[];
	onDelete: (key: string) => void;
}

const LocalStorageList: React.FC<Props> = ({ items, onDelete }) => (
	<div className="storage-list">
		{items.map((item) => (
			<div key={item.key} className="storage-item">
				<span className="key" title={item.key}>{item.key}</span>
				<span className="value" title={item.value}>{item.value.slice(0, 100)}</span>
				<button className="delete-button" onClick={() => onDelete(item.key)}>Delete</button>
			</div>
		))}
	</div>
);

export default LocalStorageList;
