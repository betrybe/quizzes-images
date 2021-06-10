{
  $group: {
    _id: "modulo_id",
    estudantes: { $max: 1 },
  }
}
