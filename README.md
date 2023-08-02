# Travel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

# About
Single Page App for for sharing your favorite mountain adventure. The application allows visitors to browse through different publications. Users may register email and password, which allows them to create their own publications. Creators can also edit and delete their own publications at any time.

# Technical Details
The application have following resources:

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
A package.json file, containing list of common dependencies.
To start the server, execute the command “node server.js” via the command-line terminal.
Local REST Service: softUni-practice server.

# Application Components
Navigation bar – Guests can see the links to the home, catalog, sign in and sign up pages. The logged in user navbar will contain the links to the home page, catalog, create page, profile page and logout.

Login page – By providing a email and password, the app will login user. Login functionalty will send POST request to the correct endpoint with email and password. Upon success, the REST service will return information about the existing user. After successful login the user will be redirected to the catalog page.

Register page – the page contains a form for new user registration. By providing a user information and password, the app will register a new user in the system. Register functionalty will send POST request . Upon success, the REST service will return information about the existing user. After successful registration the user will be redirected to the catalog page.

Logout page – The logout action is available for the logged in users. Logout functionalty will send GET request to the correct endpoint, with access token sent in the X-Authorization header. Any session information will be cleared.

Home page – All users will be welcomed by the Home page, where they can naviagate to the other pages.

Catalog page – The page contains a list with the last 3 destinations in the system.

Create destination page – The create page is available for logged in users. It contains a form for creating new destination. Creating fuctionalty sends POST request to the correct endpoint. The service will return the newly created record. Upon success, the user will be redirected to the catalog page.

Details page – The logged in users are able to view details about every adventure. Clicking the Details button in the view will display the page. If the currently logged in user is the creator of the publication, he can clickt the Edit and Delete buttons.


Edit page – The edit page is available for the owner to edit their own publication. The service will return the modified record. Upon success the user will be redirected to the details page.

Delete page – The delete action is available for the owner. When the owner clicks on the Delete button, the publication will be deleted from the system.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
