// In a priority queue elements are added and removed based on a priority, like a waiting room at an emergency room.

// Two options, set the priority and add the element at the correct position, or queue the elements as they are added and remove according to priority.  In this example, we wadd the elements at the correct position so they can be dequeued by default.

function PriorityQueue() {

  var items = [];

  function QueueElement (element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function(element, priority) {
    var queueElement = new QueueElement(element, priority);

    if (this.isEmpty()) {
      items.push(queueElement);
    } else {
      var added = false;
      for (var i = 0; i < items.length; i++) {
       if (queueElement.priority < items[i].priority) {
         items.splice(i,0,queueElement);
         added = true;
         break;
       }
      }
      if (!added) {
        items.push(queueElement);
      }
    }
  };

  this.dequeue = function() {
    return items.shift();
  };

  // helper functions
  this.front = function() {
    return items[0];
  };

  this.isEmpty = function() {
    return items.length === 0;
  };

  this.size = function() {
    return items.length;
  };

  this.print = function() {
    console.dir(items);
  };

}
