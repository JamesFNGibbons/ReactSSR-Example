import { renderToString } from 'react-dom/server';

export default class Render {

  public static reactComponent(reactComponent: any) {
    return `
      <html>
        <head>
          <title>121Operations</title>

          <link rel='stylesheet' type='text/css' href="/static/winstrap/css/winstrap.min.css" />
          <link rel='stylesheet' type="text/css" href="/static/globals.css" />

        </head>
        <body>
          ${renderToString(reactComponent)}

        </body>
      </html>
    `;
  }

}