<template>
    <div class="row">
         <h2>Phases for Project: {{projects.project_name}}, Project Start Date is {{projects.project_start_date}}</h2>
        <div class="col-lg-12">
            <strong style="margin-left:400px; font-size: 20pt; color:Black; "  >Search Projects:</strong>
            <input type="text" class="projectNum" style="margin-left:5px; align:center; font-size: 12pt;"  size="30"  v-model="projects" placeholder="ex: Project Num" /> 
            

          <router-link class="btn btn-primary" style="font-size:20px; color: white; font-weight:bold; margin-left:1070px; margin-top: -80px;" to="/viewProject">View Projects</router-link>
      
            <table class="styled-table">
                
                <thead class="thead-dark">
                    <tr>
                        <th>Project Number:</th>
                        <th>Phase Num:</th>
                        <th>Phase Name:</th>
                        <th>Phase Cost:</th>
                        <th>Phase Completed:</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="phase in phases" :key="phase.phase_id">
                        <td>{{ phase.project_number}} </td>
                        <td>{{ phase.phase_number }}</td>
                        <td>{{ phase.phase_name }}</td>
                        <td>{{ phase.phase_cost }}</td>
                        <td>{{ phase.phase_completed}} </td>
                        
                        
                    </tr>
                </tbody>
            </table>
        </div>


    </div>

    
    
  


</template>

<script>
    import axios from "axios";
    //pass data values from the cfcworker_client_activity
    export default {
        data() {
            return {
            //retrieving data from the Cfcworker_client_activities schema getting the data 
                phases: [], 
                projects: {},
                phase: {
                   phase_number: '',
                   phase_name: '',
                   phase_cost: '',
                   phase_completed: '',
                   project_number: this.$route.params.id 
                   
                },
            }
        },

        // this is using created hook 
        created() {
            let apiURL = `http://localhost:27017/project_phase_report/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.phases = res.data;
            }).catch(error => {
                console.log(error)
            });
    
        // this is using created hook 
            let apiURL1 = `http://localhost:27017/project_report/${this.$route.params.id}`;
            axios.get(apiURL1).then(res => {
                this.projects = res.data;
            }).catch(error => {
                console.log(error)
            });

        },
        
        methods: {
            

           
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