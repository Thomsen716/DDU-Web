import React from "react";

import BookIcon from "../assets/Book.svg";
import ChatIcon from "../assets/Chat_bot.svg";
import GearIcon from "../assets/Gear.svg";
import UserIcon from "../assets/User.svg";

// Seperat komponent til venstre sidebjælke
export default function Sidebar() {
  return (
    <aside className="w-16 bg-white border-r border-gray-200 flex flex-col justify-between items-center py-4 z-10 shadow-sm">
      {/* Top navigation */}
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <div className="w-8 h-8 bg-rose-400 text-white rounded-md flex items-center justify-center font-bold text-xs shadow-sm">
          W
        </div>

        {/* Navigationsknapper med pladsholder-ikoner */}
        <button
          title="Notebøger"
          className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition"
        >
          <img
            src={BookIcon}
            alt="Notebøger"
            className="w-5 h-5 object-contain"
          />
        </button>

        <button
          title="Chat / AI Assistant"
          className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition"
        >
          <img src={ChatIcon} alt="Chat" className="w-5 h-5 object-contain" />
        </button>
      </div>

      {/* Bund navigation */}
      <div className="flex flex-col items-center space-y-4">
        <button
          title="Indstillinger"
          className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition"
        >
          <img
            src={GearIcon}
            alt="Indstillinger"
            className="w-5 h-5 object-contain"
          />
        </button>

        <button
          title="Brugerprofil"
          className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition"
        >
          <img
            src={UserIcon}
            alt="Brugerprofil"
            className="w-5 h-5 object-contain"
          />
        </button>
      </div>
    </aside>
  );
}
