db.samples.aggregate([
  { $project: { item: 1, value: { $round: "$value" } } }
]);
