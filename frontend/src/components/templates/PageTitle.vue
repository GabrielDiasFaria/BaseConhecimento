<template>
  <div class="page-title">
    <h1>
      <i v-if="icon" :class="icon"></i>
      {{main}}
    </h1>
    <h2>{{sub}}</h2>
    <hr />
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["icon", "main", "sub"]
};
</script>

<style>
.page-title h1 {
  margin: 0px;
}

.page-title h2 {
  color: #777;
  margin-top: 5px;
  font-size: 1.3rem;
}

.page-title hr {
  border: 0;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(120, 120, 120, 0.75),
    rgba(120, 120, 120, 0.2),
    rgba(120, 120, 120, 0)
  );
}
</style>