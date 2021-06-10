db.lanches.aggregate(
   [
     { $project: { item: 1, total: { $multiply: [ "$price", "$quantity" ] } } }
   ]
)
