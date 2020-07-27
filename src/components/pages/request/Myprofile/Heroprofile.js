import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Driving from './../../../../assets/img/driving.png'
import Food from './../../../../assets/img/food.png'
import Med from './../../../../assets/img/med.png'
import Other from './../../../../assets/img/other.png'
import Vector from './../../../../assets/img/Vector.svg'
import './../../../../assets/css/App.css'


export class Hero extends Component {
    render() {
        return (
            <div>
                <div className = 'profile-bg-hero'> 
                   <img src = {Vector}  className = 'vector-hero_icon'/>
                   <h1 className='h1-hero'>How do you like to help</h1>
                </div>
                
                <div >
                   <label className = 'car-hero' >I have car I can drive</label>
                    <input className = 'car' type = 'checkbox' />
                </div>
                <div className = 'deliver-div'>
                  <label className= 'deliver-hero'>I can pick something up and deliver</label>
                    <input className = 'deliver'  type ='checkbox'/>
                </div>
                <div>
                    <label className= 'shopping-hero'>I can go shopping for someone</label>
                    <input className = 'shopping' type= 'checkbox'/>
                </div>
                <div>
                    <label className='walk-hero'>I can travel by bicycle/walk</label>
                    <input className = 'walk' type = 'checkbox'></input>
                </div>
                <div className = 'furniture-div'>
                    <label className = 'furniture-hero'>I can you help with tasks at, like moving furniture or changing a lightbulb</label>
                    <input className= 'furniture' type = 'checkbox'/>
                </div>
                <div>
                    <label className = 'covid'>I tested positive for COVID-19 antibodies(=immune)</label>
                    <input className = 'test' type = 'checkbox' />
                </div>
                <div >
                    <Button className = 'hero-btn'>I can do this!</Button>
                </div>
                <di>
                    <img className = 'food-hero_icon' src= {Food} />
                    <img className = 'driving-hero_icon' src={Driving} />
                    <img className = 'med-hero_icon' src={Med}/>
                    <img className = 'others-hero_icon' src= {Other}/>
                </di>
            </div>
        )
    }
}

export default Hero
