---
title: BUG JOURNAL
---

## BUG CATEGORIES

  - Rule-Breaking
  - OBOE (See: https://www.wikiwand.com/en/Off-by-one_error)

## 10/12/2023 - Week 10 - Day 01 (Long Version Bug Report)

  **Description:**

  **Code:**

  ```js
  
  ```

  **Category:**


  **Avoidance Strategy**



## 09/12/2023 - Week 09 - Day 05 (Short version Bug Report)

  I wrote `if ( str.length > 0 && str.length < 16)` while I meant `if ( str.length > 0 && str.length <= 16 )`. (Category: OBOE)


## Search Engine Project

### I was trying to create an element in a wrong way

```
      const detail1 = document.querySelector('#genre1');
          const list = detail1.createElement('li');
```
* createElement is a method of document, not HTMLElement. You should use document.createElement to create an element. *

### I was using a function in a wrong way and then found out that I can pass parameter to reduce repetions in my function

* My function Before *

```
  const fictionList = ['Mystery', 'Thriller', 'Romance', 'Historical Fiction', 'Literary Fiction'];
  const nonFictionList = ['Biography', 'Memoir', 'Self-help', 'True Crime', 'Business/Finance'];
  const fantasyListt = ['Epic Fantasy', 'High Fantasy', 'Low Fantasy', 'Magical Realism', 'Urban Fantasy'];
  // Items in the list Function
  function addItem () {
      for (let i=0; i < fictionList.length; i++) {
          console.log(fictionList[i]);
          const list = document.createElement('li');
          list.innerHTML += `<li>${fictionList[i]}</li>`;
          list1.appendChild(list);
      }

      for (let i=0; i < nonFictionList.length; i++) {
          console.log(nonFictionList[i]);
          const list = document.createElement('li');
          list.innerHTML += `<li>${nonFictionList[i]}</li>`;
          list2.appendChild(list);
      }

      for (let i=0; i < fantasyListt.length; i++) {
          console.log(fantasyListt[i]);
          const list = document.createElement('li');
          list.innerHTML += `<li>${fantasyListt[i]}</li>`;
          list3.appendChild(list);
      }
  }

```

* My function After *
```
  function addItem (ulList, arrayList) {
    for(let i=0; i < arrayList.length; i++){
        const list = document.createElement('li');
        list.textContent = arrayList[i];
        ulList.appendChild(list)
    }
  }
  addItem(list1, fictionList);
```

### I was trying to create a function that loops inside an array and return the elements using forEach the wrong way

```
  function loopInList (array) {
      array.forEach(element => {
          return element;
      });
  }
```
While I could have created an array inside the function to store the elements in the array
```
  function loopInList (array) {
      const newArray = [];
      array.forEach(element => {
          newArray.push(element)
      });
      return newArray;
  }
```

### I could use spread operator to 3 arrays into one array instead of using for loop 3 times
```
function loopInList (array1, array2, array3) {
    const newArray = [];
    array1.forEach(element => {
        newArray.push(element)
    });
    array2.forEach(element => {
        newArray.push(element)
    });
    array3.forEach(element => {
        newArray.push(element)
    });
    return newArray;
}
```
* After *

```
  function loopInList (array1, array2, array3) {
      return [...array1, ...array2, ...array3];
  }
```

### Trying to change the color of an item in the fictionList array by accessing its style.color property, but this won't work because fictionList is just an array of strings, not HTML elements.

```
  for (let item=0; item < fictionList.length; item++) {
      if(fictionList[item].toLowerCase().includes(inputBox.value)) {
          counter++;
          fictionList[item].style.color = magenta;
      }
  }
```

### To make text white when it no longer matches what is in the input box
```
  if(inputValue === '') {
              listA.forEach(i => {
                  i.style.color = 'white';
              });
              counter = 0;
  }
```
* All I had to do is to make the text white after the input event lister has happened and after so that when it is empty it becomes white again(but that be in an if loop)

### Got an error while pushing on githHub
#### Error: 
```
C:\Users\AIONEM.net\Desktop\wdx-side-projects\Search-Engine>git push -u origin main
error: src refspec main does not match any
error: failed to push some refs to 'github.com:NellyLaurene/WDX-180-SearchEngine-project.git'
```
* The message indicates that there is no main branch yet, as the initial commit was never created *
* I added the files, commited and pushed again don't why it didn't work the first time but then I did it again and it worked *