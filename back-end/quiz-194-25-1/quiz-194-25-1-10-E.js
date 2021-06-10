{
  $group: {
    _id: "$modulo_id",
    estudantes: { $avg: 1 },
  }
}
