function getRandomEmojifull_name() {
    var emojis = ['😀', '😁', '😄', '😉', '😊', '😋', '😎', '😍', '🥰', '🙂', '🤩', '🤔', '🤨', '😐', '😶'
    , '😶', '😏', '😮', '😯', '😌', '🙃', '🫠', '😲', '🤯', '😬', '😮', '🥶', '😳', '😇', '🥳', '🥸'
    , '🥺', '🤠', '🤡', '🤫', '🤭', '🫣', '🧐', '🤓', '😈']; // Add more emojis if desired
    var randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }
  
  function full_name_emojis() {
    var inputElement = document.getElementById('full_name');
    var currentPlaceholder = inputElement.getAttribute('placeholder');
    var emoji = getRandomEmojifull_name();
    inputElement.setAttribute('placeholder', currentPlaceholder + ' ' + emoji);
  }