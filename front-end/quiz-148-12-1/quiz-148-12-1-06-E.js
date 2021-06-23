function changeCounter() {
  setState(prevState => ({
    counter: prevState.counter + 1
  }))
}
