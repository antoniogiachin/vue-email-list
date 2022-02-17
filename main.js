// Inizializzo app Vue
const app = new Vue (

    {
        el: '#app',

        data: {
            mails : [],
        },

        methods: {

        },

        mounted(){

            // Get sull'api delle mail randomiche
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {

                // Ciclo per dieci volte l'api e pusho il risultato all'interno dell'array mails
                for(let i=0; i <10; i++){
                    this.mails.push(response.data.response);
                }


            });
        }

    }

);