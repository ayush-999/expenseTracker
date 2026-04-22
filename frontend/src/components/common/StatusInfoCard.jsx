import React from "react";
import CharAvatar from "./CharAvatar";

/**
 * StatusInfoCard
 *
 * Props:
 *  - icon      {ReactNode}  Icon to display.
 *  - label     {string}     Card label (also used to derive a consistent color).
 *  - value     {string}     Main stat value.
 *  - iconColor {string}     Optional Tailwind text-color class (default: "text-white").
 *
 * Note: bgColor is no longer needed — CharAvatar auto-assigns a color
 * based on the label, so the same card always gets the same color.
 */
const StatusInfoCard = ({ icon, label, value, iconColor }) => {
  return (
    <div className="bg-white p-4 shadow-lg shadow-violet-200/50 rounded-lg">
      <div className="flex items-center">
        <CharAvatar icon={icon} iconColor={iconColor} />
        <div className="ml-4">
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatusInfoCard;
