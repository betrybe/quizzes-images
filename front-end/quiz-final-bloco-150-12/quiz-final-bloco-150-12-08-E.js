class ComponenteFilho extends React.Component {
 constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);

	render() {
	  return (<button type="button" onClick={this.handleClick} >Contar cliques!</button>);
	}
}
