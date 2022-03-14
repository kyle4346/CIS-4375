<template>
    <div class="row">
         <h2>Tasks for Step Number: {{steps.step_number}}, Step Name: {{steps.step_name}}</h2>
        <div class="col-lg-12">

            <table class="table table-striped">
                
                <thead class="thead-dark">
                    <tr>
                        <th>Task Name:</th>
                        <th>task Num:</th>
                        <th>Task Completed:</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="task in Tasks" :key="task.task_id">
                        <td>{{ task.task_name}} </td>
                        <td>{{ task.task_number }}</td>
                        <td>{{ task.task_completed }}</td>
                        
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
                Tasks: [], 
                steps: {},
                task: {
                   task_name: '',
                   task_number: '',
                   task_completed: '',
                   step_number: this.$route.params.id 
                   
                },
                
                 
                
            }
        },

        // this is using created hook 
        created() {
            let apiURL = `http://localhost:27017/project_task_report/${this.$route.params.id}`;
            axios.get(apiURL).then(res => {
                this.Tasks = res.data;
            }).catch(error => {
                console.log(error)
            });
    
        // this is using created hook 
            let apiURL1 = `http://localhost:27017/step_report/${this.$route.params.id}`;
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



<style>
    .btn-success {
        margin-right: 10px;
    }
</style>