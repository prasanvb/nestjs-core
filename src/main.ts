import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return "Hi Prasan, welcome to NestJs";
  }
}

@Module({
  controllers: [AppController],
})
class AppModule {}

async function main() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3030);
}

main();
