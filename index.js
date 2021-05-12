const inOrder = node => {
  if(node.left){
    inOrder(node.left)
  }
  console.log(node.data)
  if(node.right){
    inOrder(node.right)
  }
}

const findOrAdd = (root, newNode) => {
  if (root.data === newNode.data) {
    return true
  }
  if (newNode.data <= root.data) {
    return root.left ? findOrAdd(root.left, newNode) : root.left = newNode
  } else {
    return root.right ? findOrAdd(root.right, newNode) : root.right = newNode
  }
}

const max = node => {
  return node.right ? max(node.right) : node 
}

const min = node => {
  return node.left ? min(node.left) : node
}