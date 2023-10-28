import { useState } from "react";
import { letters } from "./data.js";
import Letter from "./Letter.js";

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState([]);

  // TODO: allow multiple selection
  const selectedCount = selectedIds.length;

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    // Check if the toggledId (the ID of the letter that was clicked)
    // is already cheked in the selectedIds array.
    if (selectedIds.includes(toggledId)) {
      // if it is uncheck or remove it from the selectedIds
      setSelectedIds(selectedIds.filter((id) => id !== toggledId));
    } else {
      // if the toggledId is not cheked, select it or mark it checked
      // upon the checkbox is selected
      setSelectedIds([...selectedIds, toggledId]);
    }
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              selectedIds.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
