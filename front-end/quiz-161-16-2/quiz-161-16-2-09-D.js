function mapStateToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ add, remove, reset }, dispatch),
  }
}
