<template>
    <div class="row">
         
         
        <div class="col-lg-12">
          <router-link class="btn btn-primary" style="font-size:20px; color: white; font-weight:bold; margin-left:1165px; margin-top: -50px;" to="/viewStep">View Steps</router-link>
            <table class="styled-table">
                
                <thead class="thead-dark">
                    <tr>
                        <th>SUBID</th>
                        <th>STEPID</th>
                        <th>Project Number</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Assigned Date</th>
                        <th>Step Cost</th>
                        <th>Subcontractor Paid</th>
                        <th>Step Num</th>
                        <th>Step Name</th>
                        <th>Step Status</th>
                        
                       
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="subcontractor_assigned in subcontractor_assigneds" :key="subcontractor_assigned.subcontractor_assigned_id">
                        <td>{{ subcontractor_assigned.subid}}</td>
                        <td>{{ subcontractor_assigned.stepid}}</td>
                        <td>{{ subcontractor_assigned.project_number}}</td>
                        <td>{{ subcontractor_assigned.subcontractor_firstname}}</td>
                        <td>{{ subcontractor_assigned.subcontractor_lastname}}</td>
                        <td>{{ subcontractor_assigned.subcontractor_assigned_date}}</td>
                        <td>{{ subcontractor_assigned.subcontractor_assigned_cost}}</td>
                        <td>{{ subcontractor_assigned.subcontractor_assigned_paid}}</td>
                        <td>{{ steps.step_number}}</td>
                        <td>{{ steps.step_name}}</td>
                        <td>{{ steps.step_status_type}}</td>
                        
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
                subcontractor_assigneds: [], 
                steps:{},
                subcontractor_assigned: {
    
                   subcontractor_email: this.$route.params.id,
                },
                
                
            }
        },

        // this is using created hook 
        created() {
            let apiURL = `http://localhost:27017/step_subcontractor_report/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.subcontractor_assigneds = res.data;
            }).catch(error => {
                console.log(error)
            });
    
        // this is using created hook 
           let apiURL1 = `http://localhost:27017/step_num/${this.$route.params.id}`;
            axios.get(apiURL1).then(res => {
                this.steps = res.data;
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