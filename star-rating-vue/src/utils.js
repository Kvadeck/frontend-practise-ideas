export default {
    error: 'localStorage is not available.',
    setLocalStorage(key, value) {
        if (typeof window === 'undefined') {
            throw new Error(this.error);
        }
        localStorage.setItem(key, JSON.stringify(value));
    },
    getLocalStorage(key, defaultValue) {
        if (typeof window === 'undefined') {
            throw new Error(this.error);
        }
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : defaultValue;
    }
}