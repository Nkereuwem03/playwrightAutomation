# Playwright Automation Project

[![Tests](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/Nkereuwem03/playwrightAutomation/main/test-results/badge-summary.json)](https://github.com/Nkereuwem03/playwrightAutomation/actions)

---

This repository contains end-to-end and UI automation tests using [Playwright](https://playwright.dev/) for various demo web applications. The project demonstrates best practices for browser automation, including handling forms, dropdowns, alerts, frames, file uploads, screenshots, and more.

---

## 📦 Project Structure

```
playwrightAutomation/
├── .github/
│   └── workflows/
│       └── playwright.yml        # GitHub Actions workflow for CI
├── tests/
│   ├── assertions.spec.js
│   ├── autoSuggestDropdown.spec.js
│   ├── bootstrapDropdown.spec.js
│   ├── datePicker.spec.js
│   ├── dropdowns.spec.js
│   ├── generatingScriptsUsingCodegen.spec.js
│   ├── handleIFrames.spec.js
│   ├── handleNestedFrames.spec.js
│   ├── locatingMultipleElements.spec.js
│   ├── locators.spec.js
│   ├── multiSelectDropdown.spec.js
│   ├── reporters.spec.js
│   ├── alerts.spec.js
│   ├── ... (other test files)
│   ├── screenshot/
│   └── uploadFiles/
├── .gitignore
├── package.json
├── playwright.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/playwrightAutomation.git
   cd playwrightAutomation
   ```

2. **Install dependencies:**
   ```bash
   npm ci
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install --with-deps
   ```

---

## 🧪 Running Tests

- **Run all tests:**
  ```bash
  npx playwright test
  ```

- **Run a specific test file:**
  ```bash
  npx playwright test tests/locators.spec.js
  ```

- **Run tests in headed mode (see the browser):**
  ```bash
  npx playwright test --headed
  ```

- **Generate HTML report:**
  ```bash
  npx playwright show-report
  ```

---

## 📸 Artifacts

- **Screenshots:**  
  Saved in `tests/screenshot/` after relevant tests.
- **File Uploads:**  
  Test files are in `tests/uploadFiles/`.

---

## ⚙️ Continuous Integration

This project uses **GitHub Actions** for CI.  
On every push or pull request to `main` or `master`, the workflow:

- Installs dependencies
- Installs Playwright browsers
- Runs all Playwright tests
- Uploads the Playwright HTML report as an artifact

See [`.github/workflows/playwright.yml`](.github/workflows/playwright.yml) for details.

---

## 📝 .gitignore

The `.gitignore` file ensures that dependencies, test results, reports, screenshots, and upload files are not committed to the repository.

---

## 🧩 Key Features Demonstrated

- **Locators:** CSS, text, role, and advanced Playwright locators
- **Assertions:** Visibility, enabled/disabled, checked, value, text, count, etc.
- **Dropdowns:** Single and multi-select, auto-suggest
- **Alerts & Dialogs:** Handling alert, confirm, and prompt dialogs
- **Frames & iFrames:** Interacting with nested frames and iframes
- **File Uploads:** Single and multiple file uploads
- **Screenshots:** Page and full-page screenshots
- **Keyboard & Mouse:** Keyboard shortcuts, drag-and-drop, right-click, double-click
- **Pagination & Tables:** Reading and interacting with paginated tables

---

## 📚 Useful Commands

- **Update Playwright:**  
  `npx playwright install`
- **Debug a test:**  
  `npx playwright test --debug`
- **List all available browsers:**  
  `npx playwright install --with-deps`

---

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests for improvements or bug fixes.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

- [Playwright Documentation](https://playwright.dev/)
- [Demo Sites Used](https://testautomationpractice.blogspot.com/, https://parabank.parasoft.com/, etc.)
