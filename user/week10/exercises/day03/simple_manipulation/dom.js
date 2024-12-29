/**
 * 30 Days Of JavaScript: Document Object Model(DOM) Exercise
 * 
 * Complete the challenges found below:
 * 
 * 1. Get the first paragraph by using **_document.querySelector(tagname)_**
 * 2. Get each of the the paragraph using **_document.querySelector('#id')_**
 * 3. Get all the p as nodeList using **_document.querySelectorAll(tagname)_**
 * 4. Set id and class attribute for all the paragraphs using different attribute setting methods
 * 
 * PART 2
    * Loop through the nodeList and get the text content of each paragraph
    * Set a text content to paragraph the fourth paragraph,Fourth Paragraph
    * Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
    * Select all paragraphs and loop through each element and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
    * Set text content, id and class to each paragraph
 */

// INSERT YOUR CODE HERE
const firstParagraph =  document.querySelector('p').textContent;
//console.log(firstParagraph);

const paragraph1 = document.querySelector('.paragraph1')
const paragraph2 = document.querySelector('.paragraph2')
const paragraph3 = document.querySelector('.paragraph3')
const paragraph4 = document.querySelector('.paragraph4')

const allParagraph = document.querySelectorAll('p');
allParagraph[3].textContent = 'Fourth Paragraph';

allParagraph.forEach(function(paragraph, index){
    // paragraph.setAttribute('id', `par${index + 1}`);
    
    // paragraph.className=`class${index+1}`;

    // console.log(`paragraph ${index+1}: ID: ${paragraph.getAttribute('id')}, class: ${paragraph.getAttribute('class')}`)


    console.log(paragraph.textContent);

    paragraph.style.background = 'pink';
    paragraph.style.border = '2px';
    paragraph.style.fontSize = '24px';
    paragraph.style.color = 'gray';
    paragraph.style.fontFamily = 'Arial, sans-serif';

    if(index === 0 || index === 2) paragraph.style.color = 'green'
    if(index === 1 || index === 3) paragraph.style.color = 'red'

    paragraph.setAttribute('id', `par${index + 1}`);
    paragraph.className=`class${index+1}`;
    paragraph.textContent = "New Paragraph"

})



