import http from "../http-common";
class UserDataService {
    create(data){
        return http.post("/user", data);
    }
    get(id){
        return http.get("/user/"+id);
    }
    update(id, data){
        return http.put("/user/"+id, data);
    }
    delete(id){
        return http.delete("/user/"+id);
    }
    getUser(user){
        return http.get("/user?username="+user)
    }
}
export default new UserDataService(); 