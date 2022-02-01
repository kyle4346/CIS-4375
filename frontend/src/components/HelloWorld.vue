<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <body>
      <table  class="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Item</th>
            <th>Price</th>
            <th>Date</th>
            <th>Paid</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tabledata in tabledatas" :key="tabledata.id">
            <th> {{ tabledata.id }}</th>
            <th> {{ tabledata.desc }}</th>
            <th> {{ tabledata.Item }}</th>
            <th> {{ tabledata.Price }}</th>
            <th> {{ tabledata.Date }}</th>
            <th> {{ tabledata.Paid }}</th>
          </tr>
        </tbody>
      </table>
    </body>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      tabledatas: [
        {
          id: 1,
          desc: "Lumber Purchase",
          Item: 125,
          Price: 66000,
          Date: "11/15/2021",
          Paid: "Yes",
        },
        {
          id: 2,
          desc: "General GC Fees",
          Item: 49,
          Price: 22000,
          Date: "11/23/2021",
          Paid: "Yes",
        },
        {
          id: 3,
          desc: "Electrical Rough In",
          Item: 18,
          Price: 6000,
          Date: "",
          Paid: "No",
        },
        {
          id: 4,
          desc: "Counter Tops",
          Item: 20,
          Price: 7000,
          Date: "",
          Paid: "No",
        },
        {
          id: 5,
          desc: "Framing Labor/Rafters",
          Item: 10,
          Price: 20000,
          Date: "12/18/2021",
          Paid: "Yes",
        },
      ],
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
    text-align: left;
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
