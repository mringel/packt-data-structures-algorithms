function BinarySearchTree() {

  var Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  var root = null;

  //helper function for finding minimum node
  var minNode = function(node) {
    if (node) {
      while (node && node.left != null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  };

  // helper function to find the max node
  var maxNode = function(node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  };

  //helper function for post-order traversal
  var postOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };

  //helper function for pre order traversal
  var preOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  //helper function for in order traversal
  var inOrderTraverseNode = function(node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback)
    }
  };

  // helper function to insert a node
  var insertNode = function(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  // helper function for searching for a values
  var searchNode = function(node, key) {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return searchNode(node.left, key);
    }
    if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      return true;
    }
  };

  this.insert = function(key) {

    var newNode = new Node(key);

    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  this.search =  function(key) {
    return searchNode(root, key);
  };

  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback);
  };

  this.preOrderTraverse = function(callback) {
    preOrderTraverseNode(root, callback);
  };

  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback);
  };

  this.min = function() {
    return minNode(root);
  };

  this.max = function() {
    return maxNode(root);
  };

  this.remove = function(key) {

  };
}

var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

function printNode(value){ //{6}
  console.log(value);
}
//tree.inOrderTraverse(printNode);
//tree.preOrderTraverse(printNode);
//tree.postOrderTraverse(printNode);

tree.search(13);
