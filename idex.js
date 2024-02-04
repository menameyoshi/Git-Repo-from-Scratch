const quotations = [
  "I have a bad feeling about this.",
  "No, I am your father.",
  "It’s a trap!",
];

const randomIndex = Math.floor(Math.random() * quotations.length);

const selectedQuotation = quotations[randomIndex];

// Print the selected quotation to the console
console.log(`Selected Quotation: ${selectedQuotation}`);
