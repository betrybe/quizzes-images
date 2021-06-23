function changeCounter() {
  this.state(prevState => ({
    counter: prevState.counter + 1
  }))
}
