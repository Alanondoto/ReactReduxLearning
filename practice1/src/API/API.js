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
    return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
      .then(response => {
        return response.data
      })
  }
}

export const profileAPI = {
  setUserProfile: (userId) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    .then(response => {
      return response.data
    })
  }
}