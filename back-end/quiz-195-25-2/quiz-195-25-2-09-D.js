db.lanches.aggregate(
   [
     { $project: { item: 1, total: { $divide: [ "$price", "$quantity" ] } } }
   ]
)
