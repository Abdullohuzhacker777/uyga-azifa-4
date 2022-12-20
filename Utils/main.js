export function findEliment(element, parent = document) {
  return parent.querySelector(element);
}

export function generateDate(nulls) {
  const year = new Date().getFullYear();
  const minutes = new Date().getMinutes();
  const day = new Date().getDay();
  const hour = new Date().getHours();
  const month = new Date().getMonth() + 1;
  //  < 10
  //   ? "0" + (new Date(nulls).getMonth() + 1)
  //   : new Date(nulls).getMonth() + 1;
  return `🗓${hour}:${minutes}/ ${day}/${month}/${year}`;
}
