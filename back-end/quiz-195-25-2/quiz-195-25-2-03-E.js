db.sales.aggregate([
  { $project: { item: 1, total: { $round: ["$price", "$fee"] } } }
]);
