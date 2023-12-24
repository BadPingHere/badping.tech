import { writable } from 'svelte/store';

// Check if localStorage is available (for SSR compatibility)
const isLocalStorageAvailable = typeof localStorage !== 'undefined';

// Read the theme from local storage or default to 'system'
const storedTheme = isLocalStorageAvailable ? localStorage.getItem('theme') : null;
const initialTheme = storedTheme ? storedTheme : 'system';

const theme = writable(initialTheme);

// Subscribe to changes and store the theme in local storage (if available)
theme.subscribe((value) => {
	if (isLocalStorageAvailable) {
		localStorage.setItem('theme', value);
	}
});

export { theme };
