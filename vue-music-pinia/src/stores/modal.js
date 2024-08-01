import { defineStore } from 'pinia'

export const useStore = defineStore('modal', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            isOpen: false
        }
    },
})