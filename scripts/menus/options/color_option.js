// Store the state of each textbox (enabled/disabled)
const textBoxStatesColored = {};

// Handle "Lock" option click
function color_option() {
  if (currentClickedElement) {
    // Get the ID of the clicked group (remove "group" from the ID)
    const groupId = currentClickedElement.id.replace("_group", "");

    // Use the ID to target the associated text box and group
    const textBox = document.getElementById(`${groupId}`);
    const colorOption = document.querySelector("#color_option");

    if (textBox) {
      if (!textBox.readOnly) {
        // Toggle the readOnly property based on the current state
        textBox.highlighted = !textBoxStatesColored[textBox.id]; // Toggle based on stored state

        // Update the state for this textbox
        textBoxStatesColored[textBox.id] = textBox.highlighted;

        // Update the text and lock option accordingly
        if (textBox.highlighted) {
          colorOption.textContent = "⚪ Unhighlight Textbox";
          textBox.style.backgroundColor = "#ffee93";
        } else {
          colorOption.textContent = "🟡 Highlight Textbox";
          textBox.style.backgroundColor = "#ffffff";
        }
      } else {
        colorOption.style.opacity = "0.35"; // Fade the color option
        colorOption.style.pointerEvents = "none"; // Disable pointer events
    }
      console.log("Color Group ID:", groupId);
      console.log("Color TextBox:", textBox.highlighted);

      closeContextMenu();
    }
  }
}

// Add a click event listener to trigger lock_option
document.querySelector("#color_option").addEventListener("click", () => {
  color_option();
});
