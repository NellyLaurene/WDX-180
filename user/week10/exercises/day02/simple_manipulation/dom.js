/**
 * 30 Days Of JavaScript: Document Object Model(DOM) Exercise
 * 
 * Complete the challenges found below:
 * 
 * 1. Get the first paragraph by using **_document.querySelector(tagname)_**
 * 2. Get each of the the paragraph using **_document.querySelector('#id')_**
 * 3. Get all the p as nodeList using **_document.querySelectorAll(tagname)_**
 * 4. Set id and class attribute for all the paragraphs using different attribute setting methods
 */

// INSERT YOUR CODE HERE
const firstParagraph =  document.querySelector('p').textContent;
console.log(firstParagraph);

const paragraph1 = document.querySelector('.paragraph1')
const paragraph2 = document.querySelector('.paragraph2')
const paragraph3 = document.querySelector('.paragraph3')
const paragraph4 = document.querySelector('.paragraph4')

const allParagraph = document.querySelectorAll('p');

allParagraph.forEach(function(paragraph, index){
    paragraph.setAttribute('id', `par${index + 1}`);
    
    paragraph.className=`class${index+1}`;

    console.log(`paragraph ${index+1}: ID: ${paragraph.getAttribute('id')}, class: ${paragraph.getAttribute('class')}`)
})
