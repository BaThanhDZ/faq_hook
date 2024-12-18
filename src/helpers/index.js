export function makeID(length = 5) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export function getStatusConfig(status) {
  let elColorStatus = "";
  let elNameStatus = "";
  if (status === "draft") {
    elColorStatus = "secondary";
    elNameStatus = "Nhap";
  } else if (status === "published") {
    elColorStatus = "success";
    elNameStatus = "Xuat ban";
  } else if (status === "pending") {
    elColorStatus = "warning";
    elNameStatus = "Cho duyet";
  }

  return { elColorStatus, elNameStatus };
}
