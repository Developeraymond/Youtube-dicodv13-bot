make a file called setup.sh put <code>npm install -D node npm
mkdir $(pwd)/node_modules/node/bin/node_modules
mv $(pwd)/node_modules/npm $(pwd)/node_modules/node/bin/node_modules/npm
echo "Copy this and create new Environment variable with name 'PATH' and value with this:"
echo $(pwd)/node_modules/node/bin:$(pwd)/node_modules/node/bin/node_modules/npm/bin

<code> inside the file
then go to shell and type <code>./setup.sh<code>
