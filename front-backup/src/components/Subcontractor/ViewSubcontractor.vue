<template>
    <div class="row">
        <div class="col-lg-12">
             <strong style="margin-left:400px; font-size: 20pt; color:Black; "  >Search Subcontractors:</strong>
            <input style="margin-left:5px; align:center; font-size: 12pt;"  size="30" type="text" v-model="searchSubcontractors" placeholder="ex: last name or first name" /> 
        <p><router-link class="btn btn-primary" style="font-size:20px; color: White; font-weight:bold; margin-left:970px; margin-top: -60px;" to="/createSubcontractor">Add Subcontractor</router-link></p>
          
            <table class="styled-table">
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:10%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:0%"> 
                <col   style="width:1%">
                <col   style="width:2%">
               
                <thead class="thead-dark">
                    <tr>
                        <th>SUBID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Business Name</th>
                        <th>Rate/Time</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Actions</th>
                        <th>Reports</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="subcontractor in filteredSubcontractors" :key="subcontractor.subcontractor_id">
                        <td style="vertical-align:top">{{ subcontractor.subid }}</td>
                        <td style="vertical-align:top">{{ subcontractor.subcontractor_fname }}</td>
                        <td style="vertical-align:top">{{ subcontractor.subcontractor_lname }}</td>
                        <td style="vertical-align:top">{{ subcontractor.subcontractor_business_name }}</td>
                        <td style="vertical-align:top">{{ subcontractor.subcontractor_rate }}</td>
                        <td style="vertical-align:top">{{ subcontractor.subcontractor_phone}}</td>
                        <td style="vertical-align:top">{{ subcontractor.subcontractor_email }}</td>
                        <td style="vertical-align:top">{{ subcontractor.subcontractor_status }}</td>
                        <td style="vertical-align:top">{{ subcontractor.subcontractor_type }}</td>
                        <td>
                            
                            <router-link :to="{name: 'editSubcontractor', params: { id: subcontractor.subcontractor_id}}" style="text-align: center; margin-top:-20px; padding: 1px 12px; font-size:16px" class="btn btn-success">Edit
                            </router-link>

                            <br>

                            <br>
                                        
                            <button  @click.prevent="deleteSubcontractor(subcontractor.subcontractor_id)" style="text-align: center; margin-top:-50px; padding: 1px 3px; font-size:16px" class="btn btn-danger">Delete</button>
                        

                            <router-link :to="{name: 'createSubcontractorAssigned', params: { id: subcontractor.subcontractor_email}}"  style="text-align: center; margin-top:-15px; color:white; background-color:gray; padding: 1px 2px; font-size:16px" class="btn btn-dark">Subcontractor Assigned
                            </router-link>
                        
                        </td>

                        <td>
                            
                         <router-link :to="{name: 'subcontractor_step_report', params: { id:subcontractor.subid}}"  style="text-align: center;  margin-top:-70px; color:black; background-color:#FFD700; padding: 6px 3px; font-size:16px" class="btn btn-dark">Assigned Steps
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
                subcontractors: [],
                searchSubcontractors: ''
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'https://data.mongodb-api.com/app/data-nhwaq/endpoint/getallsubcontractors';//http://localhost:27017/subcontractors
            axios.get(apiURL).then(res => {
                this.subcontractors = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        computed: {
            filteredSubcontractors: function(){


                return this.subcontractors.filter((subcontractor) =>{

                    return subcontractor.subcontractor_fname.toLowerCase().match(this.searchSubcontractors.toLowerCase()) ||
                           subcontractor.subcontractor_lname.toLowerCase().match(this.searchSubcontractors.toLowerCase()) ||
                           subcontractor.subcontractor_phone.toLowerCase().match(this.searchSubcontractors.toLowerCase()) ||
                           subcontractor.subcontractor_email.toLowerCase().match(this.searchSubcontractors.toLowerCase()) ||
                           subcontractor.subid.match(this.searchSubcontractors)
                    
                })
            }    
        },
        methods: {
            deleteSubcontractor(id){
                console.log(id)
                let apiURL = `http://localhost:27017/subcontractor/${id}`;
                let indexOfArrayItem = this.subcontractors.findIndex(i => i.subcontractor_id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.subcontractors.splice(indexOfArrayItem, 1);
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
.styled-table th {
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
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

