import { Injectable } from '@nestjs/common';
import { v5 } from 'uuid';

@Injectable()
export class TextService {
  static textToUuid(
    text: string,
    namespace = 'a6edc906-2f9f-5fb2-a373-efac406f0ef2',
  ): string {
    return v5(text, namespace);
  }
}
