import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
// import { ContactController } from './contact/contact.controller'; // we removed it bcs it already coming from ContactModule
import { ContactModule } from './contact/contact.module';
// import { ContactService } from './contact/contact.service';
import { AuthModule } from './auth/auth.module';

@Module({
   imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // removed password bcs no password was set 
      database: 'nestjs',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ContactModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
