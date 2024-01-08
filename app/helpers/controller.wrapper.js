export default (controllerDonnees) => async (req, res, next) => {
  try {
    await controllerDonnees(req, res, next);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "serveur down"});
  }
};