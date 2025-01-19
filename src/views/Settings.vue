<script setup>
import { ref } from 'vue'
import { useCardStore } from '../stores/cards'

const store = useCardStore()
const newCardText = ref('')
const addCard = () => {
    if (newCardText.value.trim()) {
        store.addCard(newCardText.value)
        newCardText.value = ''
    }
}
const removeCard = index => {
    store.removeCard(store.cards[index].id)
}

const saveChangesAndGoBack = () => {
    store.saveCards()
}
</script>

<template>
    <div class="settings">
        <h1>Настройки</h1>
        <div>
            <div class="card">
                <input
                    v-model="newCardText"
                    placeholder="Введите текст карточки"
                /><button @click="addCard" class="addCard">Добавить</button>
            </div>

            <div
                v-for="(card, index) in store.cards"
                :key="card.id"
                class="card"
            >
                <input v-model="card.text" /><button
                    @click="removeCard(index)"
                    class="removeCard"
                >
                    Удалить
                </button>
            </div>
        </div>
        <br />
        <router-link to="/"
            ><button @click="saveChangesAndGoBack" class="back">
                Назад
            </button></router-link
        >
    </div>
</template>

<style lang="scss" scoped>
.settings {
    display: inline-block;
    margin: 15px 0 0 15px;
    padding: 15px;
    border: 1px solid black;
}
.card {
    display: flex;
    align-items: center;
    margin: 2px 0;
    height: 40px;
}
input {
    outline: 2px solid grey;
    border-radius: 2px;
    padding: 4px 4px;
    max-width: 320px;
    width: 100%;
    &:focus {
        outline: none;
        outline: 2px solid #007bff;
    }
}
.addCard {
    background-color: green;
}

.removeCard {
    background-color: red;
}

input {
    margin-right: 5px;
}
button {
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 6px 10px;
    color: white;
}
.back {
    width: 80px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 8px 10px;
    background-color: blueviolet;
}
</style>
