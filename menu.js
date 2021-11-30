function showMenu() {
  return prompt(`Select menu item below:
1 - Start the game
2 - Story
4 - Help
5 - Exit`);
}

let choice;
do {
  choice = showMenu();
  while (isNaN(choice)) {
    alert(`That's not a number. Please enter a number.`);
    choice = showMenu();
  }
  choice = parseInt(choice);
  switch (choice) {
    case 1:
      alert(`That's 1`);
      break;
    case 2:
      alert(`That's 2`);
      break;
    case 3:
      alert(`That's 3`);
      break;
    case 4:
      alert(`That's 4`);
      break;
    case 5:
      break;
    default:
      alert(`Invalid response. Please try again.`);
  }
} while (choice != 5);
