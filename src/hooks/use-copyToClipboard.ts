"use client"
import { useState, useCallback } from "react";

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const copyToClipboard = useCallback(async (text: string) => {
    if (!navigator.clipboard) {
      setError(
        "Clipboard API not supported in this browser. Please use Ctrl+C or Cmd+C to copy."
      );
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setError(null);
      // Reset copied state after 2 seconds
      setTimeout(() => setIsCopied(false), 3000);
    } catch (err) {
      setError("Failed to copy text to clipboard.");
      setIsCopied(false);
    }
  }, []);

  return { copyToClipboard, isCopied, error };
};

export default useClipboard;
