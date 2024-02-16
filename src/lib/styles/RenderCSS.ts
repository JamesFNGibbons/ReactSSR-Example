import fs from 'fs';

export default class RenderCSS {
  
  public static renderFile(cssPath: string) {
    
    console.log(cssPath);

    // check that the css file exists..
    if(fs.existsSync(cssPath)) {
      const cssFileContents = fs.readFileSync(cssPath);
      return `<style>${cssFileContents.toString()}</style>`;

    }
    else {
      console.warn("Cannot load CSS path that does not exist...");
      return "<style></style>";
    }
  
  }

}