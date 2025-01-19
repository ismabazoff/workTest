<script setup>
import { useCardStore } from '../stores/cards'
const { cards } = useCardStore()
</script>

<template>
    <div class="home">
        <h1>Главная</h1>
        <div class="cards">
            <div v-for="card in cards" :key="card.id" class="card">
                {{ card.text }}
            </div>
        </div>
        <p v-if="cards.length == 0">Нет добавленных карточек</p>
        <router-link to="/settings"><button>Настройки</button></router-link>
    </div>
</template>

<style lang="scss" scoped>
.home {
    display: inline-block;
    margin: 15px 0 0 15px;
    padding: 15px;
    border: 1px solid black;
    p {
        margin: 0 10px 15px 0;
        color: red;
    }
}

.cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
    gap: 10px;
}
h1 {
    margin-top: 0;
    margin-bottom: 10px;
}
.card {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    // margin-right: 10px;
    word-break: break-all;
    text-align: center;
}
button {
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 10px;
    color: white;
    background-color: blueviolet;
}
</style>
