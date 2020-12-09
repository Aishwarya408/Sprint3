import axios from 'axios';

const apiUrl = "http://localhost:9999/Surveyor_details/";

class AdminService {

    getUserDetails(userName, password){
      return axios.get(apiUrl + '/', userName, password);
    }

    getAllAdmin(){
        return axios.get(apiUrl);
    }

    insertAdmin(admin){
        return axios.post(apiUrl + '/' + admin);
    }

    getAdminById(id){
        return axios.get(apiUrl + '/' + id);
    }

    updateAdmin(admin){
        return axios.put(apiUrl + '/' + admin);
    }

    deleteAdmin(id){
        return axios.delete(apiUrl + '/' + id);
    }
}

export default new AdminService()