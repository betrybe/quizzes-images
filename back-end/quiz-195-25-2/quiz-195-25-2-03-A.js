db.sales.aggregate([
  { $project: { item: 1, total: { $subtract: ["$price", "$fee"] } } }
]);
