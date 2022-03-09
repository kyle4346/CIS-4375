<template>
  <div class="container">
    <h1>Master Data Table</h1>

    <table class="styled-table">
      <thead>
        <tr>
          <th>Project Num</th>
          <th>Project Name</th>
          <th>Project Done</th>
          <th>Project Status</th>
          <th>Project Type</th>
          <th>Project Location</th>
          <th>City</th>
          <th>State</th>
          <th>Project Location Status</th>
          <!-- <th>Actions</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="User in Users" :key="User.project_number">
          <td>{{ project.project_number }}</td>
          <td>{{ project.project_name }}</td>
          <td>{{ project.project_completed }}</td>
          <td>{{ project.project_status_type }}</td>
          <td>{{ project.project_type_description }}</td>
          <td>{{ project.project_location_name }}</td>
          <td>{{ project.project_location_city }}</td>
          <td>{{ project.project_location_state }}</td>
          <td>{{ project.project_location_status_type }}</td>

          <!-- <td>
            <img alt="trash" class="ic" src="../../assets/trash.jpg" />
            <img alt="Add" class="ic2" src="../../assets/Add.png" />
            <img alt="info" class="ic3" src="../../assets/info.png" />
          </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ActivitiesTable",
  data() {
    return {
      Users: [],
    };
  },
  created() {
    axios
      .get("https://data.mongodb-api.com/app/data-nhwaq/endpoint/getstuff") //http://localhost:3000/activity
      .then((resp) => {
        console.log(resp.data);
        this.Users = resp.data;
      })
      .catch((error) => {
        console.log(error);
      });

    axios.delete();
  },
};
</script>

<style scoped>
/* Styles taken from Educba.com at https://www.educba.com/vue-js-table/*/
.styled-table {
  border-collapse: collapse;
  font-size: 0.9em;
  font-family: sans-serif;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  text-align: center;
}
.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
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
.ic {
  width: 64px;
  height: 64px;
}
.ic2 {
  width: 64px;
  height: 64px;
}
.ic3 {
  width: 64px;
  height: 64px;
}
</style>