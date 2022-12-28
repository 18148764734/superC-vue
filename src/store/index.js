import { createStore } from "vuex";
const store =  createStore({
    state(){
        return {
            token:""
        }
    },
    mutations:{
        setToken(state,token){
            state.token  = token
        },
        
    },
    actions:{
        loginok({commit},token){
            commit('setToken',token)
        }
    }
})

export default store