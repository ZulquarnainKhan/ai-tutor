import { useEffect, useState } from "react";
import { ChatBubble } from "../ui/ChatBubble";

export const Message = ({ role, content }) => {
  const [displayedText, setDisplayedText] = useState(
    role === "user" ? content : ""
  );

  useEffect(() => {
    if (role !== "assistant") return;

    let index = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      index++;
      setDisplayedText(content.slice(0, index));

      if (index >= content.length) {
        clearInterval(interval);
      }
    }, 2); // typing speed (ms)

    return () => clearInterval(interval);
  }, [content, role]);

  return (
    <div
      className={`flex ${
        role === "user" ? "justify-end mb-6" : "justify-start mb-6"
      }`}
    >
      <ChatBubble role={role} content={displayedText} />
    </div>
  );
};
