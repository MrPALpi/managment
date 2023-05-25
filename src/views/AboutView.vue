<template>
    
    <div class="full-window flex-center">
        <button class="form__btn back-button" @click="$router.back()">&#8592;</button>
        <div class="form">
            <div class="form__text">Авторы:</div>
        <div v-for="crt in creaters" :key="crt" class="creaters-text" style="">
            {{ crt.name }} <span v-html="crt.smile"></span>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            creaters:[
                {name:"Рома Бабич",smile:"&#129488;"},
                {name:"Александр Капралов",smile:"&#128545;"},
                {name:"Даниил Шмаков",smile:"&#128030;"},
                {name:"Андрей Меньченко",smile:"&#129309;"},
                {name:"Никита Силифанкин",smile:"&#128535;"},
                {name:"Никита Желябовский",smile:"&#129396;"},
                {name:"Андрей Усанов",smile:"&#129302;"},

            ]
        }
    }
}
</script>

<style>
.creaters-text{
    font-weight: 600;
    font-size: 24px;
}

</style>