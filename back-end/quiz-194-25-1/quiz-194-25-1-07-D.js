{
  $project: {
    _id: 0,
    nome: {
      $concat: [
        "$employee.first_name",
        "$employee.last_name",
      ],
    }
    apelido: "$employee.nickname"
  }
}
