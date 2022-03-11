<template>
    <div class="row">
        <div class="col-lg-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Investor Fname</th>
                        <th>Investor Lname</th>
                        <th>Investor Details</th>
                        <th>Investor Phone</th>
                        <th>Investor Email</th>
                        <th>Investor Status</th>
                        <th>Investor Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="investor in investors" :key="investor.investor_iD">
                        <td>{{ investor.investor_fname }}</td>
                        <td>{{ investor.investor_lname }}</td>
                        <td>{{ investor.investor_detail }}</td>
                        <td>{{ investor.investor_phone }}</td>
                        <td>{{ investor.investor_email }}</td>
                        <td>{{ investor.investor_status}}</td>
                        <td>{{ investor.investor_type }}</td>
                        <td>
                            <router-link :to="{name: 'editInvestor', params: { id: investor.investor_iD}}" style="text-align: center;" class="btn btn-success">Edit
                            </router-link>

                            


                        <button @click.prevent="deleteInvestor(investor.investor_iD)" class="btn btn-danger">Delete</button>
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
                investors: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/investors';
            axios.get(apiURL).then(res => {
                this.investors = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteInvestor(id){
                console.log(id)
                let apiURL = `http://localhost:27017/investor/${id}`;
                let indexOfArrayItem = this.investors.findIndex(i => i.investor_iD === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.investors.splice(indexOfArrayItem, 1);
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
