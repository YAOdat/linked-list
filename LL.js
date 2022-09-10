'use strict'


// Insert at the beginning of LL
// Append to the end if the LL
// Delete the middle element from the LL
// Insert into a specific location into the LL
// Make sure to create a tests file to test if your code works without problem .


const Node = require('./node');


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert at the beginning of the LL
    insertFirst(value) {
        this.head = new Node(value, this.head);
        this.size++;
      }

    // Add nodes to the end of the LL.

      append(value) {
        let newNode = new Node(value);
        let current;
    
        // If empty
        if (!this.head) {
          this.head = newNode;
        } else {
          current = this.head;
    
          while (current.next !== null) {
            current = current.next;
          }
    
          current.next = newNode;
        };
    
        this.size++;
      }



    // Insert a node into a specific location

    insertInto(value, location) {
        //  If location is out of range
        if (location > 0 && location > this.size) {
          this.append(value)
          return;
        }
       
  
        // If first location
        if (location === 0) {
          this.insertFirst(value);
          return;
        } else {
    
        const node = new Node(value);
        let current, previous;
    
        current = this.head;
        let count = 0;
    
        while (count < location) {
          previous = current; // the node before location
          count++;
          current = current.next; // the node after location
        }
      }
        node.next = current;
        previous.next = node;
    
        this.size++;
      }
    

   
    // To delete the middle node
    deleteMiddle() {
        if(!this.head) {
            return null;
        } if (this.head.next == null){
            this.head = null;
            return null;
        } else {
            // console.log(this.size)
            // console.log(Math.ceil(this.size/2))
            let counter = Math.ceil(this.size/2)
            
            let current = this.head

            for (let i=0; i<counter-2; i++){
                current = current.next;
            }
            current.next = current.next.next;
            this.size --;
                
        }
    }

};

module.exports = LinkedList;
