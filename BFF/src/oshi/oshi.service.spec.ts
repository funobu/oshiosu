import { Test, TestingModule } from '@nestjs/testing';
import { OshiService } from './oshi.service';

describe('OshiService', () => {
  let service: OshiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OshiService],
    }).compile();

    service = module.get<OshiService>(OshiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
