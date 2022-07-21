export function emailValidation(email) {
  const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return emailRegex.test(String(email).toLowerCase());
}

export function phoneValidation(phone) {
  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return phoneRegex.test(String(phone));
}

// /^\+?[0-9]{3}-?[0-9]{6,12}$/;
