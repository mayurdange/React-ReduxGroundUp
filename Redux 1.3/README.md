So far we have all the dependencies locally, we can run the app, 
but we still need to include each dependency [and manage the dependencies and their import hierarchy]

This is ok for a small app like this one, but in real world, our app is supposed to be much more complex.

browserify is a great, it will combine all such dependencies into a single file, thus making it easy for the server by,
reducing load to request multiple files, reducing the code to automatically include all the dependencies,

so now we do 'npm install browserify --save'
and modify package.json to compile the dependencies into a single file before we start the app. [to start the app, we have to run 'npm start' hereafter ]

so we have lot of changes.. [to aquire require/export syntax]
the tax calculation reducer being a separate file has to export the function using module.export.

so the index.js can require the taxCalculation to be able to call it's function.

and finally we assign the store to window.store, so we can access the store from plain html.




to run this example, :
in 'Redux 1.7' folder, run 
npm install 
npm start

npm install will download the dependencies 
and npm start will make the browser.js file and launch the html.