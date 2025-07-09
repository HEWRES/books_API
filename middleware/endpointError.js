const endpointError = (req, res, next) => {
    let error = new Error("Endpoint not found!");
    error.status = 404;
    next(error);
}

export default endpointError;