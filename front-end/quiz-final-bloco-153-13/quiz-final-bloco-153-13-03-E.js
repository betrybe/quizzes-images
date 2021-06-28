//Alteração de estado
this.setState({ erroExiste: true })


//Jsx do componente
{ this.state.erroExiste && <MensagemDeErro /> }
