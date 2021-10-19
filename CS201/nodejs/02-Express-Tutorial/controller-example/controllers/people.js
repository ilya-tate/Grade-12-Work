let { people } = require("../../data");

const readPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPeople = (req, res) => {
  const { name } = req.body;
  console.log(req.body);
  if (name) {
    people.push({ id: new Date().getTime(), name });
    console.log(people);
    return res.status(201).json({ person: name });
  }
  res.status(400).json({ success: false, msg: "Please enter a name" });
};

const renamePerson = (req, res) => {
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
};

const removePerson = (req, res) => {
  const { id } = req.params;
  const person = people.find((each) => each.id === +id);
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `No person with id ${id}` });
  }
  people = newPeople;
  res.status(203).json({ success: true, data: newPeople });
};
