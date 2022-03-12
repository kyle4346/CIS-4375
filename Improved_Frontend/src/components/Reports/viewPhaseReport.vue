<template>
    <div class="row">
         <h2>Phases for: {{projects.project_name}}, {{projects.project_start_date}}</h2>
        <div class="col-lg-12">

            <table class="table table-striped">
                
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
                    <tr v-for="phase in Phases" :key="phase.phase_id">
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
                Phases: [], 
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
                this.Phases = res.data;
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



<style>
    .btn-success {
        margin-right: 10px;
    }
</style>