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

// MILESTONE 2
// Visualizzare a fianco ad ogni item una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: 
// cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, 
// che quindi viene aggiunto alla lista dei todo esistenti.

// 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente 
// (se done era uguale a false, impostare true e viceversa)

Vue.createApp({
    data() {
        return {
            lastId: 4,
            newTodoItem: {
                text: "",
                done: false,
            },
            todoList: [
                {
                    id: 1,
                    text: "Studiare Js",
                    done: false,
                },
                {
                    id: 2,
                    text: "Preparare la torta",
                    done: true,
                },
                {
                    id: 3,
                    text: "Fare la spesa",
                    done: true,
                },
                {
                    id: 4,
                    text: "Portare fuori il cane",
                    done: false,
                },
            ]
        }
    },
    methods: {
        addTodoItem() {
            const itemClone = { ...this.newTodoItem, id: ++this.lastId };
            this.todoList.push(itemClone);
        },
        deleteTodoItem(itemId) {
            console.log(itemId)
            let indexToDelete = this.todoList.findIndex((todoItem) => todoItem.id === itemId);
            console.log(indexToDelete)

            this.todoList.splice(indexToDelete, 1);
        },
    }
}).mount("#app")







