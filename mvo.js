
/* ======= Model ======= */

var model = {
    currentCat: null,
    cats: [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'cat_picture1.jpeg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'cat_picture2.jpeg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904'
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'cat_picture3.jpeg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709'
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'cat_picture4.jpeg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559'
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'cat_picture5.jpeg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288'
        }
    ]
};


/* ======= Octopus ======= */

var octopus = {

    init: function() {
        // set our current cat to the first one in the list
        model.currentCat = model.cats[0];

        // tell our views to initialize
        catListView.init();
        catView.init();
        adminView.init();
        document.getElementById("admin-form").style.display="none";
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    },

    showForm: function() {
        document.getElementById("admin-form").style.display="block";
        adminView.render();
    },

    hideForm: function() {
        document.getElementById("admin-form").style.display="none";
    },

    updateValues: function(namenew, imagenew, clicksnew) {
        console.log(model.currentCat, namenew, imagenew, clicksnew);
        model.currentCat.name = namenew;
        model.currentCat.imgSrc = imagenew;
        model.currentCat.clickCount = clicksnew;
        catListView.render();
        catView.render();
    }
};


/* ======= View ======= */

var catView = {

    init: function() {
        // store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function(){
            octopus.incrementCounter();
        });

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // update the DOM elements with values from the current cat
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};

var catListView = {

    init: function() {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('cat-list');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        var cat, elem, i;
        // get the cats we'll be rendering from the octopus
        var cats = octopus.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                    octopus.hideForm();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

var adminView = {

    init: function() {
        // store pointers to our DOM elements for easy access later
        this.adminBtnElem = document.getElementById('admin-btn');

        // on click, increment the current cat's counter
        this.adminBtnElem.addEventListener('click', function(){
            octopus.showForm();
        });
        this.cancelBtnElem = document.getElementById('cancel');
        this.cancelBtnElem.addEventListener('click', function(e){
            e.preventDefault();
            octopus.hideForm();
        });

        this.saveBtnElem = document.getElementById('save');
        this.saveBtnElem.addEventListener('click', function(e){
            e.preventDefault();
            console.log("working");
            this.formName = document.getElementById('admin-name');
            this.formImage = document.getElementById('admin-imgurl');
            this.formClick = document.getElementById('admin-click');
            octopus.updateValues(this.formName.value, this.formImage.value, this.formClick.value);
        });
    },

    render: function() {
        this.catNameElem = document.getElementById('cat-name').innerHTML;
        this.catImageElem = document.getElementById('cat-img').src;
        this.countElem = document.getElementById('cat-count').innerHTML;

        this.formName = document.getElementById('admin-name');
        this.formImage = document.getElementById('admin-imgurl');
        this.formClick = document.getElementById('admin-click');

        this.formName.value = this.catNameElem;
        this.formImage.value = this.catImageElem;
        this.formClick.value = this.countElem;
    }
};
// make it go!
octopus.init();