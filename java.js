// Create a class called "Component". The constructor for Component should take in one parameter "name".
//  There should be one method called "render" that prints <p>Component _name_ rendering where _name_ is the provided name.

class Component {
    constructor(name){
        this.name= name
    }
    render(){
        console.log("<p>Component ",this.name," rendering")
    }
}
const Comp= new Component("horst")
Comp.render()
// Create a child class called UserCard that extends Component. 
// The UserCard should take in only one constructor parameter called "user". Expect the user to be an object with "name", "imageUrl" and "email" properties. 
// The UserCard should override the original "render" method. The new render method should print out something like this:

class UserCard extends Component{
    constructor(User){
        super()
        this.name = User.name,
        this.imageUrl = User.imageUrl,
        this.email = User.email
    }
    render(){
        console.log(`<div class="card card-user">
        <img class="card-img-top" src="`+this.imageUrl+`" alt>
        <div class="card-body">
            <h5 class="card-title">`+this.name+`</h5>
            <p class="card-text">To contact, please send a message to</p>
            <a
                href="mailto:`+this.email+`"
                class="btn btn-primary"
            >
                user email here
            </a>
        </div>
    </div>"`)
    }
}
const usercard = new UserCard({name:"Horst",imageUrl:"/image/pic.jpg",email:"horst@horst.de"})
usercard.render()
// Create an array of at least 5 user objects.

const user_array=[
    {name:"Horst",imageUrl:"/image/pic.jpg",email:"horst@horst.de"},
    {name:"jan",imageUrl:"/image/pic.jpg",email:"jan@horst.de"},
    {name:"Jhonny",imageUrl:"/image/pic.jpg",email:"jhonny@horst.de"},
    {name:"Pätrick",imageUrl:"/image/pic.jpg",email:"päddy@horst.de"},
    {name:"Nils",imageUrl:"/image/pic.jpg",email:"nils@horst.de"},
]


// Using the .map() method, create 5 UserCard instances (objects) based on your users.
const userobj_array =user_array.map(obj => new UserCard(obj.name,obj.imageUrl,obj.email))
// Using .forEach(), call the render method of your instances.
userobj_array.forEach(obj => obj.render())
// Print the type of the UserCard class.
console.log(typeof(UserCard))
// Print the type of a UserCard instance.
console.log(typeof(new UserCard({name:"Nils",imageUrl:"/image/pic.jpg",email:"nils@horst.de"})))