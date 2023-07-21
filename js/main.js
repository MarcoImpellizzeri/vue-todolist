"use strict"

// Rifare l’esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da tre proprietà:
// - id, un numero progressivo per indicare in modo univoco l’elemento
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no


// MILESTONE 0
// Creare un array con dei dati di partenza

// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

Vue.createApp({
    data() {
        return {
            newTodoItem: {
                id: "",
                text: "",
                done: false,
            },
            todoList: [
                {
                    id: 1,
                    text: "first todo",
                    done: false,
                },
                {
                    id: 2,
                    text: "Second todo",
                    done: true,
                },
            ]
        }
    },
    methods: {
        addTodoItem() {
            const itemClone = {...this.newTodoItem};
            this.todoList.push(itemClone);
        }
    }
}).mount("#app") 

// MILESTONE 2
// Visualizzare a fianco ad ogni item una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: 
// cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, 
// che quindi viene aggiunto alla lista dei todo esistenti.

// 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente 
// (se done era uguale a false, impostare true e viceversa)





