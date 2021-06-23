class ComponenteFilho extends React.Component {
  render() {
    const { handleClick } = this.props;

    return (<button type="button">{handleClick}</button>);
  }
}
