import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        menuItems: {}
    },
    getters:{

    },
    mutations:{
        //change state
        setMenuItems(state, data){
            state.menuItems = data
        },
        removeMenuItem(state, data){
            state.menuItems.forEach((item, index) => {
                if(item == data){
                    state.menuItems.splice(index, 1)
                }
            });
        },
        pushToMenuItems(state, data){
            state.menuItems.push(data)
        }
    },
    actions:{
        
    }
})