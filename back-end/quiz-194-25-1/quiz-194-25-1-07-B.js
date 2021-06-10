{
  $project: {
    _id: 0,
    nome: {
      $concat: [
        "$first_name",
        "$last_name",
      ],
    }
    apelido: "$nickname"
  }
}
