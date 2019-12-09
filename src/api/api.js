import * as axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
        "API-KEY": "25c18729-58e9-4033-b31a-8924601451d6"
    }
});
export const usersAPI = {
    getUsers(currentPage,pageSize) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(res =>{
                return res.data;
            });
    },
    unFollowUser(u) {
        return instance.delete(`follow/${u}`)
            .then(res => {
                return res.data;
            })
    },

    followUser(u) {
        return instance.post(`/follow/${u}`,{})
            .then(res => {
                return res.data;
            })
    },
};

export const profileAPI = {
    profileUser(userId) {
        return instance.get(`profile/` + userId,)
            .then(res => {
                return res.data;
            });
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status})
    }
};
export const authAPI = {
    authUser() {
        return instance.get(`auth/me`,)
            .then(res => {
                return res.data;
            })
    },
};