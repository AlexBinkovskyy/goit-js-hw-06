const categories = document.querySelector("#categories");

const categoriesItemsNum = categories.children.length;
console.log("Number of categories:", categoriesItemsNum);



const categoryName = categories.getElementsByTagName("h2");
const categoryList = categories.querySelectorAll('ul li')
categoryList.forEach(item) {
    console.log(item);
}

console.log(categoryList);

for (let i of categoryName) {
  console.log("Category:", i.innerText);
}
