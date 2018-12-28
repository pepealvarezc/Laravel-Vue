import Axios from "axios";

var urlUsers = 'https://jsonplaceholder.typicode.com/users';

new Vue({
    el: '#main',
    created: function() {
        this.getUsers();
    },
    data: {
        lists: []
    },
    methods: {
        getUsers: function() {
            Axios.get(urlUsers).then( response => {
                this.lists = response.data
            });
        }
    }
});