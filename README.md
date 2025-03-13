# Swook

# Features 
Swipe Interface: Swipe left or right on clothes you want to swap.

Matching System: Get notified when you and another user like each other's items.

In-App Chat: Communicate with your match to arrange the swap.

Virtual Closet: Manage the clothes you’re willing to swap.

# Tech Stack

# Setting Up
To manage dependencies, Python uses virtual environments to prevent packages from being installed globally.

## Windows (PowerShell)
    1. Within nextjs-flask folder: If necessary, install virtualenv with pip install virtualenv
    2. Create a virtual environment with py -3 -m venv .venv
    3. Activate using .venv\bin\activate\
    4. Install Flask with pip install flask
    5. Install Python dependencies located in requirements.txt

## Mac OSX / Linux / WSL
    1. Within nextjs-flask folder: If necessary, install virtualenv with sudo apt-get install virtualenv
    2. Create a virtual environment with python3 -m venv .venv
    3. Activate using source .venv/bin/activate
    4. Install Flask with pip install flask
    5. Install Python dependencies located in requirements.txt

## Python Dependencies
- Once the virtual environment is active, install requests with pip install requests

Testing:
npm run dev starts the server on localhost:3000


