/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const res = new Set();
  emails.forEach((email) => res.add(transform(email)));
  console.log(res);
  return res.size;
};

const transform = (email) => {
  let [local, domain] = email.split("@");
  local = local.split("+")[0];
  local = local
    .split("")
    .filter((ch) => ch !== ".")
    .join("");
  return local + "@" + domain;
};

console.log(transform("ll.fsf+hello@gmail.com"));
