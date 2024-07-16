
## Model Modules
### Todo
### Project
- Holds multiple todos
### Repository
- Save, load, update data (to something)
### Service
- Manages relationships between model entities. Knows all todos/projects.
- Controller interacts with this module mainly
- Implements
    - Constructor
        - Create Default project
        - Load data
        - Populate #todos and #projects array
    - Create Todo
        - Generate UUID
        - new Todo with UUID
        - Add to #todos
        - Add to default project
        - Add to other project if specified
        - Save
    - Create Project
        - Generate UUID
        - new Project 
        - Add to #projects with UUID
        - Save
    - Delete Task by UUID
        - Identify task with #tasks
        - Call deleteTask(task) of all projects
        - Update
    - Update Task
    - Update Project
    - Get Task by UUID
    - Get Project by UUID


## View Modules
- Each page has each view module
- There are also todo- and project- views for common visual parts
- Have a function to add event listeners to buttons, links, etc.

## Controller Module
- Has access to View and Logic modules.
- Has functions called when the user interact with the page (handlers)
- Calls the addEventListener functions in view modules to register handlers
