// Whatsapp


// Get the element using its class name and contenteditable attribute
const element = document.querySelector('.to2l77zo[contenteditable="true"][role="textbox"][title="Type a message"]');
const buttonSelector = '.tvf2evcx.oq44ahr5.lb5m6g5c.svlsagor.p2rjqpw5.epia9gcq';

// Function to simulate typing and update the element
function simulateTypingAndUpdateElement(element, text, callback) {
  let index = 0;

  function type() {
    if (index < text.length) {
      const char = text.charAt(index);

      // Append the character to the element's content using document.execCommand
      document.execCommand('insertText', false, char);

      const event = new KeyboardEvent('keydown', {
        key: char,
        code: char.charCodeAt(0),
        keyCode: char.charCodeAt(0),
        which: char.charCodeAt(0),
        bubbles: true,
        cancelable: true,
      });

      element.dispatchEvent(event);
      index++;

      // Simulate typing speed by delaying each character
      setTimeout(type, 2); // Adjust the delay time as needed
    } else {
      // Typing finished, execute the callback function
      if (callback && typeof callback === 'function') {
        callback();
      }
    }
  }

  type();
}

// Function to perform a sequence of actions
function performActions(index) {
  if (index > -1) {
    // Simulate a click
    element.click();

    // Simulate typing into the element and update it visually
    const textToType = 'Message here';
    simulateTypingAndUpdateElement(element, textToType, () => {
      // After typing finishes, wait for 5 seconds before clicking the button
      setTimeout(() => {
        const button = document.querySelectorAll(buttonSelector);
        console.log(button[0]);
        button[0].click();

        // Call performActions again after 5 seconds
        setTimeout(() => {
          performActions(index + 1); // Move to the next iteration
        }, 50);
      }, 50);
    });
  }
}

// Start performing actions from index 0
performActions(0);
