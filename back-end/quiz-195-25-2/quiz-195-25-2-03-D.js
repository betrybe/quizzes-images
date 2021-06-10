db.sales.aggregate([
  { $project: { item: 1, total: { $floor: ["$price", "$fee"] } } }
]);
