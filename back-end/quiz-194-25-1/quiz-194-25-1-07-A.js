{
  $project: {
    nome: {
      "$employee.first_name",
      "$employee.last_name",
    }
    apelido: "$nickname"
  }
}
