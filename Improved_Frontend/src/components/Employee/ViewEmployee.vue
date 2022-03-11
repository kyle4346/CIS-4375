<template>
    <div class="row">
        <div class="col-lg-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Employee FName</th>
                        <th>Employee LName</th>
                        <th>Employee Phone</th>
                        <th>Employee Email</th>
                        <th>Employee Title</th>
                        <th>Employee Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="employee in employees" :key="employee.employee_id">
                        <td>{{ employee.employee_first_name }}</td>
                        <td>{{ employee.employee_last_name }}</td>
                        <td>{{ employee.employee_phone }}</td>
                        <td>{{ employee.employee_email }}</td>
                        <td>{{ employee.employee_title_description}}</td>
                        <td>{{ employee.employee_status_type}}</td>
                        <td>
                            <router-link :to="{name: 'editEmployee', params: { id: employee.employee_id}}" style="text-align: center;" class="btn btn-success">Edit
                            </router-link>

                            


                        <button @click.prevent="deleteEmployee(employee.employee_id)" class="btn btn-danger">Delete</button>
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
                employees: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/employees';
            axios.get(apiURL).then(res => {
                this.employees = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteEmployee(id){
                console.log(id)
                let apiURL = `http://localhost:27017/employee/${id}`;
                let indexOfArrayItem = this.employees.findIndex(i => i.employee_id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.employees.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>



<style>
    .btn-success {
        margin-right: 10px;
    }
</style>
