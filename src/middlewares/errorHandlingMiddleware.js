export default async function handleError(error, req, res, next) {
  if (error.type === "Conflict") {
    return res.sendStatus(409).status(error.message);
  }
  if (error.type === "unprocessableEntity") {
    return res.sendStatus(422).status(error.message);
  }

  return res.sendStatus(500).status("Internal Server Error");
}
