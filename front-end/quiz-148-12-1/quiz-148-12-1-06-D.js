function changeCounter() {
  state(prevState => ({
    counter: prevState.counter + 1
  }))
}
