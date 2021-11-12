


// document.getElementsByClassName("obj-open").addEventListener("click",closeObj);
export function closeObj(obj){
    // console.log(obj.parentNode);

    let type = obj.parentNode.getAttribute("data-type");
    let size = obj.parentNode.getAttribute("data-size");

    obj.parentNode.style.display='none';
    let hideObj = document.createElement("span");

    if(type === 'array'){
        hideObj.innerHTML = `<i class="obj-open plus-flag"></i>Array[<span class="type-number">${size}</span>]`;

    }else{
        hideObj.innerHTML = `<i class="obj-open plus-flag"></i>Object{...}`;

    }

    obj.parentNode.parentNode.insertBefore(hideObj,obj.parentNode);
}

export function openObj(obj){

    // console.log(obj.nex)
    obj.style.display = "none";
    obj.parentNode.nextSibling.style.display = "inline";

    obj.parentNode.parentNode.removeChild(obj.parentNode);
    // console.log(obj);
}

