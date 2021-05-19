
## Furniture Shop 


  <ol>
   <li>
      <a href="#tech-stack">Tech Stack</a>
    </li>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#example-usage">Example Usage</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>


## Tech Stack

Current project was created with use of:

  <ul>
        <li>
          <span>Front-end</span>
          <ul>
            <li>
              <span>TypeScript</span>
            </li>
            <li>
              <span>React</span>
            </li>
            <li>
              <span>React Router</span>
            </li>
            <li>
              <span>React Redux</span>
            </li>
            <li>
              <span>React-slick</span>
            </li>
            <li>
              <span>React-hook-form</span>
            </li>
            <li>
              <span>Sass</span>
            </li>
            <li>
              <span>Fetch</span>
            </li>
            <li>
              <span>Stripe</span>
            </li>
          </ul>
        </li>
      </ul>
        <ul>
          <li>
            <span>Back-end</span>
            <ul>
              <li>
                <span>TypeScript</span>
              </li>
              <li>
                <span>Node.js</span>
              </li>
              <li>
                <span>Express</span>
              </li>
              <li>
                <span>MongoDb</span>
              </li>
              <li>
                <span>Amazon-cognito</span>
              </li>
              <li>
                <span>node-Fetch</span>
              </li>
            </ul>
          </li>
        </ul>
		
## About the project

Application allows to browse products and order it based on external Api, which is implemented with use of Fetch.
Entire project is styled with use of Bem and scss, and it is also adapted to follow Responsive Web design principles.
On the main site we are see, responsive and convenient navigation,from here, we can navigate through other sections.
Service enables us convenient and flexible scrolling products and order it.
We also have available payment with stripe and after create orders we are send email with details.
Service also share user account where you have your details and complex orders with products,
address/shipping details and payment status.

## Example usage
Gify 


## Getting Started
In the project directory, you can run

### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
## Installation 
1. Clone the repo
   ```sh
   git clone https://github.com/AnGeL991/Shop.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your Secret_key in `client/.env`
   ```JS
   REACT_APP_STRIPE_PK ='Your stripe pk_key';
   REACT_APP_GOOGLE_API ='Your google_api_key';
   ```

## License
Distributed under the MIT License. See `LICENSE` for more information.
## Contact
Adrian Markuszewski [Linkedin](https://www.linkedin.com/in/adrian-markuszewski-9b39a2211/)
