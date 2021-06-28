//Alteração de estado
this.setState({ erroExiste: true });


//Jsx do componente
{ <MensagemDeErro erroExiste={this.state.erroExiste}/> }
