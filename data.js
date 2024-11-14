popularData = [
  "Water",
  "H<sub>2</sub>O",
  "H<sub>2</sub>SO<sub>4</sub>",
  "HCl",
  "H<sub>2</sub>SO<sub>4</sub> + NaOH",
  "Methane",
  "Melatonin",
  "Fe + O<sub>2</sub>",
  "C<sub>2</sub>H<sub>5</sub>OH",
  "Hydrogen peroxide",
  "Sodium chloride",
  "Aspirin",
  "Benzene",
  "Ag + Cl<sub>2</sub>",
];

popularData.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = item;
  $(".js-popularList").append(listItem);
});
