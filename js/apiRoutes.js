var fs = require("fs"); 
var path = require("path"); 
var db = fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8"); 
db = JSON.parse(db)




function apiRoutes(app) {
    app.get("/api/notes", function(req, res) {
      console.log(db)
        res.json(db);
      });
    
      app.get("/api/notes/:id", function(req, res) {
        res.json(data[Number(req.params.id)]);
      });
    
      app.post("/api/notes", function(req, res) {
        const newNotes = req.body;
        let noteId = newNotes.title + (Math.floor(Math.random()*10)); 
        newNotes.id = noteId;
        db.push(newNotes);
        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(db), function(req,res){
          res.json(db);
          console.log("added notes")
        }); 
        
    });

    app.delete("/api/notes/:id", function(req,res){
      const deleteNotes = req.params.id; 
      let savedNotes = []; 
      for (let i = 0; i < savedNotes.length; i++) {
        if(db[i] === deleteNotes){
          savedNotes.push(db[i])
        } 
      }
     var db = [...savedNotes]

     fs.writeFile(".../db/db.json", JSON.stringify(savedNotes), function(err){
       if(err) throw err; 
       res.send("notes deleted")
       console.log("notes deleted")
     }); 
    })}; 
   
    module.exports = apiRoutes