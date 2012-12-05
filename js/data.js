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
  ["id",          "label"                   ],

  ["about",       "About"                   ],
  ["process",     "The Process"             ],
  ["storyboard",  "Storyboard"              ],
  ["modeling",    "Modeling"                ],
  ["blockanim",   "Blocking Animation"      ],
  ["animation",   "Animation"               ],
  ["audio",       "Audio"                   ],
  ["render",      "Post-process and Render" ],
  ["final",       "Final Video"             ]
  ];

var default_section = "modeling";

var scene_rows = [
  ["id",              "name",                     "description"     ],

  ["intro",           "Intro",                    "The Butterfly flies across the screen until we see Ladybug's house"],
  ["ladybug1",        "Ladybug Exits",            "Ladybug exits her home and sweeps the front of her house unaware of the surprise coming her way"],
  ["grain-falls",     "Grain Falls",              "The massive (little) grain falls to the ground"],
  ["ladybug-jumps",   "Ladybug Jumps",            "Ladybug is scared by the falling grain, jumps and re-enters her house"],
  ["ant-exits",       "Ant Comes Out",            "The ant comes out of her hole and walks towards the grain"],
  ["ant-pushesxx",    "Ant Pushes Grain",         "The ant tries in vain to push the grain to her home"],
  ["beetle-arrives",  "Beetle Arrives",           "The giant horned beetle arrives and starts pushing the grain to help the ant, then the grain is taken away"],
  ["dragonfly",       "Dragonfly Flies Away",     "Dragonfly flies away with the grain, but a big surprise awaits"],
  ["bird-leaves",     "Bird Flies Away",          "Bird flies away with a full tummy"],
  ["ladybug2",        "Ladybug Comes Out Again",  "Ladybug comes out again and resumes her sweeping"]
];

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

var scenes = rows2obj(scene_rows);
var scene_list = _.values(scenes);

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
  default_section: default_section,
  scenes:scenes,
  scene_list:scene_list
};
})();
