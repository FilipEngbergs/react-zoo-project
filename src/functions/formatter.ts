export function formatted_date(result: string) {
  var d = new Date();
  result +=
    d.getFullYear() +
    "/" +
    (d.getMonth() + 1) +
    "/" +
    d.getDate() +
    "/" +
    d.getHours() +
    ":" +
    d.getMinutes();
  return result;
}
