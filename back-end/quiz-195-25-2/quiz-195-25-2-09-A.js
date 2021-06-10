db.lanches.aggregate(
   [
     { $project: { item: 1, total: { $substract: [ "$price", "$quantity" ] } } }
   ]
)
