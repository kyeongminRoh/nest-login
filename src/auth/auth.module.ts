import { Moduel } from '@nestjs/common';


@Moduel({
    imports: [
        TypeOrmModule.forReatur
    ],
    controllers: [LoginController],
    providers: [
        LoginService,
        LoginRepository
    ],
    exports: [
        LoginService,
        LoginRepository
    ]
})

export class AuthModule {}