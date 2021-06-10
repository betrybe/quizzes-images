{
  $project: {
    nome: {
      $group: [
        "$employee.first_name",
        "$employee.last_name",
      ],
    }
    apelido: "$employee.nickname"
  }
}
