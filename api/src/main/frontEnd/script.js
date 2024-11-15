function searchAvatar() {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const avatarDisplay = document.getElementById("avatarDisplay");
    const pokemonNameResult = document.getElementById("pokemonNameResult");
    const pokemonTypeResult = document.getElementById("pokemonTypeResult");

    // Clear previous results if any
    avatarDisplay.innerHTML = "";
    pokemonNameResult.value = "";
    pokemonTypeResult.value = "";

    if (!pokemonName) {
        avatarDisplay.innerHTML = "<p style='text-align:center; color: black;'>Please enter a Pokémon name.</p>";
        pokemonNameResult.value = "Unknown";
        pokemonTypeResult.value = "Unknown";
        return;
    }

    // Make the API call to get Pokémon data
    fetch("http://127.0.0.1:8080/api/pokemon")
        .then(response => response.json())
        .then(data => {
            // Find the Pokémon with the specified name in the 'content' array
            const pokemon = data.content.find(p => p.name.toLowerCase() === pokemonName);

            if (pokemon) {
                // Display the Pokémon avatar
                avatarDisplay.innerHTML = `<img src="${pokemon.url}" alt="${pokemon.name}" style="width: 100%; height: auto; border-radius: 10px;">`;

                // Display Pokémon name and type
                pokemonNameResult.value = pokemon.name;
                pokemonTypeResult.value = pokemon.type;
            } else {
                // If no matching Pokémon found, show a message
                avatarDisplay.innerHTML = "<p style='text-align:center; color: black;'>No avatar found.</p>";
                pokemonNameResult.value = "Unknown";
                pokemonTypeResult.value = "Unknown";
            }
        })
        .catch(error => {
            console.error("Error fetching Pokémon data:", error);
            avatarDisplay.innerHTML = "<p style='text-align:center; color: black;'>Error fetching data.</p>";
            pokemonNameResult.value = "Unknown";
            pokemonTypeResult.value = "Unknown";
        });
}
