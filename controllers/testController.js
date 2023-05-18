export const testPostController = (req, res) => {
  const { name } = req.body;
  res.status(201).send(`Your Name Is ${name}`);
};
