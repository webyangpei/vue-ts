import Vue from 'vue';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
// import { Loading } from 'element-ui';
// import Storage from './storage'
import store from '@/store';

// const https = require('https')
// import checkToken from './utils/checkToken'
// const qs = require('qs');

const service = axios.create({
    // baseURL: 'http://localhost:3008/',
    baseURL: '/api/',
    withCredentials: true, // 允许携带cookie
    timeout: 5000,
});

// request 拦截
service.interceptors.request.use((config: AxiosRequestConfig) => {
    console.log(config, process.env.BASE, 999)
    return config;
}, (error: any) => {
    return Promise.reject(error);
});

service.interceptors.response.use((response: AxiosResponse) => {
    console.log(response, 'result');
    return response.data;
}, (error: AxiosError) => {
    return error;
});


export default service;
