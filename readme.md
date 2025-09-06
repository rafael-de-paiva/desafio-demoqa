# QA Automation Portfolio - Web Project (Cypress + Cucumber + BDD)

 This one is part of my QA portfolio and aims to demonstrate my skills in end-to-end test automation for web applications, using **Cypress** integrated with **Cucumber (BDD)** and **Gherkin**.

Tested website: [https://demoqa.com/](https://demoqa.com/)

---

## 🚀 Technologies and Tools Used

- **Cypress** - End-to-end testing framework
- **Cucumber + Gherkin** - For Behavior-Driven Development (BDD) style scenarios
- **Faker.js** - For generating dynamic test data
- **Node.js / NPM** - Runtime and dependency manager
- **GitHub Actions** - CI pipeline to run tests on every push

---

## 📄 Project Structure

```
DesafioAccenture/
├── .github/workflows/
│   └── cypress-pipeline.yml       # GitHub Actions CI pipeline
│
├── cypress/
│   ├── e2e/features/              # Gherkin feature files
│   │   ├── drag_drop.feature
│   │   ├── element_register.feature
│   │   ├── popup_window.feature
│   │   ├── progress_bar.feature
│   │   └── submit_form.feature
│   │
│   ├── support/
│   │   ├── data/
│   │   │   └── user_data.js       # Faker-based test data generator
│   │   │
│   │   ├── fixtures/
│   │   │   └── file_sample.txt    # Sample file for upload test
│   │   │
│   │   ├── pages/                 # Page Objects
│   │   │   ├── element_page.js
│   │   │   ├── form_page.js
│   │   │   ├── interaction_page.js
│   │   │   ├── landing_page.js
│   │   │   ├── widget_page.js
│   │   │   └── window_page.js
│   │   │
│   │   └── step_definitions/      # Step implementations
│   │       ├── common_steps.js
│   │       ├── drag_drop_steps.js
│   │       ├── element_register_steps.js
│   │       ├── popup_window_steps.js
│   │       ├── progress_bar_steps.js
│   │       └── submit_form_steps.js
│   │
│   ├── commands.js                # Custom Cypress commands
│   └── e2e.js                     # Global setup and hooks
│
├── cypress.config.js              # Cypress configuration
├── package.json
└── README.md (you are here)

```

---

## 🧪 Test Cases Implemented

### 1. Submit Form (`submit_form.feature`)
- Fill in form fields with dynamic data  
- Validate successful submission  

### 2. Web Tables (`element_register.feature`)
- Create a new record with dynamic data  
- Edit the created record  
- Delete the record  
- **Bonus:** Dynamically create and delete multiple records  

### 3. Popup Window (`popup_window.feature`)
- Open a new browser window  
- Validate the displayed text  
- Return to the original context  

### 4. Progress Bar (`progress_bar.feature`)
- Start the progress bar  
- Pause before reaching 25%  
- Resume until 100%  
- Reset the bar back to 0%  

### 5. Drag & Drop (`drag_drop.feature`)
- Reorder list elements using drag-and-drop  
- Validate the final order  

---

## ⚙️ How to Run This Project

### 1. Clone the repository
```bash
cd your-project-folder-path
git clone --
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the tests

- **Run all scenarios**
```bash
npx cypress run
```
or
```bash
npm run test:all
```

- **Run in interactive mode (UI)**
```bash
npx cypress open
```
Step 1: Open E2E Testing
Step 2: Choose a browser
Step 3: Choose a scenario

- **Target specific feature file**
```bash
npx cypress run --spec "cypress/e2e/features/drag_drop.feature"           # Run drag drop scenarioRun drag drop scenario
npx cypress run --spec "cypress/e2e/features/element_register.feature"    # Run element register scenario
npx cypress run --spec "cypress/e2e/features/popup_window.feature"        # Run popup window form scenario
npx cypress run --spec "cypress/e2e/features/progress_bar.feature"        # Run progress bar form scenario
npx cypress run --spec "cypress/e2e/features/submit_form.feature"         # Run submit form form scenario

```
or
```bash
npm run test:drag_drop           # Run drag drop scenario
npm run test:element_register    # Run element register scenario
npm run test:popup_window        # Run popup window form scenario
npm run test:progress_bar        # Run progress bar form scenario
npm run test:submit_form         # Run submit form form scenario
```

---

## 🚀 Continuous Integration with GitHub Actions

Tests are automatically executed on push or pull request to the `main` branch using a pipeline defined in:
```bash
.github/workflows/cypress-pipeline.yml
```
- Runs on Ubuntu via GitHub-hosted runners
- Executes all BDD scenarios
- Can be extended to include video/screenshots uploads, reports, or Cypress Cloud integration

---

## ✍️ Technical Notes

- **Cypress + Cucumber** offers clean separation between behavior (Gherkin) and implementation (step definitions)
- All test data is dynamically generated using **Faker.js**
- Element selectors are organized by PageObjects for maintainability
- Upload and wait-handling are included in the flows (e.g. `cy.wait`, dynamic selectors, etc)

## 🙏 Thanks for Visiting
Thank you for checking out my project! Feel free to reach out:

- Email: **rafael123paiva@gmail.com**
- LinkedIn: [https://www.linkedin.com/in/rafael-paiva-49b88430a](https://www.linkedin.com/in/rafael-paiva-49b88430a)

---

With care and attention to detail,  
**Rafael** 🐉
