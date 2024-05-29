import { Controller, Get, Param, Render, Res } from '@nestjs/common';
import { Response } from "express";

const routes = {
    "um-skjoldunga": "pages/about"
}

@Controller()
export class PagesController {
    constructor() { }

    @Get()
    @Render('pages/index')
    handleIndex() { }

    @Get(':route')
    //@Render('pages/index')
    handleGet(@Param() params: { route: string }, @Res() res: Response) {
        if (!routes[params.route]) {
            return res.render('pages/error', {
                errname: '404',
                errdescr: 'Þessi síða fannst ekki.'
            });
        }

        return res.render(routes[params.route]);
    }
}