const start = async () =>{
    let algorithmValue= Number(document.querySelector(".algo-options").value);
    let speedValue=Number(document.querySelector(".speed-options").value);
    if(speedValue === 0) speedValue=1;
    if(algorithmValue===0) algorithmValue=1;

    let algorithm = new sortAlgorithms(speedValue);

    if(algorithmValue === 1) await algorithm.BubbleSort();
    if(algorithmValue === 2) await algorithm.SelectionSort();
    if(algorithmValue === 3) await algorithm.InsertionSort();
    if(algorithmValue === 4) await algorithm.MergeSort();
    if(algorithmValue === 5) await algorithm.QuickSort();
    
}

const render = async () =>{
    let algorithmValue = Number(document.querySelector(".algo-options").value);
    await renderList();
    
}

const renderList = async ()=>{
    let sizeValue = Number(document.querySelector(".size-options").value);
    await clear();
    let list = await randomList(sizeValue);
    const arrayItem = document.querySelector(".array");
    console.log(arrayItem);
    console.log(list);
    for(const element of list){
        const node = document.createElement("div");
        node.className="bar";
        node.setAttribute("value", String(element));
        node.style.height= `${3.8 * element}px`;
        arrayItem.appendChild(node);
    }
    console.log(list)
}

const renderArray = async(sorted) =>{
    let sizeValue = Number(document.querySelector(".size-options").value);
    await clear();
    let list = await randomList(sizeValue);
    //When you pass the function (a, b) => a - b, 
    // you’re telling the .sort() function to sort the numbers in ascending order.
    if(sorted)list.sort((a,b)=> a-b);
    const arrayNode = document.querySelector(".array");
    const divNode= document.createElement("div");
    divNode.className="s-array";

    for(const element of list){
        const dnode = document.createElement("div");
        dnode.className="s-bar";
        dnode.innerText=element;
        divNode.appendChild(dnode);
    }
    arrayNode.appendChild(divNode);
}

const randomList = async (Length)=>{
    let list = new Array();
    let lowerEnd=1;
    let upperEnd = 100;

    for(let counter=0; counter < Length; ++counter){
        let randomNum = Math.floor(Math.random() * (upperEnd - lowerEnd +1) + lowerEnd);
        list.push(parseInt(randomNum));
    }
    return list;
}

const clear = async () =>{
    document.querySelector(".array").innerHTML="";
}

const response= () =>{
    let navbar = document.querySelector(".navbar");
    if(navbar.className === "navbar"){
        navbar.className += "responsive";
    }else{
        navbar.className= "navbar";
    }
}
document.querySelector(".sort").addEventListener("click", start);
document.querySelector(".size-options").addEventListener("change", render);
document.querySelector(".algo-options").addEventListener("change", render);
window.onload= render;