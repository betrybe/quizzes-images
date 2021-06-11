db.notas.aggregate([
  { $addFields: {
    soma: { $sum: "$provas" },
    media: { $divide: ["$soma", 4] }
  }}
])
