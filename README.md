
# Micro Frontend Project

This project includes a host React application and four Micro Frontends (MF1, MF2, Vue, and Angular). Each micro frontend runs on a separate port to ensure they can be developed and served independently.

## Project Structure

- **Host App**: Built with React, runs on `http://localhost:3000`
- **MF1**: Built with React, runs on `http://localhost:3001`
- **MF2**: Built with React, runs on `http://localhost:3002`
- **Vue App**: Built with Vue.js, runs on `http://localhost:3003`
- **Angular App**: Built with Angular, runs on `http://localhost:4201`

## Installation Steps

### Prerequisites

Ensure you have the following tools installed:

- **Node.js** (version >= 20)
- **npm** (Node Package Manager)
- **Git** (for cloning the repositories)

### Step 1: Clone the Project

Clone the repository:

```bash
git clone https://github.com/kashif-ali-khan/mfe.git
cd your-repository
```

### Step 2: Install Dependencies for Each Application

This project has five parts: Host app, MF1, MF2, Vue, and Angular. You'll need to install the dependencies for each.

#### 1. Host App (React)

1. Navigate to the Host app directory:

   ```bash
   cd host-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the Host app:

   ```bash
   npm start
   ```

   The Host app will now be accessible at `http://localhost:3000`.

#### 2. Micro Frontend 1 (React)

1. Navigate to the mf1 directory:

   ```bash
   cd mf1
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run MF1:

   ```bash
   npm start
   ```

   MF1 will now be accessible at `http://localhost:3001`.

#### 3. Micro Frontend 2 (React)

1. Navigate to the mf2 directory:

   ```bash
   cd mf2
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run MF2:

   ```bash
   npm start
   ```

   MF2 will now be accessible at `http://localhost:3002`.

#### 4. Vue App

1. Navigate to the "my-vue-app" app directory:

   ```bash
   cd my-vue-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the Vue app:

   ```bash
   npm run start
   ```

   The Vue app will now be accessible at `http://localhost:3003`.

#### 5. Angular App

1. Navigate to the Angular app directory:

   ```bash
   cd angular-mfe
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the Angular app:

   ```bash
   ng serve
   ```

   The Angular app will now be accessible at `http://localhost:4201`.

### Step 3: Access the Micro Frontends

- Host App: `http://localhost:3000`
- MF1: `http://localhost:3001`
- MF2: `http://localhost:3002`
- Vue App: `http://localhost:3003`
- Angular App: `http://localhost:4201`

### Step 4: Additional Configuration (if required)

If your micro frontends require additional configuration (e.g., environment variables, API setup), ensure to follow the specific instructions within each application's directory.

### Step 5: Development and Debugging

You can open each app in a separate terminal window, and they will run on their respective ports. The Host app will integrate with the micro frontends, and you can start developing each frontend independently.

---

## Troubleshooting

- If you encounter issues with ports, ensure no other processes are using the required ports (`3000`, `3001`, `3002`, `3003`, `4201`).
- For issues related to dependencies or package installations, run `npm install` in the respective directories again.
- If you see `Permission Denied` errors, make sure to have the correct permissions to run the applications.

---

## Contributing

If you would like to contribute to this project, feel free to fork the repository and make pull requests. For major changes, please open an issue to discuss what you would like to change.

---

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
