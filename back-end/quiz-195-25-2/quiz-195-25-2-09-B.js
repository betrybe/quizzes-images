db.lanches.aggregate(
   [
     { $project: { item: 1, total: { $add: [ "$price", "$quantity" ] } } }
   ]
)
