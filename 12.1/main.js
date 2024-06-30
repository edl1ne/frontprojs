let userLink = '';

        function promptForLink() {
            userLink = prompt("Please enter a link:");
        }

        function redirectToLink() {
            if (userLink) {
                window.location.href = userLink;
            } else {
                alert("First, enter the link using the first button.");
            }
        }