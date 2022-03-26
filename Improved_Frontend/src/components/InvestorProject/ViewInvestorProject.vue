<template>
    <div class="row">
        <div class="col-lg-12">

        <strong style="margin-left:400px; font-size: 20pt; color:Black; "  >Search Investors Assigned:</strong>
        <input style="margin-left:5px; align:center; font-size: 12pt;"  size="30" type="text" v-model="search" placeholder="ex: ISID or PSID or Investor Paid " />
        
          <br>
          <br>
          
            <table class="styled-table">
                <col   style="width:1%"> 
                <col   style="width:1%"> 
                <col   style="width:12%"> 
                <col   style="width:16%"> 
                <col   style="width:14%"> 
                <col   style="width:0%"> 
                <col   style="width:14%"> 
                 
                <thead class="thead-dark">
                   
        
                    <tr>
                        <th>ISID</th>
                        <th>PSID</th>
                        <th>Project Number</th>
                        <th>Investor Assigned Date</th>
                        <th>Investment Amount</th>
                        <th>Investor Paid</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="investor_assigned in filteredInvestorsAssigned" :key="investor_assigned.investor_assigned_id">
                        <td>{{ investor_assigned.isid }}</td>
                        <td>{{ investor_assigned.psid }}</td>
                        <td>{{ investor_assigned.project_number }}</td>
                        <td>{{ investor_assigned.investor_assigned_date }}</td>
                        <td>{{ investor_assigned.investor_assigned_cost }}</td>
                        <td>{{ investor_assigned.investor_assigned_paid}}</td>
                        <td>
                            <router-link :to="{name: 'editInvestorAssigned', params: { id: investor_assigned.investor_assigned_id}}" style="text-align: center;" class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteInvestorAssigned(investor_assigned.investor_assigned_id)" style="margin-left:10px" class="btn btn-danger">Delete</button>

                            <br>
                            <br>
                            

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
                investor_assigneds: [] ,
                search: ''
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:27017/investor_assigned';
            axios.get(apiURL).then(res => {
                this.investor_assigneds = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        computed: {
            filteredInvestorsAssigned: function(){


                return this.investor_assigneds.filter((investor_assigned) =>{

                    return investor_assigned.isid.match(this.search) ||
                           investor_assigned.psid.match(this.search) ||
                           investor_assigned.project_number.match(this.search) ||
                           investor_assigned.investor_assigned_paid.toLowerCase().match(this.search.toLowerCase()) 
                    
                })
            }    
        },
        methods: {
            deleteInvestorAssigned(id){
                console.log(id)
                let apiURL = `http://localhost:27017/investor_assigned/${id}`;
                let indexOfArrayItem = this.investor_assigneds.findIndex(i => i.investor_assigned_id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.investor_assigneds.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
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
        margin-right: 6px;
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
