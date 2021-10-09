let clear_local = () => { // Clears local (Only for production) 
    localStorage.clear();
    window.location.reload(true);
}

let app = new Vue ({
    /* - element id - */
    el: '#app',

    /* - variables of the app - */
    data: {
        exercises: [],
        muscle_groups: [],

        user_schedule: localStorage.user_schedule || {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: []
        }
    },

    /* - on mounting in start up cycle (see vue docs) - */
    mounted: function () {
        // fetches data from json and saves it
        fetch('src/data/workout.json')
            .then(r => r.json())
            .then(data => {
                this.exercises = data['exercises'];
                this.muscle_groups = data['muscle_groups'];
        })
    },

    /* - functions that the program uses - */
    methods: {

    }
})
