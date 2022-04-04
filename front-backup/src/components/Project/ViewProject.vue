<template>
  <div class="row">
    <div class="col-lg-12">
      <strong style="margin-left: 400px; font-size: 20pt; color: Black"
        >Search Projects:</strong
      >
      <input
        style="margin-left: 5px; align: center; font-size: 12pt"
        size="30"
        type="text"
        v-model="searchProjects"
        placeholder="ex:Project Num or Location "
      />

      <p>
        <router-link
          class="btn btn-primary"
          style="
            font-size: 20px;
            color: White;
            font-weight: bold;
            margin-left: 890px;
            margin-top: -60px;
          "
          to="/createProject"
          >Add Project</router-link
        >
      </p>

      <table class="table styled-table">
        <col style="width: 0%" />
        <col style="width: 0%" />
        <col style="width: 0%" />
        <col style="width: 0%" />
        <col style="width: 0%" />
        <col style="width: 0%" />
        <col style="width: 0%" />
        <col style="width: 0%" />
        <col style="width: 10%" />
        <col style="width: 5%" />
        <thead class="thead-dark">
          <tr>
            <th>Project Num</th>
            <th>Project Name</th>
            <th>Project Done</th>
            <th>Project Status</th>
            <th>Project Type</th>
            <th>City</th>
            <th>State</th>
            <th>Project Location Status</th>
            <th>Actions</th>
            <th>Reports</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in filteredProjects" :key="project.project_id">
            <td style="position: relative">{{ project.project_number }}</td>
            <td style="position: relative">{{ project.project_name }}</td>
            <td style="position: relative">{{ project.project_completed }}</td>
            <td style="position: relative">
              {{ project.project_status_type }}
            </td>
            <td style="position: relative">
              {{ project.project_type_description }}
            </td>
            <td style="position: relative">
              {{ project.project_location_city }}
            </td>
            <td style="position: relative">
              {{ project.project_location_state }}
            </td>
            <td style="position: relative">
              {{ project.project_location_status_type }}
            </td>
            <td style="position: relative">
              <router-link
                :to="{
                  name: 'editProject',
                  params: { id: project.project_id },
                }"
                style="text-align: center; padding: 2px 12px; font-size: 16px"
                class="btn btn-success"
                >Edit
              </router-link>
              <br />
              <br />

              <button
                @click.prevent="deleteProject(project.project_id)"
                style="margin-top: -20px; padding: 2px 3px; font-size: 16px"
                class="btn btn-danger"
              >
                Delete
              </button>

              <br />
              <br />
              <router-link
                :to="{
                  name: 'createPhase',
                  params: { id: project.project_number },
                }"
                style="
                  text-align: center;
                  margin-top: -5px;
                  padding: 5px 10px;
                  font-size: 16px;
                "
                class="btn btn-secondary"
                >Add Phase
              </router-link>

              <br />
              <br />
              <router-link
                :to="{
                  name: 'viewPhase',
                  params: { id: project.project_number },
                }"
                style="
                  text-align: center;
                  margin-top: -10px;
                  background-color: #5d00ff;
                  padding: 5px 3px;
                  font-size: 16px;
                "
                class="btn btn-primary"
                >View Phases
              </router-link>
            </td>
            <td style="position: relative">
              <router-link
                :to="{
                  name: 'project_phase_report',
                  params: { id: project.project_number },
                }"
                style="
                  text-align: center;
                  margin-right: 10px;
                  color: black;
                  background-color: #ffd700;
                  padding: 0px 0px;
                  font-size: 16px;
                "
                class="btn btn-dark"
                >Assigned Phases Report
              </router-link>
              <br />
              <br />

              <router-link
                :to="{
                  name: 'project_investor_report',
                  params: { id: project.project_number },
                }"
                style="
                  text-align: center;
                  margin-right: 10px;
                  color: black;
                  background-color: #ffd700;
                "
                class="btn btn-dark"
                >Assigned Investors Report
              </router-link>

              <br />
              <br />

              <router-link
                :to="{
                  name: 'project_employee_report',
                  params: { id: project.project_number },
                }"
                style="
                  text-align: center;
                  margin-right: 10px;
                  color: black;
                  background-color: #ffd700;
                "
                class="btn btn-dark"
                >Assigned Employees Report
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      projects: [
          
      ],
      searchProjects: "",
      perPage: 3,
      currentPage: 1,
    };
  },
  // this is using created hook
  created() {
    let apiURL =
      "https://data.mongodb-api.com/app/data-nhwaq/endpoint/projects"; //http://localhost:27017/projects
    axios
      .get(apiURL)
      .then((res) => {
        this.projects = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    filteredProjects: function () {
      return this.projects.filter((project) => {
        return (
          project.project_number
            .toLowerCase()
            .match(this.searchProjects.toLowerCase()) ||
          project.project_name
            .toLowerCase()
            .match(this.searchProjects.toLowerCase())
        );
      });
    },
    rows() {
        return this.projects.length
      }
  },
  methods: {
    deleteProject(id) {
      console.log(id);
      let apiURL = `http://localhost:27017/project/${id}`;
      let indexOfArrayItem = this.projects.findIndex(
        (i) => i.project_id === id
      );

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.projects.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>



<style scoped>
/* Styles taken from Educba.com at https://www.educba.com/vue-js-table/*/
.styled-table {
  border-collapse: collapse;
  font-size: 12pt;
  font-family: sans-serif;
  width: 100%;
  height: 10%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  text-align: left;
}
.styled-table th {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: #267bfa;
  color: #ffffff;
}

.styled-table th::after {
  content: "";
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: black;
}
.btn-success {
  margin-right: 10px;
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
  border-bottom: 2px solid #267bfa;
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
