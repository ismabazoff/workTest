import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCardStore = defineStore('card', () => {
    const cards = ref(JSON.parse(localStorage.getItem('cards')) || [])

    const addCard = text => {
        cards.value.push({ id: Date.now(), text })
        saveCards()
    }

    const removeCard = id => {
        const index = cards.value.findIndex(card => card.id === id)
        if (index !== -1) {
            cards.value.splice(index, 1)
            saveCards()
        }
    }

    const saveCards = () => {
        localStorage.setItem('cards', JSON.stringify(cards.value))
    }

    return { cards, addCard, removeCard, saveCards }
})
