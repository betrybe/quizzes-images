db.notas.aggregate([
  { $addFields: {
    media: { $divide: ["$soma", 4] },
    soma: { $sum: "$provas" }
  }}
])
