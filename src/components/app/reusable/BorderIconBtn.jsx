import React from "react";

export default function BorderIconBtn({ text = 2, IconComponent }) {
  return (
    <div className="rounded-xl border border-primary-1 p-2 flex gap-2 items-center">
      {IconComponent && <IconComponent color="#B8C6E3" />}
      <span>{text}</span>
    </div>
  );
}
