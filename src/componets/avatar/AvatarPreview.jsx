// AvatarPreview.jsx
import React from "react";

function AvatarPreview({ avatarUrl }) {
  return (
    <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-300">
      
      <img
        src={avatarUrl}
        alt="Avatar"
        className="w-full h-full object-cover"
      />

    </div>
  );
}

export default AvatarPreview;