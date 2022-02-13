<template>
  <div class="hello">

    <body>
      <table class="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Item</th>
            <th>Price</th>
            <th>Date completed</th>
            <th>Paid</th>
            <th>Check From bank</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tabledata in tabledatas" :key="tabledata.ID">
            <th>{{ tabledata.ID }}</th>
            <th>{{ tabledata.Description }}</th>
            <th>{{ tabledata.Item }}</th>
            <th>{{ tabledata.Price }}</th>
            <th>{{ tabledata.Date_Complete }}</th>
            <th>{{ tabledata.Paid }}</th>
            <th>{{ tabledata.Check_From_Bank }}</th>
          </tr>
        </tbody>
      </table>
    </body>
  </div>
</template>

<script>
import data from '../../Data.json'
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      tabledatas: data 
    }
}
}
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
