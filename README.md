# top-js-cv
The Odin Project, Full Stack JavaScript Path, JavaScript, React JS, Project: CV Application

# Notes
- Not using CRA
- I'm going for composition of self contained components, so I end up with a bunch of wrappers, feeling conflicted, every tag used in a component is already a wrapper of an HTML element.
- Also, issues using CSS Modules, Styled Components are covered later in the course
    - you can't extend global styles with `composes:`, so I have duplicate css
    - I think that is what you end up with if using css in JS, so do I care?
    - I want self contained components, but this is not generic code that is used outside the project.
    - so do I want to reference global style in my components or not?
    - I think I decided to make util.module.css to avoid any global styles

# TODO:
- add file for utility styles used across components; to avoid global
- default page to edit, add dummy data button to set a bunch of default crap for testing
- Edit button should toggle read only view
    - look into https://reactjs.org/docs/context.html for global flag
    - Edit button sets global Read Only flag; make input wrappers conditionally render text vs par/div.
    - read mode should disable submit button, edit mode enable
- form use is unclear; decide buttons - section or page
    - There is no back end, nothing is being submitted.
    - I like the idea of each section being a separate form, so the names are scoped; could have same field name in two sections.  i.e. school and info both have name
    - if the form is page level, then each input name will have to be unique creating dependency across them.
- fields in school and work have to be arrays
- validations - don't have a submit yet
    - year range, can type numbers out of range
    - phone and email
