<template>
  <div class="WBS">
    <h1>Project Breakdown Structure</h1>

    <label>Search by category</label>
    <input id="search" v-model="term" @keypress.enter="search(term)" />

    <label>Filter by Phase</label>
    <button
      v-for="filter in filters"
      :key="filter"
      @click="() => filterPosts(filter)"
    >
      {{ filter }}
    </button>

    <body>
      <table class="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Contractor</th>
            <th>Phase</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <th>{{ post.id }}</th>
            <th>{{ post.Category }}</th>
            <th>{{ post.Contractor }}</th>
            <th>{{ post.Phase }}</th>
          </tr>
        </tbody>
      </table>
    </body>
  </div>
</template>

<script>
const filters = ["All", "Phase 1", "Phase 2", "Phase 3", "Phase 4", "Phase 5"];

export default {
  name: "WBS",
  props: ["filterPosts", "search", "posts"],
  data() {
    return {
      filters,
      term: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.styled-table {
  border-collapse: collapse;
  font-size: 0.9em;
  font-family: sans-serif;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: center;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
</style>
