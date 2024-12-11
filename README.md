# VickBank

This web application was built as part of the Alura course **JavaScript: validating forms**. It follows the course content with modifications.


## 🌐 Live Demo
See the application in action at: [VickBank Demo](https://vickbank.vercel.app/)

## 🖼️ Preview
![VickBank Preview](./img/preview.png)

## 🔨 Project Features
- **Detailed form validations**:
  - Name, email, RG, CPF, and date of birth.
  - Dynamic error messages when fields are unfocused or the form is submitted.
  - Specific error displays such as invalid CPF or underage.
- **Facial recognition**:
  - Photo capture using the device’s camera.
  - Integration of permissions for camera access.
- **Multi-screen flow**:
  - Navigation between the initial form, facial recognition, and confirmation.

## ✔️ Technologies Used
- **HTML**: Structure of web pages.
- **CSS**: Custom styling, including modular files for organization such as `header.css`, `footer.css`, and responsiveness with media queries.
- **JavaScript**:
  - Form validation.
  - DOM manipulation for dynamic error messages.
  - Integration with the camera API.
  - Data storage in LocalStorage.

## 📂 Project Structure
- **/pages/**: Contains the main screens of the registration flow.
  - `open-account-form.html`: Initial screen with the registration form.
  - `open-account-form2.html`: Facial recognition screen.
  - `open-account-form3.html`: Registration confirmation screen.
- **/styles/**: Directory of styles, divided into:
  - **/homepage/**: Styling for the homepage, such as `header.css`, `footer.css`, and `styles.css`.
  - **/form/**: Specific styles for forms.
- **/js/**: Functionality scripts:
  - `cpf.js`: CPF validation.
  - `legal-age.js`: Checks if the user is of legal age.
  - `camera.js`: Camera logic.
  - `script.js`: General validation and storage logic.
- **/img/**: Images used in the project, such as icons and backgrounds.

```bash
├── /pages/                   # HTML Pages
│   ├── open-account-form.html  # Initial form
│   ├── open-account-form2.html # Facial recognition
│   ├── open-account-form3.html # Registration confirmation
├── /styles/                  # CSS Styles
│   ├── /form/                # Form styling
│   ├── /homepage/            # Homepage styling
│   ├── reset.css             # CSS reset for standardization
├── /js/                      # JavaScript Scripts
│   ├── cpf.js                # CPF validation
│   ├── legal-age.js          # Legal age check
│   ├── camera.js             # Camera logic
│   ├── script.js             # Main functions
├── /img/                     # Visual assets
└── README.md                 # Project documentation
```





