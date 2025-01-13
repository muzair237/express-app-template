function HttpException(response, status) {
  const error = new Error(response?.message);
  error.response = response;
  error.status = status;
  return error;
}

export default HttpException;
