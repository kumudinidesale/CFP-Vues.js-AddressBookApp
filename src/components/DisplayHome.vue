<template>
   <table id="display" className="display">
        <tbody>    
          <tr>
            <th>fullname</th>
      <th>address</th>
      <th  @click="getsortCitys(employee.city)">city</th>
      <th>state</th>
      <th>zip</th>
      <th>phoneNumber</th>
      <th>Action</th>
          </tr>
             <tr v-for="employee in employees" :key="employee.id">
                       
                      <td> {{employee.fullName }}</td>
                        <td> {{employee.address}}</td>
                        <td> {{employee.city}}</td>
                        <td> {{employee.state}}</td>    
                        <td> {{employee.zip}}</td>
                        <td> {{employee.phoneNumber}}</td>
                         <td>
                     <img @click="update(employee.id)" src="../assets/images (2).png" alt="edit" width="30" height="30" />
                    <img @click="remove(employee.id)" src="../assets/images.png" alt="delete" width="30" height="30"/>
                    </td>
                    </tr>
          </tbody>
          </table>
</template>
<script>
import AddressBookService from "../service/AddressBookService";
export default {
  name: 'DisplayHome',
   data(){
        return {
            employees: [],
         
        }
    },
     methods: {
        getContact(){
            AddressBookService.getAllEmployees().then((response) => {
              console.log(response.data.data);
                this.employees = response.data.data;   
            });
        },
          getsortCitys(){
            AddressBookService. getsortCitys().then((response) => {
              console.log(response.data.data);
                this.employees = response.data.data;   
            });
        },
       
          update(id){
          console.log(id);
          this.$router.push({name: "EditForm",params:{id:id}})
        },
 remove(id){
     console.log(id)
        AddressBookService
          .deleteContact(id)
          .then((data) => {
            var answer = window.confirm(" Employee data once deleted cannot be restored!! Do you wish to continue ?",data);
            if(answer === true){
                alert("Employee data deleted successfully!!");
                window.location.reload();
                this.getContact();
            }
            else{
              window.location.reload();
            }
          })
          .catch((error) => {
            alert("Something Went Wrong!");
          });
        }
    },
    created() {
        this.getContact();
    }
}

</script>

<style>
.display {
    width: 99.9%;
    border-collapse: separate;
    border-spacing: 0 7px;
    min-width: 800px;
}  
</style>