function FormatDecimals(num) {
  const decimals = num - Math.floor(num);
  return Number.parseFloat(decimals.toFixed(2));
}

function FormatPrice(price, _currency) {
  const decimals = FormatDecimals(price);
  return {
    currency: _currency,
    amount: Math.floor(price),
    decimals: decimals,
  };
}

function SearchItems(item) {
  const result = {
    id: item.id,
    title: item.title,
    price: FormatPrice(item.price, item.currency_id),
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
  };
  return result;
}

function DescriptionItem(item) {
  const result = {
    id: item.id,
    title: item.title,
    price: FormatPrice(item.price, item.currency_id),
    picture: item.pictures[0].url,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    sold_quarantity: item.sold_quantity,
  };
  return result;
}

module.exports.SearchItems = SearchItems;
module.exports.DescriptionItem = DescriptionItem;
