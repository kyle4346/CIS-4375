<template>
    <div class="row">

      
         
        <div class="col-lg-12">
           <u class="projectReport">Assignment of Employees Report</u>
      <br>
      <br>
          <h2  class="reportEmployee" > Project #{{projects.project_number}}:  {{projects.project_name}} <br/>  Project Duration: {{projects.project_estimated_duration}} Months  <br/> Budget: {{projects.project_budget}} </h2>

          <router-link class="btn viewProjects"  to="/viewProject">View Projects</router-link>
            <table class="styled-table">
                
                <thead class="thead-dark">
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                         <th>Employee Email</th>
                        <th>Assigned Date</th>
                        
                        
                        
                       
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="employee_assigned in employee_assigneds" :key="employee_assigned.employee_assigned_id">
                        <td>{{ employee_assigned.employee_firstname}}</td>
                        <td>{{ employee_assigned.employee_lastname}}</td>
                         <td>{{ employee_assigned.employee_email}}</td>
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
    
                   project_number: this.$route.params.id,
                },
                
                
            }
        },

        // this is using created hook 
        created() {
            let apiURL = `http://localhost:27017/project_employee_report/${this.$route.params.id}`;
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

.styled-table th::after{
    content: '';
    width:100%;
    height:2px;
    position:absolute;
    bottom: 0;
    left: 0;
    background: black;

}
.btn-success {
        margin-right: 10px;
}

.projectReport{
 margin-left:450px;
  margin-top:0px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding:1px 1px;
  text-align: center;
  font-size: 35px;

}


.reportEmployee{
 margin-left:0px;
  margin-top:0px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding:1px 1px;
  text-align:left;
  font-size: 25px;

}

.viewProjects{
    font-size:20px; 
    border: 2px solid black;
    color: White; 
    background-color: #267bfa;
    font-weight:bold; 
    margin-left:1140px; 
    margin-top: -110px;

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