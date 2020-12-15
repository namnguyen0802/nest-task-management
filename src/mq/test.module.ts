import { Module } from '@nestjs/common';
import { TestService } from './test.service';

@Module({
  exports: [TestService],
  providers: [TestService],
})
export class TestModule {}
