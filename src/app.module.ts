import { Module } from "@nestjs/common";
import { TasksModule } from "./tasks/tasks.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./config/typeorm.config";
import { AuthModule } from "./auth/auth.module";
import { MqttModule } from "nest-mqtt";
import { TestModule } from "./mq/test.module";

@Module({
	imports: [
		TypeOrmModule.forRoot(typeOrmConfig),
		TasksModule,
		AuthModule,
		MqttModule.forRoot({
      host: "localhost",
      port: 1883,
			queue: false,
      protocol: "mqtt",
      username: "artemis",
      password: "simetraehcapa"
    }),
    TestModule,
	],
})
export class AppModule {}
