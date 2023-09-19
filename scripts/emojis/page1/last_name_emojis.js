function getRandomEmojilast_name() {
  var emojis = ['😀', '😁', '😄', '😉', '😊', '😋', '😎', '😍', '🥰', '🙂', '🤩', '🤔', '🤨', '😐', '😶'
  , '😶', '😏', '😮', '😯', '😌', '🙃', '🫠', '😲', '🤯', '😬', '😮', '🥶', '😳', '😇', '🥳', '🥸'
  , '🥺', '🤠', '🤡', '🤫', '🤭', '🫣', '🧐', '🤓', '😈']; // Add more emojis if desired
  var randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

function last_name_emojis() {
  var inputElement = document.getElementById('last_name');
  var currentPlaceholder = inputElement.getAttribute('placeholder');
  var emoji = getRandomEmojilast_name();
  inputElement.setAttribute('placeholder', currentPlaceholder + ' ' + emoji);
}