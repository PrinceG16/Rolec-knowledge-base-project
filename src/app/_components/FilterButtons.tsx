"use-client";

import React, { useState } from "react";

export default function FilterButtonsRRRR({
  onFilterChange,
}: {
  onFilterChange: (category: string | null) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const buttons = [
    { label: "All", value: null },
    { label: "Home", value: "Home" },
    { label: "Commercial", value: "Commercial" },
    { label: "AC", value: "AC" },
    { label: "DC", value: "DC" },
    { label: "Accessories", value: "Accessories" },
    { label: "Back Office", value: "Back Office" },
  ];

  const handleClick = (value: string | null) => {
    setSelected(value);
    onFilterChange(value);
  };

  return (
    <div className="px-5 py-2 sm:!px-6 sm:!py-4">
      <div className="overflow-x-auto">
        <div className="mb-2 flex w-max flex-nowrap justify-center gap-1 sm:mb-0 lg:px-[100px]">
          {buttons.map((btn) => {
            const isSelected = selected === btn.value;
            return (
              <button
                key={btn.label}
                onClick={() => handleClick(btn.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  isSelected
                    ? "bg-ev-500 text-white"
                    : "text-grey-800 bg-transparent hover:text-black"
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
