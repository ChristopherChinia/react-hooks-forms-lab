import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";
import ItemForm from "./ItemForm";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedWord, setSelectedWord] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSelectedWord(event) {
    setSelectedWord(event.target.value);
  }
  const itemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    })
    .filter((item) => {
      if (selectedWord === "") return true;
      return item.name.toLowerCase().includes(selectedWord.toLowerCase());
    });

  return (
    <div className="ShoppingList">
      <ItemForm  onItemFormSubmit={onItemFormSubmit}/>
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSelectedWord}
        search={selectedWord}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
