// Function to pick a random name from an array of names
function getRandomName(namesArray) {
    const randomIndex = Math.floor(Math.random() * namesArray.length);
    return namesArray[randomIndex];
  }
  
  // Function to populate the "first_name" input with a random name
  function generate_suffix() {
    // Fetch the names from a text file (replace 'names.txt' with your file path)
    fetch('scripts/generations/page1/databases/suffix_database.txt')
      .then(response => response.text())
      .then(data => {
        const namesArray = data.split('; '); // Split names by semicolon
  
        if (namesArray.length > 0) {
          const randomName = getRandomName(namesArray);
          document.getElementById('suffix').value = randomName;
        } else {
          alert('No names found in the file.');
        }
      })
      .catch(error => {
        console.error('Error fetching names:', error);
      });
  }