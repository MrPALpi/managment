<template>
    <div @submit.prevent class="form">
        <h1 class="form__text">Авторизация</h1>
        <transition name="warning">
            <span class="form__warning" v-show="errors.length">
                Пожалуйста заполните пол{{ errors.length > 1 ? "я" : "е" }}:
            </span>
        </transition>
        <ul class="form__errors">
            <transition-group name="list" tag="ul">
                <li class="form__errors-item" v-for="error in errors" :key="error">
                    {{ error }}
                </li>
            </transition-group>
        </ul>
        <fieldset class="form__fieldset">
            <legend>ФИО</legend>
            <input ref="name" @keyup.enter.prevent="focusInput" @input="pushErroor(enterData.name, 'ФИО')" class="form__input"
                type="text" v-model="enterData.name" />
        </fieldset>
        <fieldset class="form__fieldset">
            <legend>Группа</legend>
            <input ref="group" @keyup.enter="toParent" @input="pushErroor(enterData.group, 'Группа')" class="form__input"
                type="test" v-model="enterData.group" />
        </fieldset>
        <button class="form__btn" @click="toParent">Войти</button>
    </div>
</template>

<script>
export default {
    name: "auth-form",
    data() {
        return {
            enterData: {
                name: "",
                group: "",
            },
            errors: [],
        };
    },
    methods: {
        focusInput(){
      this.$refs.group.focus();
    },
        pushErroor(inputData, error) {
            if (!inputData) {
                this.errors.push(error);
            } else {
                this.errors = this.errors.filter((err) => err !== error);
            }
        },
        toParent() {
            console.log(this.errors);
            if (this.enterData.name && this.enterData.group) {
                // return this.$emit("toParent", this.enterData);
                localStorage.setItem('name', this.enterData.name);
                localStorage.setItem('group',this.enterData.group)
                this.enterData.name = this.enterData.group = '';
                this.$router.push('/about');
                return;
            }
            this.errors = [];
            if (!this.enterData.name) this.errors.push("ФИО");
            if (!this.enterData.group) this.errors.push("Группа");
        },
    },
    mounted() {
        this.$refs.name.focus();
    },
};
</script>

<style>
.form__btn {
    padding: 8px 15px;
    color: var(--alt-color);
    background: var(--btn-color);
    border: 1px solid transparent;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;
}

.form__fieldset {
    width: 100%;
    padding: 5px 10px 8px;
    color: var(--tracing);
    border: 1px solid var(--tracing);
    border-radius: 5px;
    font-size: 18px;
}
.form__fieldset legend{
    color:var(--tracing);
}
.form__errors{
    padding-left: 30px;
}
.form__warning{
    font-weight: 700;
    font-size: 20px;
}
.form {
    margin-bottom: 150px;
    border-radius: 12px;
    padding: 40px 30px 20px;
    min-width: 200px;
    width: 40%;
    max-width: 500px;
    display: grid;
    gap: 15px;
    box-shadow: var(--shadow-box);
}

.form__errors-item{
    list-style-type: '\1F449';
}
.form__text {
    text-align: center;
    font-size: 34px;
}

.form__input {
    width: 100%;
    border: none;
    outline: none;
    font-size: inherit;
    background: inherit;
    color: inherit;
}

@media (max-width: 770px) {
    .form {
        width: 95%;
    }
}
@media (min-width: 2000px) {
    .form {
        width: 60%;
        max-width: 800px;
    }
}
.list-move,
.list-enter-active,
.list-leave-active,
.warning-enter-active,
.warning-leave-active {
    transition: all 0.5s ease;

}


.warning-enter-from,
.warning-leave-to {
    opacity: 0;
    transform: translateX(60px);
}

.list-enter-from,
.list-leave-to{
    opacity: 0;
    transform: translateX(120px);
}


.list-leave-active {
    position: absolute;
}
</style>
