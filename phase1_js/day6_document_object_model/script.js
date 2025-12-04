//DOM manipulation

document.body.style.backgroundColor = "lightblue";
document.body.style.fontFamily = "Arial, sans-serif";

const header = document.createElement("h1");
header.textContent = "Welcome to DOM Manipulation!";
header.style.textAlign = "center";
document.body.appendChild(header);

const paragraph = document.createElement("p");
paragraph.textContent = "This is an example of how to manipulate the DOM using JavaScript.";
paragraph.style.fontSize = "18px";
paragraph.style.margin = "20px";
document.body.appendChild(paragraph);

const button = document.createElement("button");
button.textContent = "Click Me!";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.addEventListener("click", () => {
    alert("Button Clicked!");
});
document.body.appendChild(button);

const list = document.createElement("ul");
const items = ["Item 1", "Item 2", "Item 3"];
items.forEach(itemText => {
    const listItem = document.createElement("li");
    listItem.textContent = itemText;
    list.appendChild(listItem);
});
document.body.appendChild(list);        

//CSS manipulation example
const style = document.createElement('style');
style.textContent = `
    body {
        background-color: #f0f0f0;
        color: #333;
    }
    h1 {
        color: #007BFF;
    }
    p {
        line-height: 1.6;
    }
    button {
        background-color: #28a745;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover {              
        background-color: #218838;
    }                   
`;
document.head.appendChild(style);       
