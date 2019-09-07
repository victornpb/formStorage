# formStorage
Javascript "library" that I used to save the state of an entire form

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
