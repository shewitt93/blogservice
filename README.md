# Fotographiq
A photography-centred blog, allowing anonymous posting and commenting. Built with JavaScript.

![Screenshot of Fotographiq](https://i.imgur.com/7ikt9IC.png)


## Installation & usage

### On the web
- Go to [musing-hopper-288ea1.netlify.app](https://musing-hopper-288ea1.netlify.app)
- Follow the usage instructions from point 3.

### Installation
- Clone or download the repo.
- In your command line, navigate to the server folder and run `npm install`.
### Usage

- In your command line, run `npm run start` to run the server. Make sure you see the following message: `Express now departing from http://localhost:3000`.

- Open index.html in your browser.
- Press **New Post** and and type your post in the modal that appears, then press **Submit Post**.
- Click on the emojis below each post to react.
- Leave comments in the text box below each post

## Technologies
- JavaScript
- HTML, CSS (using the [Bulma](https://bulma.io) framework)
- [Express](https://expressjs.com)

## Process
- Started by wireframing the page in Figma and creating it using HTML and CSS (with Bulma)
- Created a basic server using [Express](https://expressjs.com)
- Wrote pseudo code to break down the logic of collecting user input, assigning functionality to buttons and making user input appear on the page.

## Wins & Challenges
### Wins
- Creating delete functionality, allowing users to delete their posts.
- Implementing an image upload feature using Base64 encoding.
### Challenges
- Keeping the emoji counter numbers consistent on refresh.

## License
- [MIT License](https://opensource.org/licenses/mit-license.php)
