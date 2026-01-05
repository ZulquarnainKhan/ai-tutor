import { useState, useEffect, useRef } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { MessageList } from "./components/Chat/MessageList";
import { Button } from "./components/ui/Button";
import { Input } from "./components/ui/Input";
import { useChat } from "./hooks/useChat";
import { useStudentLevel } from "./hooks/useStudentLevel";
import { useLocation } from "react-router-dom";
import { trackPageView } from "./analytics";

function App() {
  const [input, setInput] = useState("");

  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);


  // 👉 Sidebar open by default on desktop, closed on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    window.innerWidth >= 1024
  );

  const { messages, sendMessage, isLoading, clearChat } = useChat();
  const { studentLevel } = useStudentLevel();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      sendMessage(input.trim());
      setInput("");
    }
  };

  return (
    <>
      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* APP ROOT */}
      <div className="h-screen w-screen bg-slate-950 text-white overflow-hidden">
        <div className="flex h-full">

          {/* SIDEBAR */}
          <div
            className={`
              fixed lg:static inset-y-0 left-0 z-50
              w-72 lg:w-80
              bg-slate-900/95 backdrop-blur-xl
              border-r border-slate-800/50
              transform transition-transform duration-300
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
              lg:translate-x-0
            `}
          >
            <Sidebar onClose={() => setIsSidebarOpen(false)} />
          </div>

          {/* MAIN CONTENT */}
          <div
            className={`
              flex-1 flex flex-col min-w-0 overflow-hidden relative
              transition-all duration-300
              ${isSidebarOpen ? "lg:ml-80" : "lg:ml-0"}
            `}
          >
            {/* HEADER */}
            <Header onMenuClick={() => setIsSidebarOpen((v) => !v)} />

            {/* CHAT */}
            <div className="flex-1 overflow-hidden flex flex-col min-h-0">
              <MessageList messages={messages} />
              <div ref={messagesEndRef} />
            </div>

            {/* INPUT AREA */}
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900/50 backdrop-blur-xl border-2 border-slate-800 p-5 shrink-0"
            >
              <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-3 lg:gap-4 items-end lg:items-center">

                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question here... (Press Enter)"
                  disabled={isLoading}
                  className="w-full flex-1 bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-primary-500/80 focus:bg-slate-800/70 min-h-[48px] py-3 px-5 shadow-inner"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey && !isLoading) {
                      handleSubmit(e);
                    }
                  }}
                />

                <div className="flex gap-2.5 w-full lg:w-auto lg:ml-auto">
                  <Button
                    type="submit"
                    isLoading={isLoading}
                    className="h-[48px] px-6 flex-1 lg:flex-none lg:px-8 bg-primary-600/90 hover:bg-primary-500/90 shadow-lg font-semibold"
                  >
                    {isLoading ? "⏳" : "Send →"}
                  </Button>

                  <Button
                    type="button"
                    onClick={clearChat}
                    className="h-[48px] p-2.5 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50"
                  >
                    🗑️
                  </Button>
                </div>
              </div>

              <p className="text-xs text-slate-400 mt-4 text-center">
                Level:{" "}
                <span className="font-bold text-white capitalize">
                  {studentLevel}
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
