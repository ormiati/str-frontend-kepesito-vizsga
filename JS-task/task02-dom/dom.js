function changeOuterLinks() {
    const aElements = document.getElementsByTagName('#link-list a outer-link')
    for (let i= 0; i < aElements.length; i++) {
      aElement[i].setAttribute('target','_blank', strong.innerHTML);  
    };
    const navElement = [document.getElementById('#link-list').style.display ="flex",
    document.getElementById('#link-list').style.flexdirection= "column",
    document.getElementById('#link-list').style.width="30%",
    document.getElementById('#link-list').style.margin= "0, auto",
    document.getElementById('#link-list').style.border= "1px, solid blue",
    document.getElementById('#link-list').style.padding= "16px",
    ]
}


export { changeOuterLinks };