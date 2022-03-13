<template>
    <div class="row">
         <h2>Steps for Phase Number: {{phases.phase_number}}, Phase Name: {{phases.phase_name}}</h2>
        <div class="col-lg-12">

            <table class="table table-striped">
                
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



<style>
    .btn-success {
        margin-right: 10px;
    }
</style>