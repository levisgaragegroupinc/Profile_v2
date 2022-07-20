export function emailValidation(email) {
  const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return emailRegex.test(String(email).toLowerCase());
}

export function phoneValidation(phone) {
  const phoneRegex = /^\+?[0-9]{3}-?[0-9]{6,12}$/;
  return phoneRegex.test(String(phone));
}
