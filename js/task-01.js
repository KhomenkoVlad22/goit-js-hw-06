const ulWithid = document.querySelector("#categories");
const liOnul = ulWithid.querySelectorAll('.item');
console.log(`Number of categories:${liOnul.length}`);

for (let item of liOnul) {
    let text = item.querySelector("h2").innerHTML;
    let cater = item.querySelectorAll("li").length;
    console.log(`Categories:${text}`);
    console.log(`Elements:${cater}`);
}