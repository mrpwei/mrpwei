import { useState, useRef } from "react";

const Pre = (props) => {
  const textInput = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const onEnter = () => {
    setHovered(true);
  };
  const onExit = () => {
    setHovered(false);
    setCopied(false);
  };
  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textInput.current.textContent);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <div onMouseEnter={onEnter} onMouseLeave={onExit} className="relative">
      {hovered && (
        <button
          aria-label="Copy code"
          type="button"
          className={`absolute right-4 top-2 h-6 leading-4 px-1 text-sm rounded select-none ${
            copied
              ? " bg-green-400 text-gray-900"
              : " bg-gray-700 text-gray-100"
          }`}
          onClick={onCopy}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      )}

      <pre ref={textInput}>{props.children}</pre>
    </div>
  );
};

export default Pre;
