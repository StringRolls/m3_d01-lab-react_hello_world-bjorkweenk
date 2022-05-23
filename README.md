[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7904345&assignment_repo_type=AssignmentRepo)
![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Hello React

## Introduction

We just learned the basics of React and JSX. We saw how to create a new React app using the Create React App package. In this exercise we will practice what we just learned by creating a simple landing page (hopefully with some styles :blossom:).

<!--  ![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3e87cc1f09c32a09911a65d94c1bd4f0.png) -->

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Instructions

### Iteration 1 | Create React app

Let's get this party started! First, you will need to create a new React app.

Navigate to the root folder of the LAB. When you're in the root folder, use the Create React App (CRA) package to create a new React project. 

Once you have created the app, navigate to the root folder of the app. From here, run the app in the development mode and open it in the browser.



You can reference the CRA Documentation and the Getting Started page here: [Create React App - Getting Started](https://create-react-app.dev/docs/getting-started).

<br>

### Iteration 2 | Prepare the app

Now that you have created the app let's clean up the `App.js` a bit. Remove the initial content generated by the CRA to get the following structure:

```jsx
// src/App.js
import './App.css';

function App() {
  return (
    <div className="App"></div>
  );
}
export default App;
```

<br>

### Iteration 3 | Download the assets

To create the landing page we will need few images. Inside of the `src/` folder create a new folder named `images`. The folder should be nested in the following way `src/images/`. 

Next, download the following images and save them in the `src/images/` folder:

<details>
  <summary>Click here for the URLs</summary>

  <hr>

<img width="50" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs-dark.png">

```http
https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png
```

<br>

<img width="50" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs-dark.png">

```http
https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png
```

<br>

<img width="100" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png">

```http
https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png
```

<br>

<img width="100" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png">

```http
https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png
```

<br>

<img width="100" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png">

```http
https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png
```

<br>

<img width="100" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png">

```http
https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png
```

<hr>

</details>

<br>

### Iteration 4 | Landing Page

Finally, let's create our landing page. Using the assets that you downloaded in the previous iteration recreate the following landing page:

<!-- ![home](https://user-images.githubusercontent.com/23629340/43718926-863a3c7a-998c-11e8-803b-7c9bc87425bb.png) -->

<details>
  <summary>Click here to see the image</summary>

  <hr>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_2c5c24ee05aa5fa68a76eee564ad44ee.png)

</details>

For now, don't worry about creating more than one component, we will cover that in the following lessons!

Happy coding! :heart:
