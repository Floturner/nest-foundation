import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.time('Req-res time');
    res.on('finish', () => console.timeEnd('Req-res time'));
    next();
  }
}
