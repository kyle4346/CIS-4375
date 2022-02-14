<template>
    <div class="row justify-content-center"> 
        <div class="col-md-8"> 
            <h3 class="text-center" style="font-size:200%; font-weight:bold">Investor Intake Form</h3>
            <br>
            <form @submit.prevent="handleSubmitForm">
                
                <div class="form-group row">
                <strong style ="font-size:150%">General Information</strong>
                <br>
                <br>
                
                <br>
                <div class="form-group col-md-4">
                    <label style ="font-size:14pt; text-align:left;" for="inputName">Investor Name</label>
                    <input  type="text" class="form-control" id="inputName" pattern="[A-Za-z\s]{0,40}" v-model="investor.investor_name" required>
                    <p style="color:red; font-weight:bold">Required letters only</p>
                </div>
        

                 <div class="form-group col-md-4">
                    <label style ="font-size:14pt" for="inputShortNotes">Investor Details</label>
                    <textarea type="text" class="form-control" id="inputShortNotes" maxlength="60"   rows="3" v-model="investor.investor_detail" ></textarea>
                    
                </div>

                <div class="form-group col-md-4">
                    <label style ="font-size:14pt">Investor Phone</label>
                    <input type="tel" class="form-control" placeholder="123-455-6786" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" v-model="investor.investor_phone" required>
                </div>

                    <br>
                 </div>

                <br>
                <br>

                <div class="form-group row">
                
                <div class="form-group col-md-4">
                    
                    <label style ="font-size:14pt">Investor Email</label>
                    <input type="email" class="form-control" placeholder="yourname123@mail.com" v-model="investor.investor_email" required>
                    <p style="color:red; font-weight:bold">Required</p>
                </div>

                <div class="form-group col-md-4">
                    <label style ="font-size:14pt" >Investor Address</label>
                    <input type="text" class="form-control" pattern="[a-zA-Z\d\s\-\,\#\.\+]+{5,50}"   v-model="investor.investor_address" required>
                    <p style="color:red; font-weight:bold">Required</p>
                </div>
                
                <div class="form-group col-md-3">
                    <label style ="font-size:14pt" >Investor City</label>
                    <input type="text" class="form-control" pattern="[A-Za-z]{5,35}" v-model="investor.investor_city" required>
                    <p style="color:red; font-weight:bold">Required</p>
                </div>

                 <div class="form-group col-md-1">
                    
                    <label style ="font-size:14pt">State</label>
                    
                    <select  v-model="investor.state" required> 
                     <option v-for="state in states" v-bind:key="state">{{state}}</option>
                    </select>
                    <p style="color:red; font-weight:bold">Required</p>
                    
                </div>

                </div>


                <div class="form-group row">
                
                

                <div class="form-group col-md-3">
                    <br>
                    <label style ="font-size:14pt">Zip</label>
                    <input type="zip" class="form-control" pattern="[0-9]{5}" v-model="investor.investor_zipcode" required>
                      <p style="color:red; font-weight:bold">Required</p>
                </div>

                <div class="form-group col-sm-1">

                </div>

                 <div class="form-group col-md-2">
                    
                    <br>
                    <label style ="font-size:14pt">Investor Status</label>
                   
                    <select  v-model="investor.investor_status" > 
                     <option v-for="investor_status in investor_status" v-bind:key="investor_status">{{investor_status}}</option>
                    </select>
                    
                </div>

                <div class="form-group col-sm-2">

                </div>

                 <div class="form-group col-md-2">
                    
                    <br>
                    <label style ="font-size:14pt">Investor Type</label>
                    
                    <select  v-model="investor.investor_type" > 
                     <option v-for="investor_type in investor_type" v-bind:key="investor_type">{{investor_type}}</option>
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
                <button class="btn btn-danger mt-3">Create</button>
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
                //retrieving data from the client_form schema getting the data 
                errors: [],
                investor: {
                   investor_name: '',
                   investor_detail: '',
                   investor_phone: '',
                   investor_email: '',
                   investor_address: '',
                   investor_city: '',
                   investor_zipcode: '',
                   state: '',
                   investor_status: '',
                   investor_type: '',
                   

                },
                //static data for dropdown lists
                //languages: ['English','Spanish','Vietnamese','Russian','Bilingual','German','Italian','French','Portuguese','Mandarin Chinese','Arabic','Hindi','Japanese','Punjabi'],
                //ethnicities:['American Indian or Alaska Native','Asian','Black or African American','Hispanic or Latino','Native Hawaiian or Other Pacific Islander','White'],
                states:['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
                'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'],
                //races:['White','Black or African American','American Indian or Alaska Native','Asian','Native Hawaiian and Pacific Islander','Hispanic or Latino']
                investor_status: ['pending', 'processing', 'complete'],
                investor_type:['Bank','Entrepreneur','Worker'],
            }
        },
        methods: {
            handleSubmitForm() {
                //first validation 
                this.errors = [];

                if(!this.investor.investor_name){

                    this.errors.push("Pass letters only.");

            }
                //posing data that has been created to route passing the client_form schema data
                let apiURL = 'http://localhost:27017/investor';
                
                axios.post(apiURL, this.investor).then(() => {
                    //chnaging the view to the list
                  this.$router.push('/viewInvestor')
                  this.investor = {
                   investor_name: '',
                   investor_detail: '',
                   investor_phone: '',
                   investor_email: '',
                   investor_address: '',
                   investor_city: '',
                   investor_zipcode: '',
                   state: '',
                   investor_status: '',
                   investor_type: '',
                  }
                }).catch(error => {
                    this.errors.push("Error in the form submission" + error.response.data);
                });
            }
        }
           
    }

</script>