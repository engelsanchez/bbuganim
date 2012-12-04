var data = (function(){

var people_rows = [
    ["id",        "name",                   "mid"     ]

    ,["engel",    "Engel Sanchez",          2484415   ]
    ,["igor",     "Igor",                   14590941  ]
    ,["gabriell", "Gabriell DeBear Paye",   7988041   ]
    ,["patrick",  "Patrick Crawford",       54731932  ] 
    ,["domenic",  "Domenic Smarra",         26041982  ]
    ,["dave",     "Dave",                   6323245   ]
];

var model_rows = [
    ["id",        "name",       "multi",  "current",        "past"    ]

    ,["butterfly", "Butterfly",  false,   ["gabriell"],     []        ]
    ,["ladybug",   "Ladybug",    false,   [],               []        ]
    ,["ant",       "Ant",        false,   ["igor"],         []        ]
    ,["beetle",    "Beetle",     false,   [],               []        ]
    ,["dragonfly", "Dragonfly",  false,   ["dave"],         []        ]
    ,["bird",      "Bird",       false,   ["patrick"],      []        ]
    ,["house",     "House",      false,   ["domenic"],      []        ]
    ,["grain",     "Grain",      false,   [],               []        ]
    ,["broom",     "Broom",      false,   [],               []        ]
    ,["trees",     "Trees",      true,    [],               []        ]
    ,["flowers",   "Flowers",    true,    ["domenic"],      []        ]
    ,["grass",     "Grass",      true,    [],               []        ]
    ,["rocks",     "Rocks",      true,    [],               []        ]
];

var section_rows = [
  ["id",          "label"                 ],

  ["about",       "About"                 ],
  ["process",     "The Process"           ],
  ["storyboard",  "Storyboard"            ],
  ["modeling",    "Modeling"              ],
  ["blockanim",   "Blocking Animation"    ],
  ["animation",   "Animation"             ]
  ];

var default_section = "about";

var rows2obj = function(rows){
  var header = _.first(rows);
  var data = _.rest(rows);
  var row2pair = function(row) { return [row[0], _.object(header, row)]; };
  return _.chain(data).map(row2pair).object().value();
};

var people = rows2obj(people_rows);
var people_list = _.values(people);

var models = rows2obj(model_rows);
var model_list = _.values(models);

var lookup_people = function(arr) { 
  _.each(arr, function(e,i,l){ l[i] = people[e]; }); 
};

_.forEach(models, function(m) { 
  lookup_people(m.current); 
  lookup_people(m.past);
  m.all_modelers = _.union(m.current, m.past); 
});

var sections = rows2obj(section_rows);
var section_list = _.values(sections);

return {
  people: people,
	people_list: people_list,
  models: models,
  model_list: model_list,
  sections: sections,
  section_list: section_list,
  default_section: default_section
};
})();
