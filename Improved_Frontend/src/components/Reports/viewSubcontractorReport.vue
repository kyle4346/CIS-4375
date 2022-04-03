<template>
    <div class="row">
         
         
        <div class="col-lg-12">
          <router-link class="btn viewSubcontractor"  to="/viewSubcontractor">View Subcontractors</router-link>
          
            <table class="styled-table">
                
                <thead class="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Project Number</th>
                        <th>Assigned Date</th>
                        <th>Step Cost</th>
                        <th>Subcontractor Paid</th>
                       
                        
                       
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="subcontractor_assigned in subcontractor_assigneds" :key="subcontractor_assigned.subcontractor_assigned_id">
                        <td>{{ subcontractors.subcontractor_fname}}</td>
                        <td>{{ subcontractors.subcontractor_lname}}</td>
                        <td>{{ subcontractor_assigned.project_number}}</td>
                        <td>{{ subcontractor_assigned.subcontractor_assigned_date}}</td>
                        <td>{{ subcontractor_assigned.subcontractor_assigned_cost}}</td>
                        <td>{{ subcontractor_assigned.subcontractor_assigned_paid}}</td>
                       
                        
                  
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
                subcontractors:{},
                subcontractor_assigned: {
    
                   subcontractor_email: this.$route.params.id,
                },
                
                
            }
        },

        // this is using created hook 
        created() {
            let apiURL = `http://localhost:27017/subcontractor_step_report/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.subcontractor_assigneds = res.data;
            }).catch(error => {
                console.log(error)
            });
    
        // this is using created hook 
           let apiURL1 = `http://localhost:27017/subcontractor_num/${this.$route.params.id}`;
            axios.get(apiURL1).then(res => {
                this.subcontractors = res.data;
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

.viewSubcontractor{
    font-size:20px; 
    border: 2px solid black;
    color: White; 
    background-color: #267bfa;
    font-weight:bold; 
    margin-left:1073px; 
    margin-top: -50px;

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