# Weather app PWA

This project is a progressive web application (PWA) that displays information about temperatures of different locations. It is built using Svelte for the frontend, TailwindCSS to styling, Cypress for end-to-end testing, and Storybook for component development. The project is written in JavaScript.

### Getting Started

```bash
# Clone this repository
git clone https://github.com/carloshendvpm/weather_svelte_pwa.git

# Install dependencies
cd temperature-info-pwa && npm install

# Start the development server
npm run dev
```
The development server should now be running at http://localhost:5173. You can access the application by visiting this URL in your browser.

## Testing

This project includes end-to-end tests written using Cypress. To run the tests, use the following command:

```bash
npm run test
```
This will launch the Cypress test runner, where you can select the tests to run.

## Storybook

This project includes a Storybook instance for developing and previewing components. To start Storybook, use the following command:

```bash
npm run storybook
```
This will launch Storybook at http://localhost:6006, where you can preview the components.

## Contributing
Contributions to this project are welcome! To contribute, please follow these steps:
1. Fork this repository.
2. Create a new branch: git checkout -b my-new-feature
3. Make your changes and commit them: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request.
