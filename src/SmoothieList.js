import React from "react"
import Recipe from "./recipe";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"

export default class SmoothieList extends React.Component
{
    constructor(props)
    {
        super(props);

        this.nameText = React.createRef();
        this.ingredientText = React.createRef(); 
        //this.instructionsText = React.createRef(); 
        var nameStored = JSON.parse(localStorage.getItem("name"))
        var ingredientStored = JSON.parse(localStorage.getItem("ingredients"))

        if(nameStored != null)
        {
          this.state = 
          {
              name: nameStored,
              ingredients: ingredientStored,
              //instructions: []  
          }
        }else
        {
          this.state = 
          {
              name: [],
              ingredients: [],
              //instructions: []  
          }
        }
    }

    changeSubmit = e =>
    {
      e.preventDefault();

        var name = this.nameText.current.value
        var ingredients = this.ingredientText.current.value
        //var instructions = this.instructionsText.current.value

        if(name.length == 0)
        {
          alert("Please enter smoothie name")
        }

        if(name.length != 0)
        {
            this.state.name.push(name)
            this.state.ingredients.push(ingredients)

            this.setState(
              {
                name: this.state.name, 
                ingredients: this.state.ingredients 
              }
            )

            this.nameText.current.value = ''
            this.ingredientText.current.value = ''
            //this.instructionsText.current.value = ''
        }

        localStorage.setItem("name", JSON.stringify(this.state.name))
        localStorage.setItem("ingredients", JSON.stringify(this.state.ingredients))
    }

    undo = e =>
    {
      e.preventDefault();

      this.state.name.pop()
      this.state.ingredients.pop()

      this.setState(
        {
          name: this.state.name, 
          ingredients: this.state.ingredients 
        }
      )

      localStorage.setItem("name", JSON.stringify(this.state.name))
      localStorage.setItem("ingredients", JSON.stringify(this.state.ingredients))
    }

    delete = e =>
    {
      e.preventDefault();

      if(this.state.name.length > 0)
      {
        this.setState(
          {
            name: [], 
            ingredients: [], 
            //instructions: []
          }
        )
      }

      localStorage.setItem("name", JSON.stringify(this.state.name))
      localStorage.setItem("ingredients", JSON.stringify(this.state.ingredients))
    }

    render()
    {
        return (
        <div className="todoListMain"> 
        <React.Fragment>
          <Card className = "inputgroup">
              <Form className = "form" onSubmit={this.changeSubmit}>

                <Form.Group>
                  <Form.Label>Smoothie Name</Form.Label>
                  <Form.Control placeholder="enter name" ref={this.nameText}/>
                </Form.Group>
                
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Ingredients</Form.Label>
                  <Form.Control as="textarea" placeholder="Press enter to enter new ingredient" rows="5" ref={this.ingredientText}/>
                </Form.Group>
              <Button variant="dark" type="submit">Submit</Button>
            </Form>

            <Form onSubmit={this.undo} className="deleteform">
                <Button variant="warning" type="submit">Undo</Button>
            </Form>

            <Form onSubmit={this.delete} className="deleteform">
                <Button variant="danger" type="submit">Clear All</Button>
            </Form>


          </Card>
          </React.Fragment>
          <Recipe entries={this.state}/>
        </div>
        );
    }
}