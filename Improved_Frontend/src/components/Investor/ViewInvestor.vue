<template>
    <div class="row">
        <div class="col-lg-12">

        <strong style="margin-left:400px; font-size: 20pt; color:Black; "  >Search Investors:</strong>
        <input style="margin-left:5px; align:center; font-size: 12pt;"  size="30" type="text" v-model="search" placeholder="ex: last name or first name" />
        
          <br>
          <br>
          
            <table class="styled-table">
                <col   style="width:1%"> 
                <col   style="width:9%"> 
                <col   style="width:3%"> 
                <col   style="width:11%"> 
                <col   style="width:10%"> 
                <col   style="width:12%"> 
                <col   style="width:1%"> 
                <col   style="width:1%"> 
                <col   style="width:9%">
                <thead class="thead-dark">
                   
        
                    <tr>
                        <th>ISID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Investor Details</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="investor in filteredInvestors" :key="investor.investor_iD">
                        <td>{{ investor.isid }}</td>
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

                            <br>
                            <br>
                           
                            <router-link :to="{name: 'investor_project_report', params: { id: investor.isid}}"  style="text-align: center; margin-right:10px;" class="btn btn-dark">Assigned Projects
                            </router-link>

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
                investors: [] ,
                search: ''
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
        computed: {
            filteredInvestors: function(){


                return this.investors.filter((investor) =>{

                    return investor.investor_lname.toLowerCase().match(this.search.toLowerCase()) ||
                           investor.investor_fname.toLowerCase().match(this.search.toLowerCase()) ||
                           investor.investor_phone.toLowerCase().match(this.search.toLowerCase()) ||
                           investor.investor_email.toLowerCase().match(this.search.toLowerCase()) 
                    
                })
            }    
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
