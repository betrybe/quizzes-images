db.notas.aggregate([
  { $addFields: {
    media: { $divide: ["$soma", 4] }
  }},
  { $addFields: {
    soma: { $sum: "$provas" }
  }},
])
