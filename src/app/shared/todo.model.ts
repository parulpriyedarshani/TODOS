export class Todo {
 // On putting it inside the constr. i can choose not to give the value of complete
 // everytime I use it.
    constructor(
        public text: string,
        public completed: boolean = false
    ) { }
}