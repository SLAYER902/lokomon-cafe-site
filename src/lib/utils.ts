import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function stripPhoneNumber(phone: string) {
  return phone.replace(/[^\d]/g, "");
}
