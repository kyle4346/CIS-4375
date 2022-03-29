<template>
    <div class="row">
        <div class="col-lg-12">
            <strong style="margin-left:400px; font-size: 20pt; color:Black; "  >Search Phases:</strong>
            <input style="margin-left:5px; align:center; font-size: 12pt;"  size="30" type="text" v-model="searchPhases" placeholder="ex: Project Num or Phase Num" /> 
            <br>
            <br>

<p><router-link class="btn btn-primary" style="font-size:20px; color: White; font-weight:bold; margin-left:870px; margin-top: -110px;" to="/viewProject">View Projects</router-link></p>
            
            <table class="styled-table">
                <col   style="width:0%; text-align:center"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:5%"> 
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
                        <th>Report</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="phase in filteredPhases" :key="phase.phase_id">
                        <td style="vertical-align:top">{{ phase.project_number }}</td>
                        <td style="vertical-align:top">{{ phase.phase_number }}</td>
                        <td style="vertical-align:top">{{ phase.phase_name }}</td>
                        <td style="vertical-align:top">{{ phase.phase_completed }}</td>
                        <td style="vertical-align:top">{{ phase.phase_status_type}}</td>
                        <td style="vertical-align:top">{{ phase.phase_cost }}</td>
                        <td style="vertical-align:top">{{ phase.phase_start_date }}</td>
                        <td>
                            <router-link :to="{name: 'editPhase', params: { id: phase.phase_id}}" style="text-align: center; margin-top:-60px"  class="btn btn-success">Edit
                            </router-link>
                            <br>

                        <button @click.prevent="deletePhase(phase.phase_id)" class="btn btn-danger" style="margin-top:0px">Delete</button>

                            <br>
                            <br>
                            <router-link :to="{name: 'createStep', params: { id: phase.phase_number}}" style="text-align: center; " class="btn btn-secondary">Add Step
                            </router-link>

                            <br>
                            <br>

                            <router-link :to="{name: 'viewStep', params: { id: phase.phase_number}}"  style="text-align: center; margin-right:10px; background-color:#5d00ff" class="btn btn-primary">View Steps
                            </router-link>

                            <br>
                            <br>

                    
                        </td> 
                        <td>
                                <router-link :to="{name: 'project_step_report', params: { id: phase.phase_number}}"  style="text-align: center; margin-top: -220px; background-color:#FFD700; color: black " class="btn btn-dark">Assigned Steps
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
                phases: [],
                searchPhases:''
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
        computed: {
            filteredPhases: function(){


                return this.phases.filter((phase) =>{

                    return phase.project_number.toLowerCase().match(this.searchPhases.toLowerCase()) ||
                           phase.phase_number.toLowerCase().match(this.searchPhases.toLowerCase()) ||
                           phase.phase_name.toLowerCase().match(this.searchPhases.toLowerCase()) 
                           
                    
                })
            }    
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
