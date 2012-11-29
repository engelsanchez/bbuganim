var people = {
  igor : { name: "Igor", mid: 14590941 },
  gabriell : { name: "Gabriell", mid : 7988041 }
};

var models = {

};

var sec = function(sid, label) { return {id: sid, label: label}};

var data = {
	people: [
    people.igor, 
    people.gabriell
  ],
  models: [],
  sections: [
    sec("about", "About"),
  sec("process", "The Process"),
  sec("storyboard", "Storyboard")
    ],
  default_section: "about"
};
