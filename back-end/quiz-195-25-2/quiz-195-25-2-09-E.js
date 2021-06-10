db.lanches.aggregate(
   [
     { $project: { item: 1, total: { $avg: [ "$price", "$quantity" ] } } }
   ]
)
