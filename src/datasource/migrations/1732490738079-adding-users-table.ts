import { MigrationInterface, QueryRunner } from "typeorm";

export class AddingUsersTable1732490738079 implements MigrationInterface {
    name = 'AddingUsersTable1732490738079'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(100) NOT NULL, "lastName" character varying(100) NOT NULL, "email" character varying NOT NULL, "profilePictureUrl" character varying, "headline" character varying, "about" text, "location" character varying, "isVerified" boolean NOT NULL DEFAULT false, "phoneNumber" character varying, "skills" text array NOT NULL DEFAULT array[]::text[], "currentCompany" character varying, "currentPosition" character varying, "lastLoginAt" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
