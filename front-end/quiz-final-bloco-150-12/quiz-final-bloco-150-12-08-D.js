class ComponenteFilho extends React.Component {
  render() {
    return (<button type="button" onClick={this.props.handleClick()} >Contar cliques!</button>);
  }
}
