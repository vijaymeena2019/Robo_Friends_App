import Card from './Card';
import React from 'react';
// import { robots } from './robots'
//const cardArray = robots.map((robot, index) => < Card id={robot.id} key={index} name={robot.name} email={robot.email} username={robot.username} />)  // each child should have a unique key
const CardList = ({ robots }) => {   // props.robots   destructure
    // if (true) {  // to check for ErrorBoundry Component
    //     throw new Error('Nooooo!');
    // }
    return (
        <div>
            {/* {cardArray} */}

            {                                       // it works because we can use js in curly brackets
                robots.map((robot, index) => < Card
                    id={robot.id}
                    key={index}
                    name={robot.name}
                    email={robot.email}
                    username={robot.username}
                />)
            }
            {/* curly bracket because it is script code and need to  be evaluate */}
            {/* < Card id={robots[0].id} name={robots[0].name} email={robots[0].email} username={robots[0].username} />
            < Card id={robots[1].id} name={robots[1].name} email={robots[1].email} username={robots[1].username} />
            < Card id={robots[2].id} name={robots[2].name} email={robots[2].email} username={robots[2].username} /> */}
        </div>
    )
}

export default CardList;