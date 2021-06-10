{
  $group: {
    _id: "modulo_id",
    estudantes: { $sum: 1 },
  }
}
