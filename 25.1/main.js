document.addEventListener('DOMContentLoaded', () => {
    const emojis = document.querySelectorAll('.emoji');
    const resultDiv = document.getElementById('result');
    const showResultsBtn = document.getElementById('show-results');
    const clearResultsBtn = document.getElementById('clear-results');

    // Load counts from localStorage
    emojis.forEach(emoji => {
        const emojiName = emoji.getAttribute('data-emoji');
        const count = localStorage.getItem(emojiName) || 0;
        emoji.querySelector('.count').textContent = count;
    });

    // Increase count on emoji click
    emojis.forEach(emoji => {
        emoji.addEventListener('click', () => {
            const emojiName = emoji.getAttribute('data-emoji');
            let count = localStorage.getItem(emojiName) || 0;
            count++;
            localStorage.setItem(emojiName, count);
            emoji.querySelector('.count').textContent = count;
        });
    });

    // Show the emoji with the highest votes
    showResultsBtn.addEventListener('click', () => {
        let maxVotes = 0;
        let winningEmoji = '';
        emojis.forEach(emoji => {
            const emojiName = emoji.getAttribute('data-emoji');
            const count = parseInt(localStorage.getItem(emojiName)) || 0;
            if (count > maxVotes) {
                maxVotes = count;
                winningEmoji = emojiName;
            }
        });
        resultDiv.textContent = maxVotes > 0 ? `The winner is: ${winningEmoji}` : 'No votes yet!';
    });

    // Clear all results
    clearResultsBtn.addEventListener('click', () => {
        emojis.forEach(emoji => {
            const emojiName = emoji.getAttribute('data-emoji');
            localStorage.removeItem(emojiName);
            emoji.querySelector('.count').textContent = 0;
        });
        resultDiv.textContent = '';
    });
});
