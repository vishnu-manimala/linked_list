

//creating a node with value and next pointer
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
//creating a linked list
class Linkedlist {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //check whether the list is emplt or not!!
    isEmpty(){
        return this.size === 0;
    }

    //to retrieve the size of the linked list
    getSize(){
        return this.size;
    }

//function to append a node to the front. same unshift in array
    prepend(value){
        const node = new Node(value);
       if( this.isEmpty()){
        this.head = node;
       }else{
        node.next = this.head;
        this.head = node;
       }
       this.size++;
    }


    //add node to the end of the list
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head=node;
        } else {
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next=node;
        }
        this.size++;
    }


    //insert a node at a given index
    insert(value, index){
        if(index<0 ||index>this.size){
            console.log("invalid index");
            return;
        }
        if(index===0){
            this.prepend(value);
            return;
        }else {
        const node = new Node(value);
        let prev = this.head;
       for(let i=0;i<index-1;i++){
           prev=prev.next;
        }
        node.next=prev.next;
        prev.next = node;
        this.size++;
    }
    }

    //Insert a node  before a node with x data
       insertBefore(value, x){
            const node = new Node(value);
            if(this.isEmpty()){
                console.log("list is empty ");
                return null;
            }
            if(this.head.value === x){
                node.next = this.head;
                this.head = node;
                this.size++;
                return this.size;
            }else {
                let prev = this.head;
                while(prev.next && prev.next.value !== x){
                    prev = prev.next;
                }
                if(prev.next){
                    node.next = prev.next;
                    prev.next = node;
                    this.size++;
                    return this.size;
                }
                return null;
            }
        }

     //Insert a node  after a node with x data
     insertAfter(value, x){
        const node = new Node(value);
        if(this.isEmpty()){
            console.log("list is empty ");
            return null;
        }
        
        if(this.head.value === x){
            node.next = this.head.next;
            this.head.next=node;
            this.size++;
            return this.size;
        } else {
            let prev = this.head;
            while(prev && prev.value !== x){
                prev = prev.next;
            }
            if(prev){
                node.next = prev.next;
                prev.next = node;
                this.size++;
                return this.size;
            }
            return null;
        }
     }

    //remove a node from a given index
    remove(index){
        if(index<0 || index>=this.size){
            console.log("invalid index");
            return;
        }
        let removedHead;
        if(index===0){
            removedHead = this.head;
            this.head = this.head.next;
        }else {
            let  prev = this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next;
            }
            let removedHead = prev.next;
            prev.next = removedHead.next;
           
        }
        this.size--;
       // return removedHead;    
    }


    // remove a node which contains the given value
    removeValue(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value === value){
           this.head = this.head.next;
           this.size--;
           return value;
        }
        else{
                let prev = this.head;
                while(prev.next && prev.next.value !== value){
                    prev= prev.next;
                }
                if(prev.next){
                let removHead = prev.next;
                prev.next=removHead.next;
                this.size--;
                return value;
                }
                return null;
        }
        
    }


    //print the linkedlist
    printList(){
        if(this.isEmpty()){
            console.log("the list is empty  ");
        } else {
            let current = this.head;
            let listValues = '';
            while(current){
                listValues+=` ${current.value} `;
                // console.log(current.value);
                current = current.next;
            }
            console.log(listValues);
        }
    }

    //print in nreverse order
    printReverseList(){
        if(this.isEmpty()){
            console.log("List is empty ");
            return null;
        } else {
            let current = this.head;
            let order = [];
            while(current){
                order.push(current.value);
                current=current.next;
            }
            while(order.length >0){
                console.log(order.pop());
            }
        }
         
    }


    //Write a program to remove duplicates in a sorted singly linked list

    duplicateElimanation(){
        if(this.isEmpty()){
            console.log("list is empty ");
            return null;
        } else{
            let current = this.head;
          
           
            while (current && current.next) {
                if(current.value === current.next.value) {
                  current.next = current.next.next;
                } else {
                  current = current.next;
                }
            }
            //console.log(uniq);
        }
    }


    //linear Search

    listSearch(key){
        if(this.isEmpty()){
            console.log("list is empty ");
            return -1;
        }else {
            let link = this.head;
            let i=0;
            while(link){
                if(link.value === key){
                    console.log("key found at: "+ i);
                    return;
                } else {
                    i++;
                    link = link.next;
                }
                
            }
            console.log("not found");
        }
    }


    //Sort
    listSortAscending(){
        if(!this.head || !this.head.next){
            return null;
        }else {
            let link = this.head;
            while(link.next){
                let nextnode = link.next;
                while(nextnode){
                    if(link.value > nextnode.value){
                        let temp = link.value;
                        link.value = nextnode.value;
                        nextnode.value = temp;
                    }
                    nextnode = nextnode.next;
                }
                link = link.next;
            }
            this.printList();
        }

    }

    listSortDescending(){
        if(!this.head || !this.head.next){
            return null;
        }else {
            let link = this.head;
            while(link.next){
                let nextnode = link.next;
                while(nextnode){
                    if(link.value < nextnode.value){
                        let temp = link.value;
                        link.value = nextnode.value;
                        nextnode.value = temp;
                    }   
                    nextnode = nextnode.next;
                }
                link = link.next;
            }   
            this.printList();
        }
    }
}
console.log("creating a singly linkedlist ");
const list = new Linkedlist();//creating a singly linked list
list.printList();
console.log("list is empty?",list.isEmpty());
console.log("list size : ",list.getSize());
//converting an array to linkedlist
let arr = [1,2,3,4,5,6,7];
arr.forEach(element => {
        list.append(element); 
});
console.log("Array to linkedlist ");
list.printList();
console.log(" ");

//Delete node with the value specified
console.log("Delete node with the value : 5");
list.removeValue(5);
list.printList();
console.log(" ");

//Insert a node after & before a node with x data
console.log("Insert a node with value 9 before a node with 4 data ");
list.insertBefore(9,4);
list.printList();
console.log(" ");

console.log("Insert a node with value 0 after  a node with 4 data");
list.insertAfter(0,4);
list.printList();
console.log(" ");

//Print all elements by order & reverse by order
console.log(" Print all elements by order");
list.printList();
console.log(" ");

console.log(" Print all elements by reverse order");
list.printReverseList();

//Write a program to remove duplicates in a sorted singly linked list

const list1 = new Linkedlist();
//converting an array to linkedlist
let arr2 = [1,2,3,3,5,5,6,7];
arr2.forEach(element => {
        list1.append(element); 
});
console.log("Array to linkedlist ");
list1.printList();
console.log(" ");
list1.duplicateElimanation();
list1.printList();


//search
console.log("Search :- ");
list1.listSearch(6);

//sorting
console.log("");
console.log("List");
list.printList();
console.log("");
console.log("Ascending order sorting ");
list.listSortAscending();


console.log("Descending order sorting ");
list.listSortDescending();

// list.prepend(10);
// list.append(23);

// list.printList();
// list.insert(98,0);
// list.printList();
// list.prepend(15);
// list.append(33);
// list.append(25);
// list.insert(67,4);
// console.log("list is empty?",list.isEmpty());
// console.log("list size : ",list.getSize());
// list.printList();
// list.remove(0);
// list.printList();
// list.remove(4);
// list.printList();
// console.log("list is empty?",list.isEmpty());
// console.log("list size : ",list.getSize());
// list.removeValue(98);
// list.printList();
// console.log("list is empty?",list.isEmpty());
// console.log("list size : ",list.getSize());
// console.log(list.removeValue(8));
// list.printList();
