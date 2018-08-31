import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tags from './Tags';
import Friends from './Friends';
import Color from './Color';
import Company from './Company';
import Pictures from './Pictures';


export default class Usuario extends PureComponent {
    render() {
        const {
            name, 
            age, 
            gender,
            picture, 
            email, 
            phone, 
            address, 
            eyeColor,
            friends,
            tags,
            company,
            } = this.props;
        return(
            <article>
                <Pictures picture={picture}/>
                <h2 align="center">{name}</h2>
                
                <table class="table-hover table-striped table-bordered table-sm" align="center" >
                
                    <tbody>
                        <tr>
                        <th scope="row" align="right">Genero:</th>
                        <td>{gender}</td>
                        </tr>
                        <tr>
                        <th scope="row" align="right">Edad:</th>
                        <td>{age}</td>
                        </tr>
                        <tr>
                        <th scope="row" align="right">Color de ojos:</th>
                        <td><Color eyeColor={eyeColor}/></td>
                        </tr>
                        <tr>
                        <th scope="row" align="right">Direccion:</th>
                        <td>{address}</td>
                        </tr>
                        <tr>
                        <th scope="row" align="right">Email:</th>
                        <td><a href={email}>{email} </a> </td>
                        </tr>
                        <tr>
                        <th scope="row" align="right">Telefono:</th>
                        <td>{phone}</td>
                        </tr>
                        <tr>
                        <th scope="row">Empleo actual:</th>
                        <td><Company company={company}/></td>
                        </tr>
                        <tr>
                        <th scope="row" align="right">Amigos:</th>
                        <td><Friends friends = {friends}/></td>
                        </tr>
                        <tr>
                        <th scope="row" align="right">Etiquetas:</th>
                        <td><Tags tags= {tags} /></td>
                        </tr>
                    </tbody>
                </table>
             
            </article>
        )
    }

}

Usuario.PropTypes = {
    picture: PropTypes.img,
    name: PropTypes.string.isRequired,
    eyeColor: PropTypes.element.isRequired,
    gender: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    }