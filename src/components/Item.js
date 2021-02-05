import { FaTimes } from "react-icons/fa";

const Item = ({ item, onDelete, onToggle }) => {
  return (
    <div
      className={`item ${item.inOut ? "in-out" : ""}`}
      onClick={() => onToggle(item.id)}
    >
      <h3>
        {item.text}{" "}
        <FaTimes
          className="cross-icon"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(item.id);
          }}
        />
      </h3>
      <p>{item.day}</p>
    </div>
  );
};

export default Item;
