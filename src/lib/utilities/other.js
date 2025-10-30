import { useMounted } from "./hooks.js";
import { useEffect } from "react";
import { toast } from "sonner";

export function parseForm(data) {
  let object = {};

  data.forEach(function (value, key) {
    object[key] = value;
  });

  return object;
}

export function showErrors(error) {
  // store toasts to dismiss here
  const toastIds = [];

  if (typeof error === "string") {
    // if error is a string, display a single toast
    const toastId = toast.error("Error", { description: error });
    toastIds.push(toastId);
  } else if (Array.isArray(error)) {
    // for multiple errors
    error.forEach((err) => {
      const toastId = toast.error("Error", { description: err.message });
      toastIds.push(toastId);
    });
  }

  // cleanup
  return () => {
    toastIds.forEach((id) => toast.dismiss(id));
  };
}
