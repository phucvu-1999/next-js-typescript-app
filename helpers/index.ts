import { FormData } from "../Interfaces";
import { NotificationProps } from "../Interfaces";

export async function sendContactData(contactData: FormData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: FormData = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Some thing went wrong");
  }
}
