{
  $project: {
    _id: 0,
    nome: {
        "$employee.first_name": 1,
        "$employee.last_name": 1,
    }
    apelido: {
      "$employee.nickname": 1,
    }
  }
}
