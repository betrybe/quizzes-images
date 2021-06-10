db.sales.aggregate([
  { $project: { item: 1, total: { $ceil: ["$price", "$fee"] } } }
]);
