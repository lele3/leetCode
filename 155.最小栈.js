/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

    push(x) -- 将元素 x 推入栈中。
    pop() -- 删除栈顶的元素。
    top() -- 获取栈顶元素。
    getMin() -- 检索栈中的最小元素。
    示例:

    MinStack minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.getMin();   --> 返回 -3.
    minStack.pop();
    minStack.top();      --> 返回 0.
    minStack.getMin();   --> 返回 -2.

 * [155] 最小栈
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    // this.stack.push(x)
    const l = this.stack.length
    this.stack[l] = x
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // this.stack.pop()
    const l = this.stack.length
    this.stack.length = l - 1
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const l = this.stack.length
    return this.stack[l - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // return Math.min(...this.stack)
    // console.log(this.stack)
    return this.stack.reduce((min, cur) => (min < cur ? min : cur))
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/*
  思路
  这个题本来打算直接用数组的方法，求最小值用Math.min，也就是注释的代码 但是执行时间很长

  之后最小值改用reduce去求，发现执行时间还是很长

  ✔ Accepted
  ✔ 18/18 cases passed (192 ms)
  ✔ Your runtime beats 55.18 % of javascript submissions
  ✔ Your memory usage beats 38.1 % of javascript submissions (44.3 MB)


  之后看过别人的代码，发现差别就在求最小值上
  他们会提前声明一个最小值，每次push 和pop去更新这个最小值
  之后getMin直接返回这个最小值

 */
