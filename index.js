// document.querySelectorAll("question").forEach(header => {
//     header.addEventListener("click", function(){
//         let content = this.nextEleementSibling;
//         let icon = document.querySelector(".icon");
//         let allContents = document.querySelectorAll(".answer");
//         let allIcons = document.querySelectorAll("question .icon");

//         allContents.forEach(items=> {
//             if (item !== content) {
//                 item.style.transform = "rotate(0deg)";
//             }
//         });

//         content.style.display = (content.style.display === "block") ? "none" : "block";
//         icon.style.transform = (content.style.display === "block") ? "rotate(180deg)" : "rotate(0deg)";
//     });
// });



const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item =>{
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');

    title.addEventListner('click', () =>{
        item.classList.toggle('active');
    });
});
