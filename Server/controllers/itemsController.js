const axios = require("axios");
const ML = require("../config/apiConfig");
const parser = require("../helpers/parser");

const Author = {
  name: "Santiago",
  lastname: "Alarcón",
};

exports.search = (req, res) => {
  const search = req.query.q;
  if (!search) {
    res.status(400).json({ msg: "faltan parámetros" });
    return;
  }

  axios
    .get(ML.search_items + search)
    .then((resp) => {
      const items = [];
      const categories = [];

      resp.data.results.forEach((p, index) => {
        if (index < 4) {
          const item = parser.SearchItems(p);
          items.push(item);
          if (categories.indexOf(p.category_id) === -1)
            categories.push(p.category_id);
        }
      });

      const response = {
        author: Author,
        categories: categories,
        items: items,
      };

      res.status(200).json(response);
    })
    .catch((error) => {
      res.json(error);
    });
};

exports.description = async (req, res) => {
  const id = req.params.id;
  let description = "";
  let product = "";

  try {
    const respDescription = await axios.get(
      `${ML.get_item + id + "/description"}`
    );
    description = respDescription.data.plain_text;
  } catch {}

  try {
    product = await axios.get(`${ML.get_item + id}`);

    const response = {
      author: Author,
      item: parser.DescriptionItem(product.data),
      description: description,
    };

    res.status(200).json(response);
  } catch (error) {
    res.json(error.message);
  }
};
