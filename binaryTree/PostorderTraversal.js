/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return [];
  let vals = [];
  if (root.left) vals.push(...postorderTraversal(root.left));
  if (root.right) vals.push(...postorderTraversal(root.right));
  vals.push(root.val);
  return vals;
};
