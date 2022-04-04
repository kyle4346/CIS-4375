<template>
    <div class="row">
        <div class="col-lg-12">
             
             <strong style="margin-left:400px; font-size: 20pt; color:Black; "  >Search Steps:</strong>
            <input style="margin-left:5px;  font-size: 12pt;"  size="30" type="text" v-model="searchSteps" placeholder="ex: Project Num or Step Num" /> 
           <br>
           <br>
            <p><router-link class="btn btn-primary" style="font-size:20px; color: White; font-weight:bold; margin-left:850px; margin-top: -110px;" to="/viewPhase">View Phases</router-link></p>
            
            <table class="styled-table">
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:2%">
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
                        <th>Reports</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="step in filteredSteps" :key="step.step_id">
                        <td style="vertical-align:top">{{ step.project_number }}</td>
                        <td style="vertical-align:top">{{ step.phase_number }}</td>
                        <td style="vertical-align:top">{{ step.step_number }}</td>
                        <td style="vertical-align:top">{{ step.step_name }}</td>
                        <td style="vertical-align:top">{{ step.step_completed }}</td>
                        <td style="vertical-align:top">{{ step.step_status_type}}</td>
                        <td style="vertical-align:top">{{ step.step_cost }}</td>
                        <td style="vertical-align:top">{{ step.step_start_date }}</td>
                        <td>
                            <router-link :to="{name: 'editStep', params: { id: step.step_id}}" style="text-align: center; margin-top:-70px" class="btn btn-success">Edit
                            </router-link>
                            <br>

                        <button @click.prevent="deleteStep(step.step_id)" class="btn btn-danger">Delete</button>

                            <br>
                            
                            <router-link :to="{name: 'createTask', params: { id: step.step_number}}" style="text-align: center; margin-top:20px" class="btn btn-secondary">Add Task
                            </router-link>

                            <br>
                            <br>
                             <router-link :to="{name: 'viewTask', params: { id: step.step_number}}"  style="text-align: center; margin-right:10px; background-color:#5d00ff" class="btn btn-primary">View Tasks
                            </router-link>

                            
                                 
                        </td>
                        <td>
                            <router-link :to="{name: 'project_task_report', params: { id: step.step_number}}"  style="text-align: center; margin-top:-180px; color:black; background-color:#FFD700" class="btn btn-dark">Assigned Tasks
                            </router-link>

                            <br>
                            
                            <router-link :to="{name: 'step_subcontractor_report', params: { id: step.stepid}}"  style="text-align: center; margin-top:-70px; color:black; background-color:#FFD700" class="btn btn-dark">Assigned Subcontractors
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
                steps: [],
                searchSteps: ''
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
        computed: {
            filteredSteps: function(){


                return this.steps.filter((step) =>{

                    return step.project_number.toLowerCase().match(this.searchSteps.toLowerCase()) ||
                           step.phase_number.toLowerCase().match(this.searchSteps.toLowerCase()) ||
                           step.step_number.toLowerCase().match(this.searchSteps.toLowerCase()) || 
                           step.step_name.toLowerCase().match(this.searchSteps.toLowerCase()) 
                    
                })
            }    
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
