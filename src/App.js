import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Items from "./components/Items";
import AddItem from "./components/AddItem";
import About from "./components/About";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  const [showAddItem, setShowAddItem] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const itemsFromServer = await fetchItems();
      setItems(itemsFromServer);
    };

    getItems();
  }, []);

  // Fetch Items
  const fetchItems = async () => {
    const res = await fetch("http://localhost:5001/items");
    const data = await res.json();

    return data;
  };

  // Fetch Item to Toggle In Out
  const fetchItem = async (id) => {
    const res = await fetch(`http://localhost:5001/items/${id}`);
    const data = await res.json();

    return data;
  };

  // Add Item
  const addItem = async (item) => {
    const res = await fetch("http://localhost:5001/items", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    });

    const data = await res.json();

    setItems([...items, data]);
  };

  // Delete Item
  const deleteItem = async (id) => {
    await fetch(`http://localhost:5001/items/${id}`, {
      method: "DELETE",
    });

    setItems(items.filter((item) => item.id !== id));
  };

  // Toggle In Out
  const toggleInOut = async (id) => {
    const itemToToggle = await fetchItem(id);
    const updateItem = { ...itemToToggle, inOut: !itemToToggle.inOut };

    const res = await fetch(`http://localhost:5001/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateItem),
    });

    const data = await res.json();

    setItems(
      items.map((item) =>
        item.id === id ? { ...item, inOut: data.inOut } : item
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddItem(!showAddItem)}
          showAdd={showAddItem}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddItem && <AddItem onAdd={addItem} />}
              {items.length > 0 ? (
                <Items
                  items={items}
                  onDelete={deleteItem}
                  onToggle={toggleInOut}
                />
              ) : (
                "No Items to Show"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
