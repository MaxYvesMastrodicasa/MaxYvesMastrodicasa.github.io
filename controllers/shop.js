// import Product from "../src/model/product.js";
import Products from "../data/data.js";
import db from "../utils/database.js";

// export const getIndex = (request, response, next) => {
//   response.render("shop/index", {
//     pageTitle: "Shop",
//     path: "/",
//     products: Products,
//   });
// };

// READ
export const getAllProducts = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products');
    res.render('shop', { products: rows });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500)
    if (req.accepts('html')) {
      res.render('500', { url: '/500' });
      return;
    };
  }
};

// export const getProducts = (req, res, next) => {
//     db
//         .fetchAll()
//         .then(([rows]) => {
//             res.render('shop/index', {
//                 pageTitle: 'Shop',
//                 path: '/',
//                 products: rows
//             });
//         })
//         .catch(err => {
//             if(err) console.log(err);
//         });
// };


