import axios from 'axios';
const BASE_URL = 'http://localhost:8080/AddressBookApp';

class AddressBookService{

    getAllEmployees() {
        return axios.get(`${BASE_URL}/getAll`);
      }

    addContact(data){
      return axios.post(`${BASE_URL}/create`, data)
    }
    deleteContact(id) {
        return axios.delete(`${BASE_URL}/Delete/${id}`); 
      }
      getContact(id) {
        return axios.get(`${BASE_URL}/getrecord/${id}`);
      }
      getContactCount() {
        return axios.get(`${BASE_URL}/getcount`);
      }

      updateContact(id,data) {
        return axios.put(`${BASE_URL}/Updaterecord/${id}`, data);
      }
       getsortCitys(data) {
        return axios.put(`${BASE_URL}/sortCity-ascending`, data);
      }
      getsortCity(data) {
        return axios.put(`${BASE_URL}/sortCity-descending`, data);
      }
}
export default new AddressBookService();