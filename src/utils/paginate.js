import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  // return items.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}
