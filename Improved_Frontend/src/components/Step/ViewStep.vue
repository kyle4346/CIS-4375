<template>
    <div class="row">
        <div class="col-lg-12">
             
             <strong style="margin-left:400px; font-size: 20pt; color:Black; "  >Search Steps:</strong>
            <input style="margin-left:5px;  font-size: 12pt;"  size="30" type="text" v-model="searchSteps" placeholder="ex: Project Num or Step Num" /> 
           <br>
           <br>
            <p><router-link class="btn createPhases"  to="/viewPhase">View Phases</router-link></p>
            
            <table class="styled-table">
                <col   style="width:1%"> 
                <col   style="width:1%"> 
                <col   style="width:1%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:10%">
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
                            <router-link :to="{name: 'editStep', params: { id: step.step_id}}"  class="btn one">Edit
                            </router-link>

                        <button @click.prevent="deleteStep(step.step_id)" class="btn two">Delete</button>
                            
                            <router-link :to="{name: 'createTask', params: { id: step.step_number}}"  class="btn three">Add Task
                            </router-link>

                             <router-link :to="{name: 'viewTask', params: { id: step.step_number}}"   class="btn four">View Tasks
                            </router-link>

                            
                                 
                        </td>
                        <td>
                            <router-link :to="{name: 'project_task_report', params: { id: step.step_number}}"   class="btn five">Assigned<br/> Tasks
                            </router-link>

                            <router-link :to="{name: 'step_subcontractor_report', params: { id: step.stepid}}"   class="btn six">Assigned<br/> Subcontractors
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
  height: 97%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  text-align: left;
}
.styled-table thead tr {
  background-color: #267bfa;
  color: #ffffff;
}

.btn{
    position: -webkit-absolute;
    position: absolute;
    margin-right: 0px;

}

.createPhases{
font-size:20px; 
    border: 2px solid black;
    color: White; 
    background-color: #267bfa;
    font-weight:bold; 
    margin-left:880px; 
    margin-top: -60px;

}

.one{
border: 2px solid black;
   margin-top: -55px;
   margin-left:-20px; 
   color:white; 
   background-color:green; 
   padding: 1px 3px;
   font-size:16px
}

.two{
border: 2px solid black;
   margin-top: -55px;
   margin-left:25px; 
   color:white; 
   background-color:red; 
   padding: 1px 2px;
   font-size:16px
}

.three{
 border: 2px solid black;
   margin-top: -15px;
   margin-left:-20px; 
   color:white; 
   background-color:gray; 
   padding: 1px 14px;
   font-size:16px
}
.four{
border: 2px solid black;
   margin-top: 21px;
   margin-left:-20px; 
   color:white; 
   background-color:rgb(255, 6, 255); 
   padding: 1px 7px;
   font-size:16px
}
.five{
   border: 2px solid black;
   margin-top: -55px;
   margin-left:-6px; 
   color:black; 
   background-color:#FFD700; 
   padding: 0px 23px;
   font-size:16px

}
.six{
     border: 2px solid black;
   margin-top: 0px;
   margin-left:-6px; 
   color:black; 
   background-color:#FFD700; 
   padding: 0px 2px;
   font-size:16px
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
