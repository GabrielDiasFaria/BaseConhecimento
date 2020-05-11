<template>
  <div id="app" :class="{'hide-menu': !isMenuVisible || !user}">
    <Header
      v-if="user"
      title="Descomplicando Linguagens"
      :hideToggle="!user"
      :hideUserDropdown="!user"
    />
    <Menu v-if="user" />
    <Loading v-if="validatingToken" />
    <Content v-else />
    <Footer v-if="user" />
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl, userKey } from "@/global";
import { mapState } from "vuex";
import Header from "@/components/templates/Header";
import Menu from "@/components/templates/Menu";
import Content from "@/components/templates/Content";
import Footer from "@/components/templates/Footer";
import Loading from "@/components/templates/Loading";

export default {
  name: "App",
  components: { Header, Menu, Content, Footer, Loading },
  computed: mapState(["isMenuVisible", "user"]),
  data: function() {
    return {
      validatingToken: true
    };
  },
  methods: {
    async validateToken() {
      this.validateToken = true;
      const json = localStorage.getItem(userKey);
      const userData = JSON.parse(json);
      this.$store.commit("setUser", null);

      if (!userData) {
        this.validatingToken = false;
        this.$router.push({ path: "auth" });
        return;
      }

      const res = await axios.post(`${baseApiUrl}/validateToken`, userData);

      if (res.data) {
        this.$store.commit("setUser", userData);
      } else {
        localStorage.removeItem(userKey);
        this.$router.push({ path: "auth" });
      }

      this.validatingToken = false;
    }
  },
  created() {
    this.validateToken();
  }
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}

body {
  margin: 0;
}

#app {
  background-color: #efefef;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 300px 1fr;
  grid-template-areas:
    "header header"
    "menu content"
    "menu footer";
}

#app.hide-menu {
  background-color: #efefef;
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}
</style>