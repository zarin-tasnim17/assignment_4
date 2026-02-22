1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:getElementById and querySelector return a single element one the other hand getElementsByClassName and querySelectorAll return collections

2. How do you create and insert a new element into the DOM?
ans:document.createElement() to define the element and a method like .appendChild()(note:to add the last child) or .prepend()(note:to add the first child) to attach it to a parent node.

3. What is Event Bubbling? And how does it work?
ans:Event bubbling is a phase of event propagation where an event triggers on the deepest target element first and then bubbles up through its ancestors in the DOM tree.

4. What is Event Delegation in JavaScript? Why is it useful?
ans:Event delegation is a pattern where a single event listener is attached to a parent element to manage events for its children by utilizing event bubbling to identify which child was triggered.
It is useful because it Conserves memory by using one listener instead of dozens or hundreds and automatically works for new elements added to the DOM without needing to re-bind listeners.

5. What is the difference between preventDefault() and stopPropagation() methods?
ans:preventDefault() stops the browser's default action , while stopPropagation() stops the event from bubbling up to parent elements.
