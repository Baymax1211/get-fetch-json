
## Usage

```bash
npm i get-fetch-json
```

## Without await
```js
const { fetch_Json } = require('get-fetch-json');
    fetch_Json('URL HERE', {
            method: 'METHOD HERE', // Will defult to 'GET'
            headers: {
                // Header here
            },
            body: {
                // Body here
                // Will always be set to JSON format
            }
    }).then(response => {
        console.log(response)
    })
```

## With await
```js
const { fetch_Json } = require('get-fetch-json');

async function TestFunction() {
    const res = await fetch_Json('URL HERE', {
        method: 'METHOD HERE', // Will defult to 'GET'
        headers: {
            // Header here
        },
        body: {
            // Body here
            // Will always be set to JSON format
        }
    })
    console.log(res)
};

TestFunction()

```