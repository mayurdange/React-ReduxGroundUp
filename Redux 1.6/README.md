so far, we have included the scripts from different URL's
in a real world application, this is unreliable as 
1) our server availability depends on the server with those scripts.
2) we are using bandwidth of those servers (stealing bandwidth :( )

hence, we can simply save the js files to the same dir, but again, we would need to keep track of versions for each script.

a better way to do this is using [npm](https://docs.npmjs.com/getting-started/what-is-npm)
first we have to create a package.json, for that we run 'npm init' and accept the defaults.
now we need to add redux dependency, so it is available offline using 'npm install redux --save' 
[ adding --save updated the package.json to add redux dependency, the js will be downloaded in node_modules folder ]

now that we have the scripts, we can include those scripts from within node_modules.

to run this app we have to first run the command 'npm install'
[as this will download the dependencies to node_modules dir, we usually don't commit this dir, as any developer can easily get the dependencies using npm install ]


then just double click the html file or run 'npm start' to do the same.

we have included script to start the html file in package.json , this allows us to easily manage application startup for further tutorials when the startup scripts are more complex.
