import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '1a23396f-8610-49c3-89db-4f73239f8a67'
  }
})

export const usersAPI = {
  getUsers: (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  unfollowUser: (userId) => {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  },
  followUser: (userId) => {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  }
}

export const headerAPI = {
  authMe: () => {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data
      })
  },
  login: (email, password, rememberMe = false) => {
    return instance.post(`auth/login`, {email, password, rememberMe})
    .then(response => {
      return response.data
    })
  },
  logout: () => {
    return instance.delete(`auth/login`)
    .then(response => {
      return response.data
    })
  } 
}

export const profileAPI = {
  setUserProfile: (userId) => {
    return instance.get(`profile/${userId}`)
    .then(response => { 
      return response.data
    })
  },
  getStatus: (userId) => {
    return instance.get(`profile/status/${userId}`)
    .then(response => { 
      return response.data
    })
  },
  updateStatus: (status) => {
    return instance.put(`profile/status`, {status: status})
    .then(response => { 
      return response.data
    })
  }
}