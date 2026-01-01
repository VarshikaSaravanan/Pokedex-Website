🌙 Dark Mode Pokédex Project

Overview:
The Dark Mode Pokédex is a modern, interactive web application designed to serve as both a visual gallery and a battle simulation arena for Pokémon enthusiasts. Built with a focus on aesthetic design and user engagement, this project leverages a local JSON database to dynamically render detailed character cards, offering a sleek "Dark Mode" interface that highlights the vibrant artwork and elemental types of each Pokémon.

Key Features
🎴 Dynamic Card Gallery
The core of the application parses a pokemonData.json file to generate a responsive grid of Pokémon cards. Each card displays:

High-quality artwork dynamically loaded from the local directory.
Primary and secondary elemental types.
A breakdown of base statistics: HP, Attack, and Speed.
⚔️ Battle Arena Simulation
A standout gamification feature allows users to select any two Pokémon for a duel. The integrated JavaScript logic calculates a "Total Power" metric by aggregating Attack, Speed, and HP stats. The battle simulation features:

Smart Move Selection: Attacks are chosen based on the Pokémon's elemental type (e.g., "Flamethrower" for Fire, "Thunderbolt" for Electric).
Interactive UI: A battle popup appears upon selecting two fighters, leading to a modal that displays the combat log and declares the winner.
🔒 Secure Login Interface
The application includes a standalone login gateway featuring a laser-themed background and social login buttons (Google/GitHub). It currently uses a demonstration authentication system (User: admin, Pass: pokedex123) to secure access to the main dashboard.

Technical Stack
Frontend: HTML5, CSS3 (Custom properties, Flexbox/Grid), Vanilla JavaScript (ES6+).
Backend/Serving: Python (http.server) for lightweight local hosting.
Data: JSON-based data storage for flexible content management.
Getting Started
To launch the application locally, run the included Python server script:

bash
python server.py
Visit http://localhost:8000 in your browser and log in to begin your adventure!
<img width="1850" height="874" alt="image" src="https://github.com/user-attachments/assets/cf6f451f-6496-4081-9ae8-33e178509284" />
<img width="1832" height="776" alt="image" src="https://github.com/user-attachments/assets/49d0f5a9-9433-4f4f-915d-07c5802a4271" />
<img width="1837" height="769" alt="image" src="https://github.com/user-attachments/assets/91b6f6b0-87ca-4703-a1b3-3f6a097e9c82" />
<img width="1849" height="856" alt="image" src="https://github.com/user-attachments/assets/eaf1713c-a942-46e3-a2eb-b8fc10482337" />
<img width="1828" height="854" alt="image" src="https://github.com/user-attachments/assets/01825c80-fc3a-427e-9e72-906c9972410b" />
