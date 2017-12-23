import  React, {Component} from 'react';
import data from '../../data.json';

export class Header extends Component {

    renderName() {
       const names = data.map(function (name) {
           return(
               <li>{name.first_name}</li>
           )
       });
       return (
           <ul>
               {names}
           </ul>
       )
     }

    render() {
        return (
            <div>
                <h2>Header</h2>
                {this.renderName()}
            </div>
        );
    }
}

export default Header;