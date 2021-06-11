db.notas.aggregate([
  { $addFields: {
    soma: { $sum: "$provas" }
  }},
  { $addFields: {
    media: { $divide: ["$soma", 4] }
  }},
])
