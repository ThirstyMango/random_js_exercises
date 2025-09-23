const startParty = function startParty() {
  const people = [
    "Chris",
    "Anne",
    "Colin",
    "Terri",
    "Phil",
    "Lola",
    "Sam",
    "Kay",
    "Bruce",
  ];
  const blackList = ["Phil", "Lola"];

  const allowed = people.filter((person) => !blackList.includes(person));
  const refused = people.filter((person) => blackList.includes(person));

  const showPeople = function showPeople(parentClass, people) {
    const parentEl = document.querySelector(`.${parentClass}`);
    for (let i = 0; i < people.length; i++) {
      parentEl.textContent +=
        i === people.length - 1 ? ` ${people[i]}.` : ` ${people[i]},`;
    }
  };

  showPeople("admitted", allowed);
  showPeople("refused", refused);
};

startParty();
