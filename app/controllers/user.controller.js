export default {
  getAllUsers: (_, res) => {
    try {
      console.log("coucou");
    } catch (error) {
      console.error(error);
      res.status(500).json({error: "serveur down"});
    }
  }
}