import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./InputWithDropDown.module.css";

import BrowserWindow from "../BrowserWindow/BrowserWindow";

const Dropdown = ({ children, position }) => {
  return createPortal(
    <div
      className={styles.dropdown}
      style={{
        left: position.left,
        top: position.top,
        width: position.width,
      }}
    >
      {children}
    </div>,
    document.body
  );
};

export default function InputWithDropDown() {
  const items = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Kiwi"];
  const [query, setQuery] = useState("");
  const [showList, setShowList] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({
    left: 0,
    top: 0,
    width: 0,
  });
  const inputRef = useRef(null);

  const updateDropdownPosition = () => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setDropdownPosition({
        left: rect.left,
        top: rect.bottom, // positions the dropdown right underneath the input
        width: rect.width,
      });
    }
  };

  // Update position when the dropdown is visible, or on scroll/resize.
  useEffect(() => {
    if (showList) {
      updateDropdownPosition();
      window.addEventListener("scroll", updateDropdownPosition);
      window.addEventListener("resize", updateDropdownPosition);
    }
    return () => {
      window.removeEventListener("scroll", updateDropdownPosition);
      window.removeEventListener("resize", updateDropdownPosition);
    };
  }, [showList]);

  // Update query value on changes and show/hide dropdown accordingly.
  const handleChange = (event) => {
    const newValue = event.target.value;
    setQuery(newValue);
    setShowList(newValue.length > 0);
  };

  // When an item is clicked, update the query and hide the dropdown.
  const handleItemClick = (item) => {
    setQuery(item);
    setShowList(false);
  };

  // Filter the items based on the current input.
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <BrowserWindow>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search fruits..."
          value={query}
          onChange={handleChange}
          className={styles.searchInput}
        />
        {showList && filteredItems.length > 0 && (
          <Dropdown position={dropdownPosition}>
            <ul className={styles.dropdownList}>
              {filteredItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleItemClick(item)}
                  className={styles.dropdownItem}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Dropdown>
        )}
        {/* Extra content to enable scrolling */}
        {/* <div style={{ height: "2000px" }}></div> */}
      </div>
    </BrowserWindow>
  );
}
