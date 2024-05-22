import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursersModule } from './coursers/coursers.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CoursersModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
