# shell.nix
{ pkgs ? import <nixpkgs> {} }:

let
  # Specify Node.js version
  nodejs = pkgs.nodejs-18_x;

  # MongoDB version
  mongodb = pkgs.mongodb;

  # Development tools
  devTools = with pkgs; [
    git
    vim
    mongodb-compass  # MongoDB GUI client
    postman         # API testing tool
  ];

in pkgs.mkShell {
  buildInputs = [
    nodejs
    mongodb
  ] ++ devTools;

  # Shell hook to set up the environment
  shellHook = ''
    # Create directories for MongoDB
    mkdir -p ~/.mongodb/data
    mkdir -p ~/.mongodb/logs

    # Environment variables
    export PATH="$PWD/node_modules/.bin:$PATH"
    export MONGODB_URI="mongodb://localhost:27017/ecommerce"
    export PORT=3000
    export JWT_SECRET="development_secret_key"
    export JWT_EXPIRES_IN="7d"

    # Function to start MongoDB
    function start_mongodb() {
      echo "Starting MongoDB..."
      mongod --dbpath ~/.mongodb/data --logpath ~/.mongodb/logs/mongodb.log --fork
      echo "MongoDB started"
    }

    # Function to stop MongoDB
    function stop_mongodb() {
      echo "Stopping MongoDB..."
      mongod --shutdown
      echo "MongoDB stopped"
    }

    # Function to initialize the project
    function init_project() {
      echo "Installing Node.js dependencies..."
      npm install
      echo "Project initialized"
    }

    # Function to start the development server
    function start_dev() {
      npm run dev
    }

    # Print available commands
    echo "Available commands:"
    echo "  start_mongodb    - Start MongoDB server"
    echo "  stop_mongodb     - Stop MongoDB server"
    echo "  init_project     - Install Node.js dependencies"
    echo "  start_dev        - Start development server"
    echo ""
    echo "Environment ready!"
  '';

  # Shell environment variables
  NIX_SHELL_NAME = "ecommerce-api";
}
