class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(key, val) {
    const newNode = new Node(key, val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
    }
    return newNode;
  }

  remove(node) {
    if (!node.next && !node.prev) {
      // only one node in the LL
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else if (!node.next) {
      // it's the tail node
      const newTail = node.prev;
      newTail.next = null;
      this.tail = newTail;
    } else if (!node.prev) {
      // it's the head node
      const newHead = node.next;
      newHead.prev = null;
      this.head = newHead;
    } else {
      // it's a middle node
      const next = node.next;
      const prev = node.prev;
      prev.next = next;
      next.prev = prev;
    }
    this.length--;
  }
}

class LRUCache {
  constructor(capacity) {
    this.DLL = new DoublyLinkedList();
    this.cache = {};
    this.capacity = capacity;
  }

  get(key) {
    if (!this.cache[key]) return -1;
    const node = this.cache[key];
    this.DLL.remove(node);
    this.cache[key] = this.DLL.push(node.key, node.val);
    return node.val;
  }

  put(key, value) {
    if (this.cache[key]) this.DLL.remove(this.cache[key]); // if key already exists, remove so we can append to end of LL
    this.cache[key] = this.DLL.push(key, value);
    if (this.DLL.length > this.capacity) {
      const oldHead = this.DLL.head;
      delete this.cache[oldHead.key];
      this.DLL.remove(oldHead);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
