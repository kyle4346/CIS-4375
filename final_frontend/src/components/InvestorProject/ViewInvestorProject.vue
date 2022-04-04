<template>
    <div class="row">
        <div class="col-lg-12">

        <strong style="margin-left:400px; font-size: 20pt; color:Black; "  >Search Assigned Investors:</strong>
        <input style="margin-left:5px; align:center; font-size: 12pt;"  size="30" type="text" v-model="search" placeholder="Filter by Project Num. or Name " />
        <p><router-link class="btn createInvestorAssign"  to="/createInvestorAssigned">Add Investor Assignment</router-link></p>
          
          <br>
         
            <table class="styled-table">
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                 
                <thead class="thead-dark">
                   
        
                    <tr>
                        <th>Project Num.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Investor Email</th>
                        <th>Investor Assigned Date</th>
                        <th>Investment Amount</th>
                        <th>Investor Paid</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="investor_assigned in filteredInvestorsAssigned" :key="investor_assigned.investor_assigned_id">
                        <td style="vertical-align:top">{{ investor_assigned.project_number}}</td>
                        <td style="vertical-align:top">{{ investor_assigned.investor_assign_firstname}}</td>
                        <td style="vertical-align:top">{{ investor_assigned.investor_assign_lastname}}</td>
                        <td style="vertical-align:top">{{ investor_assigned.investor_email}}</td>
                        <td style="vertical-align:top">{{ investor_assigned.investor_assigned_date }}</td>
                        <td style="vertical-align:top">{{ investor_assigned.investor_assigned_cost }}</td>
                        <td style="vertical-align:top">{{ investor_assigned.investor_assigned_paid}}</td>
                        <td>
                            <router-link :to="{name: 'editInvestorAssigned', params: { id: investor_assigned.investor_assigned_id}}"  class="btn one">View / Edit
                            </router-link>
                            
                            <button @click.prevent="deleteInvestorAssigned(investor_assigned.investor_assigned_id)" class="btn two">Delete</button>

                            
                            
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

                    return investor_assigned.project_number.match(this.search) ||
                           investor_assigned.investor_lastname.toLowerCase().match(this.search.toLowerCase())||
                           investor_assigned.investor_firstname.toLowerCase().match(this.search.toLowerCase())
                    
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
  height: 140%;
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


.btn{
    position: -webkit-absolute;
    position: absolute;
    margin-right: 0px;

}

.createInvestorAssign{
font-size:20px; 
    border: 2px solid black;
    color: White; 
    background-color: #267bfa;
    font-weight:bold; 
    margin-left:1030px; 
    margin-top: -45px;

}
.one{
border: 2px solid black;
   margin-top: -45px;
   margin-left:-15px; 
   color:white; 
   background-color:green; 
   padding: 1px 3px;
   font-size:16px
}

.two{
border: 2px solid black;
   margin-top: -5px;
   margin-left:-15px; 
   color:white; 
   background-color:red; 
   padding: 1px 18px;
   font-size:16px

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

