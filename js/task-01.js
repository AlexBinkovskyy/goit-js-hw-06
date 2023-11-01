const categories = document.querySelector("#categories");

const categoriesItemsNum = categories.children.length;
console.log("Number of categories:", categoriesItemsNum);

const categoryName = categories.getElementsByTagName("h2");
for (let i of categoryName) {
  console.log("Category:", i.innerText);
  const a = i.nextElementSibling.children.length;
  console.log('Elements:', a);
}

