## STEPS <
npm init 
definir (nombre) dejar que asigne por default
definir descripcion
definir autor 
## Instalando nuestra primer dependencia con NPM
Del siguiente modo se instala como una dependencia para entorno de produccion, se agregara en package.json
una ves finalizada la instalacion tambien creara package-lock.json pero no debe modificarse

npm install express

y las dependecias de desarrollo se agregan como 

npm install --save-dev nodemon 

ver las diferencias de instalacion en package.json que hace referencia en cuanto a produccion y desarrollo.Para levantar un servidor con express agregamos el archivo en la linea de test en package.json, es decir ahora sera "dev": en lugar de "text": y ejecutamos con

npm run dev

