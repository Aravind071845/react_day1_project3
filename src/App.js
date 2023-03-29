import './App.css';
import React, { Component } from 'react';
function World() {
     return(
        <div>
             <p><center>This is World Functional Component</center><hr></hr></p>
        </div>
     );
}
class World1 extends React.Component
{
        render()
        {
            return <p><center>This is World Class Component</center><hr></hr></p>
        }
}

export {World,World1};
