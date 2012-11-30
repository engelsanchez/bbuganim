var people = _.chain([
    ["engel", "Engel Sanchez", 2484415],
    ["igor", "Igor", 14590941],
    ["gabriell", "Gabriell", 7988041]
])
.map(function(arr) {return [arr[0], _.object(["id", "name", "mid"], arr)]})
.object()
  .value();

var people_list = _.values(people);

var models = {
  ant: {name:"Ant"},
  beetle: {name:"Beetle"}
};

var model_list = _.values(models);

var sec = function(sid, label) { return {id: sid, label: label}};

var data = {
  people: people,
	people_list: people_list,
  models: models,
  model_list: model_list,
  sections: [
    sec("about", "About"),
  sec("process", "The Process"),
  sec("storyboard", "Storyboard")
    ],
  default_section: "about"
};
