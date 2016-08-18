var notesapp = require('../notesapp');
var expect = require('chai').expect;
describe("Functionality of create function", function(){
    it("should accept only strings but not number",function(){
    	var note = new notesapp("someName");
        expect(note.create(134)).to.equal('Only string are accepted');
    });
    
    it("should be expecting input with at least 1 character long",function(){
    	var note = new notesapp("someName");
        expect(note.create()).to.equal('You cant leave the input string empty');
    });

    it("should be fine with String and array of strings",function(){
    	var note = new notesapp("someName");
        expect(note.create("this is my text")).to.equal('Congratulations someName! Your Text number Has been added');
    });
});

describe("Functionality of get function", function(){
    it("should accept only number",function(){
    	var note = new notesapp("someName");
        expect(note._get("pile")).to.equal('The NoteId might be incorrect');
    });
    
    it("should be expecting only one valid argument",function(){
    	var note = new notesapp("someName");
        expect(note._get()).to.equal('The NoteId might be incorrect');
    });

    it("numbers and even number parsable string is very ok",function(){
    	var note = new notesapp("someName");
        expect(note._get("8")).to.equal('The note does not exist');
    });

    it("But negative number and 0 is not allowed, the i",function(){
    	var note = new notesapp("someName");
        expect(note._get(-1)).to.equal('The NoteId might be incorrect');
    });
});


describe("Functionality of search function", function(){
    it("should accept only strings but not number",function(){
    	var note = new notesapp("someName");
        expect(note._search(134)).to.equal('Number is not a valid search string parameter');
    });
    
    it("should be expecting an argument",function(){
    	var note = new notesapp("someName");
        expect(note._search()).to.equal('Sorry! You search query cannot be empty');
    });

    it("should be expecting input with at least 1 character long",function(){
    	var note = new notesapp("someName");
        expect(note._search('')).to.equal('Sorry! You search query cannot be empty');
    });

    it("accepts String e.g _search('search')",function(){
    	var note = new notesapp("someName");
        expect(note._search("this is my text")).to.equal('Showing search result for [this is my text]');
    });
});


describe("Functionality of delete function", function(){
    it("should accept only number",function(){
    	var note = new notesapp("someName");
        expect(note._delete("pile")).to.equal('The NoteId might be incorrect');
    });
    
    it("should be expecting only one valid argument",function(){
    	var note = new notesapp("someName");
        expect(note._delete()).to.equal('The NoteId might be incorrect');
    });

    it("does not allow negative number and 0",function(){
    	var note = new notesapp("someName");
        expect(note._delete(-1)).to.equal('The NoteId might be incorrect');
    });

    it("allow numbers and even number parsable string e.g _delete(7) will work like _delete(7)",function(){
    	var note = new notesapp("someName");
        expect(note._delete("8")).to.equal('The note does not exist');
    });
});


describe("Functionality of edit function", function(){
    it("should accept exactly two argument",function(){
    	var note = new notesapp("someName");
        expect(note._edit("pile")).to.equal('all argument must be supplied in order note_id, newtext');
    });

    it("should accept exactly two argument",function(){
    	var note = new notesapp("someName");
        expect(note._edit(70)).to.equal('all argument must be supplied in order note_id, newtext');
    });

    it("should not accept empty string as argument two",function(){
    	var note = new notesapp("someName");
        expect(note._edit(34,'')).to.equal('One of the arguments is not in correct format');
    });

    it("arguments must be in order note_id and newtext",function(){
    	var note = new notesapp("someName");
        expect(note._edit('a text',89)).to.equal('One of the arguments is not in correct format');
    });

    it("should accept two arguments in form number and string e.g _edit('3','This is a text')",function(){
    	var note = new notesapp("someName");
        expect(note._edit(34,'this is a valid text')).to.equal('The Text was not found');
    });
});