/**
 * formStorage.js
 * @author Victor N - www.vitim.us
 * Created on 21-jan-2012
 * 
 * Use saveFormToObject() store the state of all input elements of a form automaticly and export to Object or JSON
 * Use loadFormFromObject() to read the Object or JSON stored and update the state of all input elements of a form
 * 
 * All inputs, textareas, and selects that have a ID name is stored,
 * if a element doesn't have a ID it will be ignored.
 * 
 * The JSON text can be transmited via Ajax or stored to LocalStorage or Cookies
 * 
 * If 2 elements have the same ID information will be replaced, and cause possible crash on loadFormFromObject
 * 
 */


/**
 * Save all input elements and theirs properties of a form in a Object
 * @param {Element} form Reference to an <form> element
 * @param {Boolean} outputToJson True will return a String in JSON format
 */
function saveFormToObject(form, outputToJson){
	
	var tagList=['INPUT','TEXTAREA','SELECT'];
	var object={};
	
	var elements = form.getElementsByTagName('*');
	
	for(var element in elements){ //all elements
	
		element=elements[element];
		
		for(var i=0;i<tagList.length;i++){  //check tagList
			
			if(element.id!=undefined && element.tagName==tagList[i]){
				object[element.id]=getAttributes(element);
				break;
			}
		}
	}
	
	if(outputToJson){ object=JSON.stringify(object); } //Convert [Object object] to JSON String
	
	return (object);
}

/**
 * Extract properties of a element and return a Object
 * @param {Element} element Reference to a element
 */
function getAttributes(element){
	if(element.id!=undefined){
		
		var object={};
		
		var attList=['id','name','type','value','title','alt','placeholder',
		             'disabled','checked','selected','readonly','src'];

		for(var i=0;i<attList.length;i++){ //all attributes equals to attList
			var att=attList[i];
			
			if( element[att]!=undefined && element[att]!="" ){
				object[att]=element[att];
			}
		}
		
		return object;
	}
}


/**
 * Load a Object stored by saveFormToObject() and update the DOM properties
 * @param {Element} form Reference to an <form> element
 * @param {Object} object A Object with the properties stored (Object or JSON)
 */
function loadFormFromObject(form, object){
	
	var tagList=['INPUT','TEXTAREA','SELECT'];
	
	if(typeof object==="string"){ object=JSON.parse(object); }  //Convert JSON String to [Object object]
	
	var elements = form.getElementsByTagName('*');
	for(var element in elements){ //All elements
		element=elements[element]; //current element
		
		for(var i=0;i<tagList.length;i++){ //check tagList
			if(element.id!=undefined && (element.tagName==tagList[i])){
				setAttributes(element, object[element.id]);
				break;
			}
		}
		
		
	}
}


/**
 * Read a Object and update their properties
 * @param {Element} element 
 * @param {Object} object
 */
function setAttributes(element, object){
	
	if(object.id!=undefined){ //this input have settings stored on obj?
			
		for( var attribute in object){
			element[attribute]=object[attribute]; //load attribute from object
		}
	}
}