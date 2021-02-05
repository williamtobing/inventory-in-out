import { useState } from "react";

const AddItem = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [inOut, setInOut] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text || !day) {
      alert("Please add an item");
      return;
    }

    onAdd({ text, day, inOut });

    setText("");
    setDay("");
    setInOut(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Item</label>
        <input
          type="text"
          placeholder="Add Item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day &amp; Time</label>
        <input
          type="date"
          placeholder="Add Day &amp; Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Check In or Out</label>
        <input
          type="checkbox"
          checked={inOut}
          value={inOut}
          onChange={(e) => setInOut(e.currentTarget.checked)}
        />
      </div>

      <input className="btn btn-block" type="submit" value="Save Item" />
    </form>
  );
};

export default AddItem;
