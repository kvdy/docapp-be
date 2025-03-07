# DocApp Backend

## Setup Instructions

Follow these steps to set up the project:

### 1. Clone the Repository

Open your terminal and run the following command to clone the repository:

```sh
git clone https://github.com/kvdy/docapp-be.git
```

### 2. Navigate to the Project Directory

Change to the project directory:

```sh
cd docapp-be
```

### 3. Install Dependencies

Install the required dependencies using npm or yarn:

```sh
npm install
```
or
```sh
yarn install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add the necessary environment variables. Refer to `.env.example` for the required variables.

### 5. Run Database Migrations

Run the database migrations to set up the database schema:

```sh
npm run migrate
```
or
```sh
yarn migrate
```

### 6. Start the Development Server

Start the development server:

```sh
npm run dev
```
or
```sh
yarn dev
```

The server should now be running at `http://localhost:3000`.

### 7. Run Tests (Optional)

To run the tests, use the following command:

```sh
npm test
```
or
```sh
yarn test
```

## Additional Information

For more details on the project structure and available scripts, refer to the documentation in the `docs` directory.
