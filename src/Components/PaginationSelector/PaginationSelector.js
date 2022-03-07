import React from "react";

export function PaginationSelector({ itensPerPage, setItensPerPage }) {
  return (
    <div>
      <select
        value={itensPerPage}
        onChange={(e) => {
          setItensPerPage(Number(e.target.value));
        }}
      >
        <option value={30}>30</option>
        <option value={60}>60</option>
        <option value={90}>90</option>
      </select>
    </div>
  );
}
