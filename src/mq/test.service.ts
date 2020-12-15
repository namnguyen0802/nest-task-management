import { Injectable, Logger } from "@nestjs/common";
import { Subscribe, Payload } from "nest-mqtt";
import { stringify } from "querystring";

@Injectable()
export class TestService {
	public logger = new Logger("Mq service");
	@Subscribe({ topic: "test" })
	test(@Payload() payload) {
		this.logger.log(`Payload is:  ${stringify(payload)}`);
	}
}
