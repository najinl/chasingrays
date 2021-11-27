# RAYChasing

## Abstract

An application for the outdoor junkie who is tired of scouring the internet for good locales to bike, hike, or climb AND the having to look up those location's sea weather in a seperate application, just to figure out it's raining or snowing and repeat the cycle all over again. This application was built utilizing TypeScript, React, React Hooks, and React Router.

Visit the <a href="https://ray-chasing.herokuapp.com/">deployed site</a>.

## Snapshot of Application

Upon visiting the app's landing page, a user is presented with three activity buttons to choose from--climbing, mountain biking, climbing. After an activity is selected they are directed to an activity feed where they receive several suggstions for trails or crags that match their activity along with the weekly weather forecast for those locatons. 

A user will see a heart icon on the top of each trail/climbing crag card that will allow them to add that area to favorites. If the user clicks the heart icon in the header of the app, then they are taken to their favorites view. If the user hits a trail/crag and decides, "eh, not for me!," then they can hit the subtraction icon to remove that area from their favorites.

At any moment the user is able to navigate back to the home page and choose another activity by clicking the home icon in the navitation bar of the header. 

## Technologies

<table>
    <tr>
        <td>JavaScript</td>
        <td>React</td>
        <td>React Router</td>
        <td>React Hooks</td>
        <td>HTML</td>
        <td>CSS</td>
        <td>Figma</td>
        <td>Cypress</td>
        <td>Fetch API</td>
    </tr>
    </tr>
        <td><img src="https://user-images.githubusercontent.com/73092355/119360616-074c6580-bc68-11eb-8ac1-f1ca05b87bf8.png" alt="javascript" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119361040-74f89180-bc68-11eb-845a-29ec9f93f095.png" alt="react" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119361186-9d808b80-bc68-11eb-97ee-05bde2700716.png" alt="react router" width="100" height="auto" /></td>
        <td><img src="https://miro.medium.com/max/1400/1*-Ijet6kVJqGgul6adezDLQ.png" alt="react hooks" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119402191-d553f700-bc99-11eb-8cd3-6ef44023d530.png" alt="HTML" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119402395-1e0bb000-bc9a-11eb-9173-30403b8848d1.png" alt="css" width="100" height="auto" /></td>
        <td><img src="https://cdn.freebiesupply.com/logos/large/2x/figma-1-logo-png-transparent.png" alt="figma" width="100" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119361263-b5f0a600-bc68-11eb-9f41-8e10aa013e7a.png" alt="Cypress" width="100" height="auto" /></td>
         <td><img src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/08/wall-2.jpeg" alt="Heroku" width="100" height="auto" /></td>
    </tr>
</table>

## Wins

- Pivoting from the initial weather API chosen for the app to another after realizing the original API did not proivde enough variety
  in geographic locations
- Implementing local storage to allow for favorites to persist upon refresh
- Giving the application a responsive layout
- Utilizing resources such as web documents and mentors to expand knowledge base and maximize application performance
- Utilizing the React icon library for icons

## Challenges

- Dealing with an API that doesn't utilize city in conjunction with region, or latitude/longitude for endpoints. An initial fetch had to be made to grab noaaGrid 
  locales for each lat/long and then those were added to the Model file to fetch weather at each location.
- Creating two user personas that would utilize the application
- Creating modular reusable components while implementing a multi-page website
- Implementing styling for a mobile-first application

## Future Features

- Fetching trail and crag data from APIs such as MTBProject, MountainProject, and/or AllTrails so that there is more variety in trail options
- Adding a search bar on the hope page to be able to search for specific trails
- Adding a redirect link on each trail/climbing area's card that will redirect the user to the MTBProject, MountainProject, or AllTrails page to retrieve a specific 
  trails details.
- Further modularizing components

## Project Demo

**Choose an Activity & View Trail/Crag Options**

<img src="https://media.giphy.com/media/nh2H2pnONWGMVcf6Vd/giphy.gif" width="350" height="500"/>

**View Favorites/Remove from Favorites**

<img src="https://media.giphy.com/media/bFu16SXtFn15gQ3jqx/giphy.gif" width="350" height="500"/>

## Contributors

This project was developed by:
- [Nadia Naji](https://github.com/najinl)

[Project Spec](https://frontend.turing.edu/projects/module-3/showcase.html) provided by the Turing School of Software & Design.
