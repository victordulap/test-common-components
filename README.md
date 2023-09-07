# Common components for XPG by JivyGroup

## To test locally:
1. `npm install` 
2. `npm run build`
3. `npm link`
4. *(in your project)* > `npm link xpg-lc-components`  *(add `--legacy-peer-deps` if needed)*
5. add `"prestart": "rm -rf node_modules/xpg-lc-components/node_modules/react"` in your local projects `package.json`
6. `npm start`

> when updating code in xpg-lc-components, `npm run build` will automatically reflect on your demo project