<template>
  <div @submit.prevent class="form">
    <div class="sw-case">
      <transition name="slide-up" >
        <span v-if="!teacher">Студент</span>
        <span v-else>Преподаватель</span>
      </transition>

      <switch-set v-model:check="teacher"></switch-set>
    </div>
    <h1 class="form__text">Авторизация</h1>
    <transition name="warning">
      <span class="form__warning" v-show="errors.length">
        Пожалуйста заполните пол{{ errors.length > 1 ? "я" : "е" }}:
      </span>
    </transition>
    <ul class="form__errors">
      <transition-group name="list" tag="ul">
        <li class="form__errors-item" v-for="error in errors" :key="error">
          {{ error.name }}
        </li>
      </transition-group>
    </ul>
    <field-set :legend="techerOrStudent">
      <input
        ref="name"
        @keyup.enter.prevent="focusInput"
        @input="
          pushErroor(enterData.name, { id: '0', name: this.techerOrStudent })
        "
        class="form__input"
        type="text"
        v-model="enterData.name"
      />
    </field-set>

    <field-set :legend="passOrGroup">
      <input
        ref="group"
        @keyup.enter="toParent"
        @input="
          pushErroor(enterData.group, { id: '1', name: this.passOrGroup })
        "
        class="form__input"
        :type="teacher ? 'password' : 'text'"
        v-model="enterData.group"
      />
    </field-set>

    <button class="form__btn" @click="toParent">Войти</button>
  </div>
</template>

<script>
import FieldSet from "./UI/FieldSet.vue";
import SwitchSet from "./UI/SwitchSet.vue";
export default {
  name: "auth-form",
  components: {
    FieldSet,
    SwitchSet,
  },
  data() {
    return {
      enterData: {
        name: "",
        group: "",
      },
      teacher: false,
      errors: [],
    };
  },
  methods: {
    focusInput() {
      this.$refs.group.focus();
    },
    pushErroor(inputData, error) {
      if (!inputData) {
        this.errors.push(error);
      } else {
        this.errors = this.errors.filter((err) => err.id !== error.id);
      }
    },
    toParent() {
    //   console.log(this.errors);
      if (this.enterData.name && this.enterData.group) {
        // return this.$emit("toParent", this.enterData);
        localStorage.setItem("name", this.enterData.name);
        localStorage.setItem("group", this.enterData.group);
        if (!this.teacher) {
          this.$router.push("/student");
        } else {
          this.$router.push("/students");
        }
        return this.enterData.name = this.enterData.group = "";
      }
      this.errors = [];
      if (!this.enterData.name)
        this.errors.push({ id: "0", name: this.techerOrStudent });
      if (!this.enterData.group)
        this.errors.push({ id: "1", name: this.passOrGroup });
    },
  },
  mounted() {
    this.$refs.name.focus();
  },
  computed: {
    passOrGroup() {
      return this.teacher ? "Пароль" : "Группа";
    },
    techerOrStudent() {
      console.log(this.teacher);
      return this.teacher ? "Многоуважаемая фамилия" : "ФИО";
    },
  },
};
</script>

<style>
.sw-case {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}
.sw-case span {
  font-size: 16px;
  font-weight: 600;
}
.form__btn {
  padding: 8px 15px;
  color: var(--alt-color);
  background: var(--btn-color);
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form__errors {
  padding-left: 30px;
}
.form__warning {
  font-weight: 700;
  background: none;
  font-size: 20px;
}
.form {
  margin-bottom: 150px;
  border-radius: 12px;
  padding: 10px 30px 20px;
  min-width: 200px;
  position: relative;
  width: 40%;
  max-width: 400px;
  display: grid;
  gap: 15px;
  box-shadow: var(--shadow-box);
}

.form__errors-item {
  list-style-type: "\1F449";
  background: transparent;
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

@media (max-width: 790px) {
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
.list-leave-to {
  opacity: 0;
  transform: translateX(120px);
}

.list-leave-active,
.slide-up-leave-active {
  position: absolute;
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
