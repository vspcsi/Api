import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ExtensionsModule } from './extensions/extensions.module';
import { VersionModule } from './versions/version.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
    imports: [ConfigModule.forRoot({
        load: [configuration]
    }),
        UsersModule, ExtensionsModule, VersionModule],
})

export class AppModule {
}
