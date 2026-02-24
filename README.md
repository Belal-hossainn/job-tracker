1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?  
Ans:  We use getElementById to get a specific element by using unique ID. It is fast and performance boosting. We get null if there is no such id.  We use getElementsByClassName when need a collection of elements sharing a common class. It returns a HTML Collection.  We use querySelector when we only need the first element matching a specific CSS selector (e.g., tags, classes, and attributes etc). It returns a element object marching first elements or null if no matches found.  We querySelectorAll when we need to select all elements matching a specific CSS selector it returns a Nodelist containing all matches elements or an empty Nodelist if no matches found. 

2. How do you create and insert a new element into the DOM? 
Ans: To create the element in DOM we use ‘document.createElement()’ and then insert it into an parent element using methods ‘appendChild() or append()’  
For example:  create a div: const div = document.createElement("div"); 
Add element inside div: div.innerHtml = "<p>Hello world</p>"; 
Insert it into DOM: document.body.appendChild(div);  

3. What is Event Bubbling? And how does it work? 
Ans: Event Bubbling is a concept in the DOM . It happens when an element receives an event, and that event transmitted to its parent and ancestor elements in the DOM tree until it gets to the root element.  
For example:  
<body>   
<div id="parent">     
<button id="child">Click Me</button>   
</div> 
</body> 
 Here, when someone click the button, the event first trigged into the button. Then it bubbles up to its immediate parent “div”. Then to the <body> and finally to the document root. It helps in event delegation.   

4. What is Event Delegation in JavaScript? Why is it useful? 
Ans: Event delegation is a process in JavaScript where a Parent element handles events for its child elements. This works because of events in JavaScript bubble up from the target element to its ancestors. When an event, such as a click, occurs on a child element, it "bubbles up" through its ancestors. The parent element's listener captures this event as it bubbles up the DOM tree. Inside the event handler, we can use the event.target property to identify which specific child element initially triggered the event and react accordingly. 
Why it useful:  
1. Saves memory – Only one event listener for many child elements. 
2. Works for new elements – Automatically handles elements added later. 
3. Cleaner code – All similar events handled in one place. 
4. Uses event bubbling – Listens on parent, catches events from children. 

5.  What is the difference between preventDefault() and stopPropagation() methods? 
Ans: event.preventDefault(): The event.preventDefault() method is a function in JavaScript that stops the browser from executing the default action associated with a specific event.
 For example: document.querySelector('a').addEventListener('click', function(e) {     e.preventDefault(); // stops the page from opening     
alert('Page won’t open!');});  
Here, This code listens for a click on a link (<a>), and when clicked, it prevents the browser’s default action of opening the link. Instead, it shows an alert.  
stopPropagation(): stopPropagation() is a JavaScript method that stops an event from moving up to parent elements. For example, if a button is inside a div, clicking the button won’t trigger the div’s click event if we use stopPropagation() mathodes.   
So, we say that,  preventDefault() methodes stops the browser’s default action (like following a link or submitting a form). On the other hand, stopPropagation() methods stop the event from reaching parent elements.  