import { useState, useEffect } from "react";

export interface LocalStorageItem {
	key: string;
	value: string;
}

const useLocalStorage = () => {
	const [items, setItems] = useState<LocalStorageItem[]>([]);

	useEffect(() => {
		fetchLocalStorage();
	}, []);

	const fetchLocalStorage = () => {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.scripting.executeScript(
				{
					target: { tabId: tabs[0].id! },
					func: () => Object.entries(localStorage)
				},
				(results) => {
					const data = results[0].result as [string, string][];
					const storageItems = data.map(([key, value]) => ({ key, value }));
					setItems(storageItems);
				}
			);
		});
	};

	const addItem = (key: string, value: string) => {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.scripting.executeScript(
				{
					target: { tabId: tabs[0].id! },
					func: (key, value) => localStorage.setItem(key, value),
					args: [key, value]
				},
				fetchLocalStorage
			);
		});
	};

	const updateItem = (key: string, value: string) => {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.scripting.executeScript(
				{
					target: { tabId: tabs[0].id! },
					func: (key, value) => localStorage.setItem(key, value),
					args: [key, value]
				},
				fetchLocalStorage
			);
		});
	};

	const deleteItem = (key: string) => {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.scripting.executeScript(
				{
					target: { tabId: tabs[0].id! },
					func: (key) => localStorage.removeItem(key),
					args: [key]
				},
				fetchLocalStorage
			);
		});
	};

	return { items, addItem, updateItem, deleteItem };
};

export { useLocalStorage };
