<h2> About </h2>
<p> CLI tool for CRUD operations with MongoDB and a Server for CRUD operations </p>
<h2> Built With </h2>
<ul>
  <li> Node.js </li>
  <li> Javascript</li>
  <li> Mongoose </li>
  <li> Commander </li>
  <li> Inquirer</li>
  <li> Express </li>
</ul>
<h2>Installation</h2>
<ol>
  <li>Clone the repo </li>
  <li>Install NPM packages </li>
  <ol>
    <li> cd ./m5p1/db-cli </li>
    <li> npm i </li>
    <li> cd ./m5p1/server </li>
    <li> npm i </li>
  </ol>
</ol>
<h2>Usage</h2>
<ul>
  <p> For CLI</p>
  <ul>
    <li> cd ./m5p1/db-cli </li>
    <ul>
      <lI>node commands.js a (Add Item)</lI>
      <lI>node commands.js f *title* (Find Item)</lI>
      <li>node commands.js u *id* (Update Item)</li>
      <li>node commands.js r *id* (Remove Item)</li>
      <li>node commands.js l (List all Items)</li>
      <br>
      <p> OR you can do </p>  
      <li> npm link </li>
      <li> and from git-bash you can do all the above commands by replacing "node commands.js" with "db-cli"</li>
    </ul>
  </ul>
  <p> For Server </p>
  <ul>
    <li> cd ./m5p1/server </li>
    <li> node server.js </li>
    <li> From postman </li>
    <ul>
      <li> GET http://localhost:3000/item/keyword - Get existing items in database by keyword </li>
      <li> GET http://localhost:3000/items - Shows all items in database </li>
      <li> POST http://localhost:3000/item - Adds a new item in database </li>
      <br>
      <p> HTTP body structure 
      <p> { <br>
            "title" : "Mug", <br>
            "description" : "A Mug", <br>
            "start_price" : 2, <br>
            "reserve_price" : 4 <br>
          } <br>
      </p>
      <li> PATCH http://localhost:3000/item/id - Update existing item in database </li>
      <br>
      <p> HTTP body structure 
      <p> { <br>
            "reserve_price" : 400 <br>
          } <br>
      </p>
      <li> DELETE http://localhost:3000/item/id - Delete existing item in database </li>
      <li> DELETE http://localhost:3000/item/keyword - Delete existing items in database by keyword </li>
    </ul>
  </ul>
</ul>
<h2>Acknowledgements</h2>
<p> youtube.com/watch?si=jSXuOUfZSYggzzGp&v=v2GKt39-LPA&feature=youtu.be </p>
<p> https://www.digitalocean.com/community/tutorials/nodejs-crud-operations-mongoose-mongodb-atlas </p>
