function isValidEmail(email) {
  if (!email || typeof email !== "string") return false;

  email = email.trim();

  if (email.includes("@") && email.includes(".")) {
    return true;
  }

  return false;
}
