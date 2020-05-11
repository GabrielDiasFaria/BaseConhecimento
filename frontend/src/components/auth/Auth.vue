<template>
  <div class="auth-content">
    <div class="auth-modal">
      <img src="@/assets/Logo-Descomplicando-Linguagens5.png" width="200" alt="Logo" />
      <hr />
      <div class="auth-title">{{ showSignup ? 'Cadastro' : 'Login' }}</div>

      <input v-if="showSignup" v-model="user.name" type="text" placeholder="Nome" />
      <input v-model="user.email" type="text" placeholder="E-mail" />
      <input v-model="user.password" type="password" placeholder="Senha" />
      <input
        v-if="showSignup"
        v-model="user.confirmPassword"
        type="password"
        placeholder="Confirme a Senha"
      />

      <button v-if="showSignup" @click="signup">Registrar</button>
      <button v-else @click="signin">Acessar Blog</button>

      <a href @click.prevent="showSignup = !showSignup">
        <span v-if="showSignup">Já tem cadastro?</span>
        <span v-else>Não tem cadastro?</span>
      </a>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, showError, userKey } from "@/global";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Auth",
  data: function() {
    return {
      showSignup: false,
      user: {}
    };
  },
  computed: mapState(["isAuthMode"]),
  methods: {
    signin() {
      axios
        .post(`${baseApiUrl}/signin`, this.user)
        .then(res => {
          this.$store.commit("setUser", res.data);
          localStorage.setItem(userKey, JSON.stringify(res.data));
          this.$router.push({ path: "/" });
        })
        .cath(showError);
    },
    signup() {
      axios
        .post(`${baseApiUrl}/signup`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.user = {};
          this.showSignup = false;
        })
        .cath(showError);
    }
  }
};
</script>

<style>
.auth-content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  transition: transform 0.2s;
}

img:hover {
  transform: scale(1.1);
}

.auth-modal {
  margin-top: -70px;
  /* background-color: #000; */
  width: 350px;
  padding: 35px;
  border-radius: 20px;
  box-shadow: 0 5px 10px 10px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-title {
  font-size: 1.2rem;
  font-weight: 100;
  margin-bottom: 15px;
}

.auth-modal input {
  border: 1px solid #bbb;
  width: 100%;
  margin-bottom: 10px;
  padding: 3px 8px;
  outline: none;
  border-radius: 20px;
}

.auth-modal button {
  align-self: flex-end;
  padding: 5px 15px;
  transition: filter 0.5s, transform 0.2s;

  -webkit-border-radius: 20px;
  background-color: #f3c022;
  border: 1px solid #f3c022;
  color: #ffffff;
}

.auth-modal button:hover {
  filter: brightness(90%);
  border: 1px solid #ddd;
  transform: scale(1.1);
}

.auth-modal a {
  margin-top: 35px;
  text-decoration: none;
}

.auth-modal hr {
  border: 0;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(120, 120, 120, 0),
    rgba(120, 120, 120, 0.75),
    rgba(120, 120, 120, 0)
  );
}
</style>