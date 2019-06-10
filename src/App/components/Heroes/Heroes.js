import React,{ Component } from 'react'
import heroeService from '../../services/heroeService'

export class Heroes extends Component {
    stat = {
        heroes: []
    }

    //componente tipo clase
    componentDidMount(){
        this.setState({
            heroes: heroeService.getHeroes()
        });
    }

    render(){
        const heroes = this.state.heroes;
        return(
            <React.Fragment>
                <h1> Heroes<small> Diversos Heroes</small></h1>
                <hr></hr>
                <div className="card-columns">
                    {/*targetas de los heroes*/}
                    {heroes.map(heroe => {
                        return (
                            <div className="card animated fadeIn fast">
                            <img src={heroe.img} alt={heroe.nombre}
                            className="card-img-top img-fluid"/>
                            <div className="card-body"
                        )
                    })}
                </div>

        )
    }
}