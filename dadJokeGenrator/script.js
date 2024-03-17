const btn = document.getElementById("btn");
    const joke = document.getElementById("joke");

    async function getJoke() {
      try {
        joke.innerText = "Updating...";
        btn.disabled = true;
        btn.innerText = "Loading...";
        const response = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1", {
          headers: {
            "X-Api-Key": "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll"
          }
        });
        const data = await response.json();
        console.log(data)
        btn.disabled = false;
        btn.innerText = "Tell me a joke";

        joke.innerText = data[0].joke;
      } catch (error) {
        joke.innerText = "An error happened, try again later";
        console.log(error);
      }
    }

    btn.addEventListener("click", getJoke);