# Hover
For feature layer, mouse eveent are disable to remove display field info

use same md stuff as chart
[Demo page](https://jolevesq.github.io/contributed-plugins/hover/samples/hover-index.html)

## How to use the plugin
Inside your configuration file you need
```
"plugins": {
      "hover": {
       
      }
    }
```

Configuration parameters


Inside your html, add this to your head section then replace href and src with your path.
```
<link rel="stylesheet" href="/hover.css" />
<script src="/hover.js"></script>
```

## Test page
To play with the code, from the plugin folder, do npm install, run build then npm run serve.
- http://localhost:6001/samples/hover-index.html

To deploy a test page, do npm run build then npm run deploy. The page will be created at
- https://"Your GitHub UserName".github.io/contributed-plugins/hover/samples/hover-index.html

## Author and support
Author and maintainer [NRCan FGP - Johann Levesque](https://github.com/jolevesq)

To report issue, please create an issue from the [GitHub repository](https://github.com/fgpv-vpgf/contributed-plugins/issues). Add the plugin-hover label and any other applicable one.

## RAMP version
Developed with RAMP version 3.3