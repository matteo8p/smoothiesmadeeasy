import React from "react"
import "./recipe.css"
import ListGroup from "react-bootstrap/ListGroup"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import SmoothieForm from "./SmoothieForm"


export default class recipe extends React.Component
{

    render()
    {
        var nameArray = this.props.entries.name;
        var ingredientArray = this.props.entries.ingredients;
        // var instructionsArray = this.props.entries.instructions;
        let arrayOfJsx = [] 
        console.log(ingredientArray)

        for(var i = 0; i < nameArray.length; i++)
        {
            // var element = 
            // <ls>
            //     <li>Name: {nameArray[i]}</li>
            //     <li>Ingredients: {ingredientArray[i]}</li>
            //     {/* <li>Instructions: {instructionsArray[i]}</li> */}
            // </ls>
            let arrayOfIngredients = []
            var ingredients = ingredientArray[i].split("\n")

                for(var j = 0; j < ingredients.length; j++)
                {
                    arrayOfIngredients.push(
                        <li>{ingredients[j]}</li>
                    )
                }

            var element = 
            <Card className = "recipecard">
            <Card.Header id="headercard"><b>Recipe for {nameArray[i]}</b></Card.Header>
            <Card.Body>
                {/* <Card.Title>Special title treatment</Card.Title> */}
                <Card.Text id="cardtext">
                <ul>
                {arrayOfIngredients}
                </ul>
                </Card.Text>
            </Card.Body>
            </Card>
            arrayOfJsx.push(element)
        }

        
        return(
            <div>
                {arrayOfJsx}
            </div>
        )
    }
}
