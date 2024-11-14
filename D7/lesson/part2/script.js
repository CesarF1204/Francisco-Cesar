// Accessing parent, child, and sibling elements using DOM traversal methods
// Access the parent element of a specific element
const container = document.getElementById('container');
console.log('container.parentNode :>> ', container.parentNode);

// Access the child elements of a specific element
const paragraphs = container.children;
console.log('paragraphs :>> ', paragraphs);

// Access the first child element
const firstParagraph = container.firstElementChild;
console.log('firstParagraph :>> ', firstParagraph);

// Access the next sibling element
const secondParagraph = firstParagraph.nextElementSibling;
console.log('secondParagraph :>> ', secondParagraph);

// Navigating the DOM tree using properties like parentNode, children, and nextSibling
console.log('secondParagraph.parentNode :>> ', secondParagraph.parentNode);

// Access the child elements of a specific element using childrenn property
const contentDiv = document.querySelector('.content');
const nestedParagraph = contentDiv.children[0];
console.log('nestedParagraph :>> ', nestedParagraph);

// Access the previous sibling element using previousSibling property
console.log(nestedParagraph.previousSibling); // Output: #text (line break)

// Access the next sibling element using nextSibling property
console.log(nestedParagraph.nextSibling); // Output: null