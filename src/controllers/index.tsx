import {
  Response, Params, Controller, Get,
  attachControllers, Middleware
} from '@decorators/express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import HeaderComponent from '../ui/components/HeaderComponent';
import RenderCSS from '../lib/styles/RenderCSS';
import Render from '../lib/ui/Render';

@Controller("/")
export class IndexController {

  @Get('/')
  public index(@Response() res, @Params('id') id: string) {

    // let html = renderToString(
    //   <HeaderComponent />
    // );
    // html += RenderCSS.renderFile(__dirname + "/../ui/globals.css");

    res.send(Render.reactComponent(<HeaderComponent />));
  }

}