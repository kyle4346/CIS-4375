<template>
    <div class="row justify-content-center"> 
        <div class="col-md-8"> 
            <h3 class="text-center" style="font-size:200%; font-weight:bold">Subcontractor Update Form</h3>
            <br>
            <form @submit.prevent="handleUpdateForm">
                
               <div class="form-group row">
                <strong style ="font-size:150%">General Information</strong>
                <br>
                <br>
                
                <br>
                <div class="form-group col-md-4">
                    <label style ="font-size:14pt; text-align:left;" for="inputFName">Subcontractor First Name</label>
                    <input  type="text" class="form-control" id="inputFName" pattern="[A-Za-z\s]{1,25}" v-model="subcontractor.subcontractor_fname" required>
                    <p style="color:red; font-weight:bold">Required letters only</p>
                </div>

                <div class="form-group col-md-4">
                    <label style ="font-size:14pt; text-align:left;" for="inputLName">Subcontractor Last Name</label>
                    <input  type="text" class="form-control" id="inputLName" pattern="[A-Za-z\s]{5,25}" v-model="subcontractor.subcontractor_lname" required>
                    <p style="color:red; font-weight:bold">Required letters only</p>
                </div>
        

                 <div class="form-group col-md-4">
                    <label style ="font-size:14pt; text-align:left;" for="inputTrade">Subcontractor Business Name</label>
                    <input  type="text" class="form-control" id="inputTrade" pattern="[A-Za-z\s]{5,25}" v-model="subcontractor.subcontractor_business_name" required>
                    <p style="color:red; font-weight:bold">Required letters only</p>
                </div>



                 </div>




                <br>
               

                <div class="form-group row">
                 

                 <!--Work on this below -->
                <div class="form-group col-md-4">
                    <label style ="font-size:14pt; text-align:left;" for="inputSRate">Subcontractor Rate</label>
                    <input  type="text" class="form-control" id="inputSRate" placeholder="$100/hr" pattern="[a-zA-Z\d\s\-\,\#\.\$\+]+{5,25}" v-model="subcontractor.subcontractor_rate" required>
                    <p style="color:red; font-weight:bold">Required letters only</p>
                </div>

                <div class="form-group col-md-4">
                    <label style ="font-size:14pt">Subcontractor Cell Phone</label>
                    <input type="tel" class="form-control"  placeholder="123-455-6786" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" v-model="subcontractor.subcontractor_phone" required>
                    <p style="color:red; font-weight:bold">Required</p>
                </div>


                
                <div class="form-group col-md-4">
                    
                    <label style ="font-size:14pt">Subcontractor Email</label>
                    <input type="email" class="form-control" placeholder="yourname123@mail.com" v-model="subcontractor.subcontractor_email" required>
                    <p style="color:red; font-weight:bold">Required</p>
                </div>



                </div>

                <br>
                

                <div class="form-group row">

                <div class="form-group col-md-4">
                    <label style ="font-size:14pt" >Address</label>
                    <input type="text" class="form-control" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{5,50}"   v-model="subcontractor.subcontractor_address" required>
                    <p style="color:red; font-weight:bold">Required</p>
                </div>
                
                <div class="form-group col-md-4">
                    <label style ="font-size:14pt" >City</label>
                    <input type="text" class="form-control" pattern="[A-Za-z]{5,35}" v-model="subcontractor.subcontractor_city" required>
                    <p style="color:red; font-weight:bold">Required</p>
                </div>

                 <div class="form-group col-md-1">
                    
                    <label style ="font-size:14pt">State</label>
                    
                    <select  v-model="subcontractor.subcontractor_state" required> 
                     <option v-for="state in states" v-bind:key="state">{{state}}</option>
                    </select>
                    <p style="color:red; font-weight:bold">Required</p>
                    
                </div>

                </div>

        

                <div class="form-group row">

                <div class="form-group col-md-2">
                    <br>
                    <label style ="font-size:14pt">Zip</label>
                    <input type="zip" class="form-control" pattern="[0-9]{5}" v-model="subcontractor.subcontractor_zipcode" required>
                      <p style="color:red; font-weight:bold">Required</p>
                </div>

                <div class="form-group col-md-2">

                </div>

                 <div class="form-group col-md-4">
                    
                    <br>
                    <label style ="font-size:14pt">Subcontractor Status</label>
                   
                    <select  v-model="subcontractor.subcontractor_status" > 
                     <option v-for="subcontractor_status in subcontractor_status" v-bind:key="subcontractor_status">{{subcontractor_status}}</option>
                    </select>
                    
                </div>

                <div class="form-group col-md-4">
                    
                    <br>
                    <label style ="font-size:14pt">Subcontractor Type</label>
                   
                    <select  v-model="subcontractor.subcontractor_type" > 
                     <option v-for="subcontractor_type in subcontractor_type" v-bind:key="subcontractor_type">{{subcontractor_type}}</option>
                    </select>
                    
                </div>

                


                </div>

               

                    <br>
                    <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" :key="error"> {{error}} </li>
                    </ul>
                    </p>


                <br>
                <button class="btn btn-danger mt-3">Update</button>
                <br>
                <br>
                <br>



               
            </form>
        </div> 
    </div> 
</template>


<script>
import axios from "axios";

export default {
    data() {
        return {
            errors: [],
            subcontractor: { 



            },//drop down lists found from createcomponent, unchanged of course
            //static data for dropdown lists
                states:['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
                'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'],
                subcontractor_status: ['Available', 'Unavailable', 'Working','Unknown'],
                subcontractor_type:['Electrical','Roofing','Remodeling','Mechanical','Air Conditioning','Construction'],
                
        }

    },
    created() {//Edits based on the client ID already entered
        let apiURL = `http://localhost:27017/subcontractor/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.subcontractor = res.data;
        })//if everything is successful, then everything should show for this view
    },
    methods: {
        handleUpdateForm() {
             //first validation 
                this.errors = [];

                if(!this.subcontractor.subcontractor_fname){

                    this.errors.push("Pass letters only.");

            }
            let apiURL = `http://localhost:27017/subcontractor/${this.$route.params.id}`;
            //pulls from back end of client ID to get all data pertaining to client
            axios.put(apiURL, this.subcontractor).then((res) => {
                console.log(res)
                this.$router.push('/viewSubcontractor')
            }).catch(error => {
                this.errors.push("Error in the form submission" + error.response.data);
            });//If an error is still detected, the edit will not work, and the form to jump to the field with error
        }
    }
}
</script>