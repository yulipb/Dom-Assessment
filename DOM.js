const main = document.querySelector('main')
const jokeOne = "What did the triangle say to the circle? You're pointless."
const jokeTwo = "What did the tomato say to the other tomato during a race? Ketchup."
const jokeThree = "Did you hear about the skeleton beauty contest? No body won."

const template = `
<section>
    <h1>My Jokes</h1>
    <ul>
        <li>${jokeOne}</li>
        <li>${jokeTwo}</li>
        <li>${jokeThree}</li>
    </ul>
</section>
`;
main.innerHTML = template

const p = document.createElement('p')
p.textContent = "That's all folks!"
main.appendChild(p)