const express = require("express");
const { people } = "./public";

const app = express();
const port = 3000;

app.use(express.static("./public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (name) {
    people.push({ id: new Date().getTime(), name });
    return res.status(201).json({ person: name });
  }
  res.status(400).json({ success: false, msg: "Please enter a name" });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) return res.status(201).send(`Welcome ${name}`);
  res.status(400).json({ success: false, msg: "Please enter a name" });
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((each) => {
    return each.id === id;
  });

  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `No person with id ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === id) person.name = name;
    return person;
  });

  people = newPeople;
  res.status(202).json({ success: true, data: newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = person.find((each) => each.id === id);
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `No person with id ${id}` });
  }

  const newPeople = people.filter((person) => {
    return person.id !== id;
  });

  people = newPeople;
  res.status(203).json({ success: true, data: newPeople });
});

app.listen(port, () => `Listening on port ${port}`);
