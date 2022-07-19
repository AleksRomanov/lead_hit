<template>
  <div class="container">
    <h1><span class="title-color">Lead</span>Hit</h1>
    <div class="row">
      <div class="col-sm-4 mx-auto">
        <form class="form">
          <h5>Авторизация</h5>
          <div class="form-group">
            <label for="exampleInputEmail1">ID сайта</label>
            <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                v-model="id"
                maxlength="24"
                :style="id.length > 0 ? 'width: 250px;' : ''"
            />
            <span v-if="error" class="id-error">{{ error }}</span>
          </div>
          <button @click="login" class="btn">Войти</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
// import {REQUEST_AUTH} from "@/store/action-types";
export default {
  name: "HomeView",
  data() {
    return {
      id: "",
      error: "",
    };
  },
  watch: {
    id: function () {
      if (this.id.length) {
        this.error = "";
      } else {
        this.error = "Id сайта должен содержать 24 символа!";
      }
    },
  },
  methods: {
    // ...mapActions({
    //   auth: REQUEST_AUTH,
    // }),
    login() {
      if (this.id.length === 24) {
        this.auth(this.id).then((res) => {
          if (!res.error) {
            const {message} = res;
            if (message && message === "ok") {
              this.$router.push({path: "/analytics"});
            }
          } else {
            this.error = res.error;
          }
        });
      } else {
        this.error = "Id сайта должен содержать 24 символа!";
      }
    },
  },
  beforeDestroy() {
    this.id = "";
    this.error = "";
  },
};
</script>

<style scoped>
.title-color {
  color: #ff5715;
}

.form {
  box-sizing: border-box;
  margin-top: 5vh;
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 0 0 24px #bfbdbd;
}

.btn {
  background-color: #ff5715;
  color: #ffffff;
  box-shadow: 0 0 10px #ff5715;
}

.form input {
  border: 1px solid #ccc;
}
</style>
