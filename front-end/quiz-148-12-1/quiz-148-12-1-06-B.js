function changeCounter() {
  this.setState(prevState => ({
    counter: prevState.counter + 1
  }))
}
