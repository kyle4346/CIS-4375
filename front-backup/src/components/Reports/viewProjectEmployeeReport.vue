<template>
    <div class="row">
         
         
        <div class="col-lg-12">
          <router-link class="btn btn-primary" style="font-size:20px; color: white; font-weight:bold; margin-left:1140px; margin-top: -50px;" to="/viewProject">View Projects</router-link>
            <table class="styled-table">
                
                <thead class="thead-dark">
                    <tr>
                        <th>EMPID</th>
                        <th>PSID</th>
                        <th>Project Number</th>
                        <th>Project Name</th>
                        <th>Project Status</th>
                        <th>Assigned Date</th>
                        
                        
                       
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="employee_assigned in employee_assigneds" :key="employee_assigned.employee_assigned_id">
                        <td>{{ employee_assigned.empid}}</td>
                        <td>{{ employee_assigned.psid}}</td>
                        <td>{{ employee_assigned.project_number}}</td>
                        <td>{{ projects.project_name}}</td>
                        <td>{{ projects.project_status_type}}</td>
                        <td>{{ employee_assigned.employee_assigned_date}}</td>
                        
                        
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
                employee_assigneds: [], 
                projects:{},
                employee_assigned: {
    
                   psid: this.$route.params.id,
                },
                
                
            }
        },

        // this is using created hook 
        created() {
            let apiURL = `http://localhost:27017/employee_project_report/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.employee_assigneds = res.data;
            }).catch(error => {
                console.log(error)
            });
    
        // this is using created hook 
           let apiURL1 = `http://localhost:27017/project_num/${this.$route.params.id}`;
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