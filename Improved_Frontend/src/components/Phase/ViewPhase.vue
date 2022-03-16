<template>
    <div class="row">
        <div class="col-lg-12">
            <table class="styled-table">
                <thead class="thead-dark">
                    <tr>
                        <th>Project Num</th>
                        <th>Phase Num</th>
                        <th>Phase Name</th>
                        <th>Phase Completed</th>
                        <th>Phase Status</th>
                        <th>Phase Cost</th>
                        <th>Phase Start Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="phase in phases" :key="phase.phase_id">
                        <td>{{ phase.project_number }}</td>
                        <td>{{ phase.phase_number }}</td>
                        <td>{{ phase.phase_name }}</td>
                        <td>{{ phase.phase_completed }}</td>
                        <td>{{ phase.phase_status_type}}</td>
                        <td>{{ phase.phase_cost }}</td>
                        <td>{{ phase.phase_start_date }}</td>
                        <td>
                            <router-link :to="{name: 'editPhase', params: { id: phase.phase_id}}" style="text-align: center;" class="btn btn-success">Edit
                            </router-link>

                        <button @click.prevent="deletePhase(phase.phase_id)" class="btn btn-danger">Delete</button>

                            <br>
                            <br>
                            <router-link :to="{name: 'createStep', params: { id: phase.phase_number}}" style="text-align: center;" class="btn btn-secondary">Add Step
                            </router-link>

                            <br>
                            <br>
                            <router-link :to="{name: 'project_step_report', params: { id: phase.phase_number}}"  style="text-align: center; margin-right:10px;" class="btn btn-info">View Steps
                            </router-link>


                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>
             <br>
             <br>
      <router-link class="btn btn-primary" style="font-size:20px; color: White; font-weight:bold; margin-left:525px;" to="/viewProject">View Projects</router-link>
        </p>
    </div>

</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                phases: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/phases';
            axios.get(apiURL).then(res => {
                this.phases = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deletePhase(id){
                console.log(id)
                let apiURL = `http://localhost:27017/phase/${id}`;
                let indexOfArrayItem = this.phases.findIndex(i => i.phase_id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.phases.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>



<style scoped>
/* Styles taken from Educba.com at https://www.educba.com/vue-js-table/*/
.styled-table {
  border-collapse: collapse;
  font-size: 12pt;
  font-family: sans-serif;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  text-align: left;
}
.styled-table thead tr {
  background-color: #267bfa;
  color: #ffffff;
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
