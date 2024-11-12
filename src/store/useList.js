import { create } from "zustand";
import axios from "axios";
import { apiUrl } from "../config/config";

export const useList = create((set,get) => ({
    data:[],
    get: async () => {
        try {
            let {data} = await axios.get(apiUrl + "/api/to-dos")
            set({data:data.data})
        } catch (error) {
            console.error(error);
        }
    },
    idxDel:null,
    setIdxDel: (value) => set({idxDel:value}),
    del: async (id) => {
        try {
            await axios.delete(apiUrl + "/api/to-dos?id=" + id) 
            get().get()
        } catch (error) {
            console.error(error);
        }
    },
    idxImg: null,
    setIdxImg: (value) => set({idxImg: value}),
    delImg: async(id) => {
        try {
            await axios.delete(apiUrl + "/api/to-dos/images/" + id)
            await get().get()
        } catch (error) {
            console.error(error);
        }
    },

    add: async (obj) => {
        try {
            await axios.post(apiUrl + "/api/to-dos",obj)
            await get().get()
        } catch (error) {
            console.error(error);
        }
    },
    addObj: null,
    setAddObj: (value) => set({addObj: value}),
    idxC:null,
    setIdxC: (value) => set({idxC: value}),
    idxC2: null,
    setIdxC2: (value) => set({idxC2: value}),
    check: async (el,id) => {
        try {
            await axios.put(apiUrl + "/completed?id=" + id, {
                id:id,
                isCompleted: !el.isCompleted,
                name:el.name
            })
            await get().get()
        } catch (error) {
            console.error(error);
        }
    },
    editModal: false,
    setEditModal: () => set(state => ({editModal: !state.editModal})),
    dataByid: [],
    getByid: async (id) => {
        try {
           let {data} = await axios.get(apiUrl + "/api/to-dos/" + id)
           set({dataByid: data.data})
        } catch (error) {
            console.error(error);
        }
    },
    byId: null,
    setById: (value) => set({byId: value}),
    byidModal: false,
    setByidModal: () => set(state => ({byidModal: !state.byidModal})),
    addImg: async (id,obj) => {
        try {
            await axios.post(apiUrl + "/api/to-dos/" + id + "/images",obj) 
            await get().get()
        } catch (error) {
            console.error(error);
        }
    },
    addImgIdx: null,
    setAddImgIdx: (value) => set({addImgIdx: value}),
}))