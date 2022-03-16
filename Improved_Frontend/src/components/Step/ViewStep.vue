<template>
    <div class="row">
        <div class="col-lg-12">
            <table class="styled-table">
                <thead class="thead-dark">
                    <tr>
                        <th>Project Num</th>
                        <th>Phase Num</th>
                        <th>Step Num</th>
                        <th>Step Name</th>
                        <th>Step Completed</th>
                        <th>Step Status</th>
                        <th>Step Cost</th>
                        <th>Step Start Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="step in steps" :key="step.step_id">
                        <td>{{ step.project_number }}</td>
                        <td>{{ step.phase_number }}</td>
                        <td>{{ step.step_number }}</td>
                        <td>{{ step.step_name }}</td>
                        <td>{{ step.step_completed }}</td>
                        <td>{{ step.step_status_type}}</td>
                        <td>{{ step.step_cost }}</td>
                        <td>{{ step.step_start_date }}</td>
                        <td>
                            <router-link :to="{name: 'editStep', params: { id: step.step_id}}" style="text-align: center;" class="btn btn-success">Edit
                            </router-link>

                        <button @click.prevent="deleteStep(step.step_id)" class="btn btn-danger">Delete</button>

                            <br>
                            <br>
                            <router-link :to="{name: 'createTask', params: { id: step.step_number}}" style="text-align: center;" class="btn btn-secondary">Add Task
                            </router-link>

                            <br>
                            <br>
                            <router-link :to="{name: 'project_task_report', params: { id: step.step_number}}"  style="text-align: center; margin-right:10px;" class="btn btn-info">View Tasks
                            </router-link>


                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

         <p>
             <br>
             <br>
      <router-link class="btn btn-primary" style="font-size:20px; color: White; font-weight:bold; margin-left:525px;" to="/viewPhase">View Phases</router-link>
        </p>
    </div>

</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                steps: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/steps';
            axios.get(apiURL).then(res => {
                this.steps = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteStep(id){
                console.log(id)
                let apiURL = `http://localhost:27017/step/${id}`;
                let indexOfArrayItem = this.steps.findIndex(i => i.step_id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.steps.splice(indexOfArrayItem, 1);
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
  font-size: 0.9em;
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
