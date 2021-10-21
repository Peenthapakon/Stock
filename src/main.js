import { createApp } from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


function name(key) {
    return {
        position: "top-end",
        icon: `${key}`,
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
        }
}
function rs(key) {
        return key
    }
createApp(App).use(VueSweetalert2,name(rs),rs).mount('#app')
