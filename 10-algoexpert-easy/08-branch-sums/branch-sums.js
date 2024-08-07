function branchSums(root) {
  const sums = []
  calculateBranchSums(root, 0, sums)
  return sums
}

function calculateBranchSums(node, runningSum, sums) {
  if (!node) return

  const newRunningSum = runningSum + node.value
  if (!node.left && !node.right) {
    sums.push(newRunningSum)
    return
  }

  calculateBranchSums(node.left, newRunningSum, sums)
  calculateBranchSums(node.right, newRunningSum, sums)
}

module.exports = branchSums
