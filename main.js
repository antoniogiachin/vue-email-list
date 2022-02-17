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

            // Per dieci volte Get sulla API di generazione mail casuale e push della stessa nell'array mails
            for(let i=0; i <10; i++){

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                                        
                    this.mails.push(response.data.response);
    
                });

            };

        }

    }

);