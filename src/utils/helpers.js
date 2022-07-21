export function emailValidation(email) {
  const emailRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return emailRegex.test(String(email).toLowerCase());
}

export function phoneValidation(phone) {
  const phoneRegex = /^\+?[0-9]{3}-?[0-9]{6,12}$/;
  return phoneRegex.test(String(phone));
}
