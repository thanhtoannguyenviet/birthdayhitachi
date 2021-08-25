import React, { View, Text } from 'react';
import {Typography, Button} from '@material-ui/core'
import image from 'assets/hitachi.png';
import h1 from 'assets/01.jpg';
import h2 from 'assets/02.jpg';
import h3 from 'assets/03.jpg';
import h4 from 'assets/04.jpg';
import h5 from 'assets/05.jpg';
import h6 from 'assets/06.jpg';
import banner01  from 'assets/banner-01.jpg';
import bghitachi from 'assets/bghitachi.jpg'
import { DASHBOARD, ROOT } from 'navigation/CONSTANTS'
import {useHistory} from 'react-router-dom'

const HomeView = props =>{
    const history = useHistory();
    const goTo = (path) => {
        history.push(path || ROOT)
    }
    return (
        <div>
        <div className="container">
            <nav className="navbar navbar-expand-md navbar-dark bg-default">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">   </a>
                        </li>
                        <li className="nav-item active">
                            <a style={{ color: 'black', fontSize: 20, marginBottom: 30 }} className="nav-link" href="#">Hitachi Vantara Vietnam</a>
                        </li>
                    </ul>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <img className="nav-link" src={image} style={{ width: '250px', height: '200px', marginTop: "-20px" }}></img>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <div className=" text-center" style={{ marginBottom: -30 }}>
        </div>
        <div className="container">
            <div className="container" id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={banner01} style={{height:'400px'}}></img>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <p style={{ textAlign: 'center', fontFamily: '', fontSize: 20 }}>   <Button  color="secondary" className=""  variant="contained" onClick={()=> goTo(DASHBOARD)}> Bóc Thăm may mắn</Button>
        </p>       
        <p style={{ textAlign: 'center', fontFamily: '', fontSize: 20 }}>FY20_HISTORY</p>
        <div className="container" style={{ marginTop: '20px' }}>


            <div className="row">
                <div className="col-sm-4">
                    <div>
                        <img style={{ borderStyle: 'groove' }} src={h1} width="300" height="200"></img>
                        <button className="btn"><strong>LUNAR NEW YEAR</strong></button>
                    </div>
                    <br></br>
                    <hr className="d-sm-none" />
                </div>
                <div className="col-sm-4">
                    <div>
                        <img style={{ borderStyle: 'groove' }} src={h2} width="300" height="200"></img>
                        <button className="btn"><strong>CYBER FACTORY</strong></button>
                    </div>
                    <br></br>
                    <hr className="d-sm-none" />
                </div>
                <div className="col-sm-4">
                    <div>
                        <img style={{ borderStyle: 'groove' }} src={h3} width="300" height="200"></img>
                        <button className="btn"><strong>WOMEN'S DAY</strong></button>
                    </div>
                    <hr className="d-sm-none" />
                </div>
                <div className="col-sm-4">
                    <div>
                        <img style={{ borderStyle: 'groove' }} src={h4} width="300" height="200"></img>
                        <button style={{}} className="btn"><strong>ANNIVERSARY 20TH</strong></button>
                    </div>
                    <br></br>
                    <hr className="d-sm-none" />
                </div>
                <div className="col-sm-4">
                    <div>
                        <img style={{ borderStyle: 'groove' }} src={h5} width="300" height="200"></img>
                        <button className="btn"><strong>SLT'S GALA DINNER</strong></button>
                    </div>
                    <br></br>
                    <hr className="d-sm-none" />
                </div>
                <div className="col-sm-4">
                    <div>
                        <img style={{ borderStyle: 'groove' }} src={h6} width="300" height="200"></img>
                        <button className="btn"><strong>INJECT VACCINE</strong></button>
                    </div>
                    <br></br>
                    <hr className="d-sm-none" />
                </div>
            </div>
        </div>
        {/* //jumbotron */}
        <div className=" text-center" style={{ marginBottom: 0, marginTop: 0, backgroundColor: '#333333', height: 65 }}>

            <p style={{ color: 'white', textShadow: '0.1em 0.1em 0.2 em', fontSize: 24, fontFamily: 'Courier New', margin: 'auto', marginTop: 0, }}>Hitachi Vantara Vietnam</p>
        </div>
    </div>

        )
}

export default HomeView;