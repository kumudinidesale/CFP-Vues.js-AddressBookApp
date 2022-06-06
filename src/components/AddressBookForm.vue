<template> 
<body>
 
  <header class="header-content header">
      <div class="logo-content">
        
         <router-link to="/"><img src="../assets/aadressbookimage.png" alt="" class="logo-content-img"/></router-link>
          <div>
              <span class="addr-text">ADDRESS</span><br />
              <span class="addr-text addr-book">BOOK</span>
          </div>
      </div>
  </header>
<div>
     <pre>
            {{JSON.stringify(formValues,null,2)}}
            </pre>
            </div>
  <div class="form-content">
    <form class="form1" action="#" @submit="submitForm" >
          <div class="form-head-content">
              <div class="form-head">Person Address Form</div>
             
            </div>

            <div class="row-content">
              <label class="label text" for="name">Full Name</label>
              <input class="input" type="text" name="Name" id="name" placeholder="FullName" v-model="formValues.fullName" required>
              <error-output class="name-error" for="text"></error-output>
            </div>

            <div class="row-content">
              <label class="label text" for="address">Address</label>
              <textarea class="input" id="address" name="Address" style="height: 100px;" v-model="formValues.address" required></textarea>
              <error-output id="address-error" class="address-error" for="address"></error-output>
            </div>
 <div class="row-content">
              <label class="label text" for="phone">Phone Number</label>
              <input class="input" type="text" name="Phone" id="phone" placeholder="PhoneNumber" v-model="formValues.phoneNumber" required>
              <error-output class="phone-error" for="text"></error-output>
            </div>
            <div class="row-content-exp">
              <div class="oneRow-content">
                <label class="label text" for="city">City</label>
                <select class="select-input" id="city" name="City"  v-model="formValues.city" required>
                  <option value="" selected disabled hidden>Select City</option>
                  <option value="Allahabad">Allahabad</option>
                  <option value="Amritsar">Amritsar</option>
                  <option value="Bhubneswa">Bhubneswar</option>
                  <option value="Cuttack">Cuttack</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bhopal">Bhopal</option>
                  <option value="Patna">Patna</option>
                  <option value="Ranchi">Ranchi</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Vaishali">Vaishali</option>
                  <option value="Ramgarh">Ramgarh</option>
                  <option value="Hajipur">Hajipur</option>
                </select>
              </div>
              <div class="oneRow-content">
                <label class="label text" for="state">State</label>
                <select class="select-input" id="state" name="State"  v-model="formValues.state" required>
                  <option value="" selected disabled hidden>Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
              <div class="oneRow-content">
                <label class="label text" for="zip">Zip</label>
                <input class="input" type="text" name="Zip" id="zip" placeholder="zip" v-model="formValues.zip" required>
              </div>
            </div>
           
           
            <div class="add-reset">
              <button type="submit" class="button addButton" id="addButton" >Add</button>
              <button type="button" onclick="resetForm()" class="resetButton button">Reset</button>
            </div>
      </form>
  </div>
</body>
</template>
<script>
import AddressBookService from "../service/AddressBookService";

export default {
    name: 'AddressBookForm',
    data(){
        return{
            formValues:{
                fullName:'',
                address:'',
                city:'',
               state:'',
                zip:'',
                phoneNumber:'',
            }
        }
    },

 methods: {
    submitForm(event){
        event.preventDefault()
        console.log(this.formValues)
         const data=this.formValues;
          AddressBookService.addContact(data).then((response) => {
              console.log(response);
                this.employees = response.data.data;  
                alert("Data Added successfully!!",response) 
            })
             .catch(error => {
                console.log(error);
                  alert("WARNING!! Error while adding the Added person !");
              })
        },
    }
    }

</script>

<style>
body {
    margin: 0;
    height: 100%;
}

.header {
    padding: 15px 0;
    background-color: #ffffff;
}

.header-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 0px solid green;
}

.logo-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 0px solid green;
    width: 80%;
}

.logo-content-img {
    border: solid 0px #42515f;
}

.addr-text {
    font: normal normal bold 20px/25px Montserrat;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0px;
    color: #82a70c;
    text-transform: capitalize;
}
.addr-book {
    color: #42515f;
}

* {
    box-sizing: border-box;
}


 .form-content{
     border:3px;
     padding-top: 50px;
     min-height: calc(100%-80px);
     background-color: #f7f7f7;
     display: flex;
     justify-content: center;
     align-items: center; 
 }

 

.form{
    width: 65%;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid black;
    
    border-radius: 8px;
   
    opacity: 1;
}


.form-head-content{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #008CFF 0% 0% no-repeat padding-box;
    height: 78px;
    width: 100%;
    margin-top: 0px;
    margin-bottom: 40px;
    border-radius: 8px 8px 0px 0px;
}

.form-head{
    display: flex;
    justify-content: flex-end;
    width: 60%;
    text-transform: uppercase;
    font: normal normal normal 24px/37px Roboto;
    letter-spacing: 0px;
    color: #ffffff;
    background:0% 0% no-repeat padding-box;
    opacity: 1;
    padding-top: 10px;
    
}

.form-logo-content{
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    width: 20%;
}

.row-content{
    display: flex;
    flex-direction: column;
    padding-left: 140px;
    padding-right: 140px;
    margin-bottom: 40px;
}

.row-content-exp{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right:  140px; 
    padding-left:  140px; 
    flex-direction: row;
    margin-bottom: 40px;
    align-items: center;
    border: 0px solid green;
}

.oneRow-content{
    display: flex;
    padding-right:  20px;
    width: 100%;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 20px;
    border: px solid green;
}

.text{
    font-size:16px;
    color: #42515f;
    opacity: 1;
    font-family: Roboto;
}

.label{
    text-align: left;
    font: normal normal normal 16px/24px Roboto;
    letter-spacing: 0px;
    color: #42515F;
    opacity: 1;
}

.input{
    width: 100%;
    padding: 12px;
    margin-right: 15px;
    border-radius: 4px;
    resize: vertical;
    border: 1px solid #BDBDBD;
    opacity: 1;
}

error-output{
    margin-left: 10px;
    font-size: 12px;
    font-style: italic;
    color: red;
}

.select-input{
    width: 100%;
    padding: 12px;
    margin-right: 15px;
    border-radius: 4px;
    resize: vertical;
    border: 1px solid #BDBDBD;
    opacity: 1;
}

.add-reset{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    margin-bottom: 40px;
}

.button{
    font-size: 20px;
    font-family: Roboto;
    letter-spacing: 0px;
    color: #42515f;
    opacity: 1;
    background: transparent;
    border: none;
    font-weight: 400;
    min-width: 140px;
    padding: 7px 7px;
    border: 1px solid #707070;
    cursor: pointer;
}

.addButton{
    background-color: #f5f5f5;
    margin-right: 30px;
    background: #E2E2E2 0% 0% no-repeat padding-box;
    border: 1px solid #969696;
    border-radius: 5px;
    opacity: 1;
}

.resetButton{
    background: #E2E2E2 0% 0% no-repeat padding-box;
    border: 1px solid #969696;
    border-radius: 5px;
    opacity: 1;
}

</style>

