import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';

const revision = require('child_process')
    .execSync('git log --pretty=format:"%h" -n1')
    .toString()
    .trim();

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(
        AppModule,
    );

    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    hbs.registerPartials(join(__dirname, '..', 'views/partials'));

    // handlebars helpers
    hbs.registerHelper('prod', () => {
        return process.env.NODE_ENV === 'production';
    });
    hbs.registerHelper('date', () => {
        return new Date().toUTCString();
    });
    hbs.registerHelper('ver', () => {
        return revision;
    });

    await app.listen(3000);
}
bootstrap();