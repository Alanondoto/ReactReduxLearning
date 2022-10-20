import axios from "axios";
import React from "react";

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
  unfollowUser: (u) => {
    return instance.delete(`follow/${u.id}`)
      .then(response => {
        return response.data
      })
  },
  followUser: (u) => {
    return instance.post(`follow/${u.id}`)
      .then(response => {
        return response.data
      })
  },
  authMe: () => {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
      .then(response => {
        return response.data
      })
  }
}