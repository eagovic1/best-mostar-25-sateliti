# VERDI
## How to run

### Prerequisites  
- **Node.js** v21.2.0: [Download here](https://nodejs.org/en/blog/release/v21.2.0)
- **Angular CLI** v18:  
  Installation:  
  ```bash
  npm install -g @angular/cli@18
  ```

### BACKEND
```
cd ./backend
npm install
node ./app.js
```

### FRONTEND
```
cd ./frontend 
npm install
ng serve
```

## Funtionalities

### Creating Events
As a Company, you can create volunteering events providing location, image, date, description, min. and max. volunteers needed, default and random prizes, etc. By default, event is active, but company can tag it as completed or canceled.

### Joining Event
As a Volunteer, you can join and leave different events.

#### Prizes 
By joining events you are eligible to receive a default prize defined by the company
There are also potential random prizes. The more your event streak is bigger, the higher is possibility to win the prize.

### Scoreboards
By completing events you will form a streak and earn points.
The best volunteers in your city/region/country will receive monthly/yearly prizes.

### Daily Challenges
If the volunteering community is inactive in your region, we will still provide daily challenges, which you can complete to gain level experience and rewards.
