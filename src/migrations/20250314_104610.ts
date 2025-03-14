import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "statistics" RENAME COLUMN "content" TO "all_users";
  ALTER TABLE "statistics" ALTER COLUMN "all_users" SET DATA TYPE numeric;
  ALTER TABLE "statistics" ADD COLUMN "users_with_us" numeric NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "statistics" ADD COLUMN "content" varchar NOT NULL;
  ALTER TABLE "statistics" DROP COLUMN IF EXISTS "all_users";
  ALTER TABLE "statistics" DROP COLUMN IF EXISTS "users_with_us";`)
}
