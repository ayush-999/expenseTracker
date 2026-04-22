import React, { useMemo } from "react";
import { getColorFromString, getRandomColor } from "../../utils/colorUtils";

/**
 * CharAvatar — a circular icon/avatar wrapper with an auto-assigned color.
 *
 * Props:
 *  - icon        {ReactNode}  Icon element to display inside the circle.
 *  - colorKey    {string}     Optional string used to derive a consistent color
 *                             (e.g. pass the card's label). If omitted, a random
 *                             color is chosen once on mount.
 *  - iconColor   {string}     Tailwind text-color class. Defaults to "text-white".
 *  - size        {string}     Tailwind size classes. Defaults to "p-2 text-3xl".
 */
const CharAvatar = ({
  icon,
  colorKey,
  iconColor = "text-white",
  size = "p-2 text-3xl",
}) => {
  // Derive color once — stable across re-renders for the same colorKey.
  const bgColor = useMemo(
    () => (colorKey ? getColorFromString(colorKey) : getRandomColor()),
    [colorKey],
  );

  return (
    <div
      className={`rounded-full ${bgColor} ${iconColor} ${size} flex items-center justify-center`}
    >
      {icon}
    </div>
  );
};

export default CharAvatar;
