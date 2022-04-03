<template>
    <div class="row">
         <h2 class="reportSteps">Steps for Phase Number: {{phases.phase_number}}, <br/> Phase Name: {{phases.phase_name}}</h2>
       
        <div class="col-lg-12">
         <router-link class="btn viewPhases" to="/viewPhase">View Phases</router-link>
            <table class="styled-table">
                
                <thead class="thead-dark">
                    <tr>
                        <th>Step Name:</th>
                        <th>Step Cost:</th>
                        <th>Step Completed:</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="step in Steps" :key="step.step_id">
                        <td>{{ step.step_name}} </td>
                        <td>{{ step.step_cost }}</td>
                        <td>{{ step.step_completed }}</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
         
             <br>
             <br>
 
       
    </div>

  


</template>

<script>
    import axios from "axios";
    //pass data values from the cfcworker_client_activity
    export default {
        data() {
            return {
            //retrieving data from the Cfcworker_client_activities schema getting the data 
                Steps: [], 
                phases: {},
                step: {
                   step_name: '',
                   step_cost: '',
                   step_completed: '',
                   phase_number: this.$route.params.id 
                   
                },
                
                 
                
            }
        },

        // this is using created hook 
        created() {
            let apiURL = `http://localhost:27017/project_step_report/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.Steps = res.data;
            }).catch(error => {
                console.log(error)
            });
    
        // this is using created hook 
            let apiURL1 = `http://localhost:27017/phase_report/${this.$route.params.id}`;
            axios.get(apiURL1).then(res => {
                this.phases = res.data;
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

.reportSteps{
margin-left:0px;
  margin-top:0px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding:1px 1px;
  text-align: center;

}
.viewPhases{
    font-size:20px; 
    border: 2px solid black;
    color: White; 
    background-color: #267bfa;
    font-weight:bold; 
    margin-left:1174px; 
    margin-top: -70px;
    padding: 9px 1px;
   

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