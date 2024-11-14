function searchAvatar() {
    console.log("Hello");
    const pokemonName = document.getElementById("pokemonName").value;
    const avatarDisplay = document.getElementById("avatarDisplay");
    const pokemonNameResult = document.getElementById("pokemonNameResult");
    const pokemonTypeResult = document.getElementById("pokemonTypeResult");
    console.log(pokemonName);

    if (!pokemonName) {
        avatarDisplay.innerHTML = "<p style='text-align:center; color: black;'>Please enter a Pokémon name.</p>";
        pokemonNameResult.value = "Unknown";
        pokemonTypeResult.value = "Unknown";
        return;
    }

    // Make the API call to get Pokémon data
    fetch(`http://localhost:8080/api/pokemon`)
        .then(response => response.json())  // Assuming the response is in JSON format
        .then(data => {
            // Check if the data contains the required fields
            if (data && data.avatar && data.name && data.type) {
                // Display the Pokémon avatar
                avatarDisplay.innerHTML = `<img src="${data.avatar}" alt="${data.name}" style="width: 100%; height: auto; border-radius: 10px;">`;

                // Display Pokémon name and type
                pokemonNameResult.value = data.name;
                pokemonTypeResult.value = data.type;
            } else {
                // If no valid data returned, show a message
                avatarDisplay.innerHTML = "<p style='text-align:center; color: black;'>No avatar found.</p>";
                pokemonNameResult.value = "Unknown";
                pokemonTypeResult.value = "Unknown";
            }
        })
        .catch(error => {
            console.error('Error fetching Pokémon data:', error);
            avatarDisplay.innerHTML = "<p style='text-align:center; color: black;'>Error fetching data.</p>";
            pokemonNameResult.value = "Unknown";
            pokemonTypeResult.value = "Unknown";
        });
}

