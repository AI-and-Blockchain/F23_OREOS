OREOS Real Estate App
OREOS is a user-friendly real estate web application built with React.js. It simplifies the process of finding your dream home and exploring potential investment opportunities in the real estate market.





How to run:
    pull main branch from github:
    https://github.com/AI-and-Blockchain/F23_OREOS/tree/main

    1. Open Ai backendfolder, 'F23_Oreos/backend/ai':
      Open python environment and install the 'requirements.txt'
        In the ai folder, run command 'flask run' to start the server.

    
    2. Open react-js folder and run:
        'npm install'
      Run react-js localhost:
        'npm start'

    To run the ML server, navigate to the backend directory and install Flask dependencies: 
    python3 predict.py

    Open web browser and use OREO'S GUI

Find a Home Page
The "Find a Home" page is designed to help users discover available homes with ease. Key features include:

Property Listings: Browse through a curated list of available homes with detailed information.
Price Estimations: Get estimated prices for each property based on various factors.
Invest Page
The "Invest" page caters to users interested in real estate investment opportunities. Notable features include:

Investment Listings: Explore a list of properties suitable for investment, complete with relevant details.
Sort Functionality: Sort listings by list price, providing flexibility in decision-making.
Property View
The "Property View" component offers an in-depth look at a specific property. Features include:

Comprehensive Details: Access detailed information such as address, list price, and estimated price.
Visual Representation: View property images for a better understanding.
Navigation: Easily navigate back to the list or explore other properties.


File Structure
The project structure is organized as follows:

plaintext
Copy code
oreos-real-estate-app/
|-- public/
|-- src/
|   |-- components/
|       |-- FindHome.js
|       |-- Invest.js
|       |-- Listing.js
|       |-- PropertyView.js
|       |-- Navbar.js
|       |-- ViewButton.js
|   |-- images/
|   |-- App.js
|   |-- index.js
|-- .gitignore
|-- package.json
|-- README.md
public: Contains the HTML template and other public assets.
src/components: Houses React components for different sections of the app.
src/images: Stores image assets.
App.js: The main component that renders other components.
index.js: Initializes the React app.
Dependencies
React: ^17.0.2
React Router DOM: ^5.2.0
Other dependencies specified in package.json
Install additional dependencies using:

bash
Copy code
npm install <package-name>
Contributing
Fork the repository.
Create a new branch: git checkout -b feature/new-feature.
Make your changes and commit: git commit -m 'Add new feature'.
Push to the branch: git push origin feature/new-feature.
Submit a pull request.