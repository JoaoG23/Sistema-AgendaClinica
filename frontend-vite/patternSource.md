### Rule this code

1. Directory with many files or directories will be lower case Ex: api,components,hooks,fuction makePerson
2. utils, hooks and many thing that don't to be components
3. All Component will be directory with letter initial Uppercase for example: Card, ButtonDefault
1. All structure of creation of the component
is that:

    NameComponent = Dirname
        |------- index.tsx = Obs> File without name and source
        |-------- NameComponent.spec.tsx = File test
        |-------- api = if there are any conexion with HTTP
        |-------- utils = for functions used just this component
        |-------- components = for small components used just this component
        |-------- interfaces = for interfaces or types used just this component  
        |-------- custom-hooks = for custom hooks 
        |-------- Another main components or big components 